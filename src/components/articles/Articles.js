import React, { useEffect, useContext } from "react";
import ArticleContext from "../../context/article/articleContext";
import Article from "./Article";
import "./article.css";

const Articles = () => {
  const articleContext = useContext(ArticleContext);
  const { articles, GetArticles } = articleContext;
  useEffect(() => {
    GetArticles();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='pg-color' style={{ marginTop: "100px" }}>
      <div className='row '>
        <div className='grid-2'>
          {articles !== null ? (
            articles.map(articleitem => (
              <Article key={articleitem.id} articleitem={articleitem} />
            ))
          ) : (
            <h2>nothing</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
