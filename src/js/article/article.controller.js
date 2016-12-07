import marked from 'marked';

class ArticleCtrl {
  constructor(article, $sce, $rootScope) {
    'ngInject';

    this.article = article;

    // update the title of the page
    $rootScope.setPageTitle(this.article.title);

    // transform the markdown into HTML
    this.article.body = $sce.trustAsHtml(marked(this.article.body, {sanitize: true}));

  }
}


export default ArticleCtrl;