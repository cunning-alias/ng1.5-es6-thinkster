import marked from 'marked';

class ArticleCtrl {
  constructor(article, User, Comments, $sce, $rootScope) {
    'ngInject';

    this.article = article;
    this._Comments = Comments;

    this.currentUser = User.current;

    // update the title of the page
    $rootScope.setPageTitle(this.article.title);

    // transform the markdown into HTML
    this.article.body = $sce.trustAsHtml(marked(this.article.body, {sanitize: true}));

    // Initialize blank comment form
    this.resetCommentForm();

  }

  resetCommentForm() {
  	this.commentForm = {
  		isSubmitting: false,
  		body: '',
  		errors: []
  	}
  }

  addComment() {
  	this.commentForm.isSubmitting = true;

  	this._Comments.add(this.article.slug, this.commentForm.body).then(
  		(comment) => {
  			console.log(comment);
  			this.resetCommentForm();
  		},
  		(err) => {
  			this.commentForm.isSubmitting = false;
  			this.commentForm.errors = err.data.errors;
  		}
  	);
  }
}


export default ArticleCtrl;