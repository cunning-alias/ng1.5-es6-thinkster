function EditorConfig($stateProvider) {
	'ngInject';

	$stateProvider
	.state('app.editor', {
		url: '/editor',
		controller: 'EditorCtrl',
		controllerAs: '$ctrl',
		templateUrl: 'editor/editor.html',
		title: 'Editor',
		resolve:{
			auth: function(User) {
				return User.ensureAuthIs(true);
			},
			article: function(Articles, User, $state, $stateParams) {
				// if we are trying to edit an article
				if ($stateParams.slug) {
					return Articles.get($stateParams.slug).then(
						(article) => {
							// if current user is the author, resolve the article data
							if (User.current.username === article.author.username) {
								return article;

							// otherwise redirect them to the home page
							} else {
								$state.go('app.home');
							}
						},
						// if there's an error (article doesnt exist etc), redirect to home page
						(err) => $state.go('app.home')
					);

				// if this a new article, then just return null
				} else {
					return null;
				}
			}
		}
	});
};

export default EditorConfig;