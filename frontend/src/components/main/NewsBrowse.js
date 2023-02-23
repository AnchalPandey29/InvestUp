import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ title, image, description, link }) => (
  <div className="news-card">
    <Link to={link}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </Link>
  </div>
);

const NewsBrowser = ({ news }) => (
  <div className="news-browser">
    {news.map((article) => (
      <NewsCard
        key={article.id}
        title={article.title}
        image={article.image}
        link={article.link}
      />
    ))}
  </div>
);

export default NewsBrowser;
