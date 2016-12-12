class ArticleListCtrl {
	constructor(Articles) {
		'ngInject';

		this._Articles = Articles;

		this.setListTo(this.listConfig);
	}

	setListTo(newList) {
		// set the current list to an empty array
		this.list = [];

		// set listConfig to the new lists config
		this.listConfig = newList;

		this.runQuery();
	}

	runQuery() {
		// show the loading indicator
		this.loading = true;

		// create an object for this query
		let queryConfig = {
			type: this.listConfig.type,
			filters: this.listConfig.filters || {}
		};

		// set the limit filter from the components attribute
		queryConfig.filters.limit = this.limit;

		// run the query
		this._Articles
			.query(queryConfig)
			.then(
				(res) => {
					this.loading = false;

					// update list and total pages
					this.list = res.articles;
				}
			);
	}
}

let ArticleList = {
	bindings: {
		limit: '=',
		listConfig: '='
	},
	controller: ArticleListCtrl,
	templateUrl: 'components/article-helpers/article-list.html'
};

export default ArticleList;