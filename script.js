document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('article');
  
    // Add event listener for each article
    articles.forEach(article => {
      article.addEventListener('click', () => {
        article.classList.toggle('fadeIn');
      });
    });
  });
  