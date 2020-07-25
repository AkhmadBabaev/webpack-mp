class Article {
  constructor(element) {
    this._articleElem = element;
    this._init();
  }

  _init() {
    this._button = this._foundButton();
    this._button.addEventListener('click', this._handleArticleButtonClick.bind(this));
  }

  _foundButton() {
    return this._articleElem.querySelector('.js-article__button').firstElementChild;
  }

  _handleArticleButtonClick() {
    this._articleElem.classList.toggle('article_is_closed');
    this._articleElem.classList.contains('article_is_closed')
      ? this._button.textContent = 'show more'
      : this._button.textContent = 'show less';
  }
}

export default Article;
