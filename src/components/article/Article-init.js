import Article from './Article';

const articles = document.querySelectorAll('.js-article');

articles.forEach((_, index) => new Article(articles[index]));
