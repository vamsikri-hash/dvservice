import React, { useContext } from "react";
import PropTypes from "prop-types";
import ArticleContext from "../../context/article/articleContext";
import { Link } from "react-router-dom";

const Article = ({ articleitem }) => {
  const articleContext = useContext(ArticleContext);
  const { DeleteArticle, setCurrent, clearCurrent } = articleContext;

  const { id, title, content, created_at, updated_at } = articleitem;
  const created = new Date(created_at);
  const updated = new Date(updated_at);

  const onDelete = () => {
    //console.log(id);

    DeleteArticle(id);
    clearCurrent();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 '>
          <div className='card blue-grey lighten-1 card-panel hoverable'>
            <div className='card-content white-text'>
              <span className='card-title'>
                {title && <h3 className=''>{title}</h3>}
              </span>
              {content && <p className=''>{content}</p>}
            </div>
            <div className='card-action'>
              <ul className=''>
                {created_at && (
                  <li>
                    <span className=''>Created On </span>-
                    {created.toDateString()}
                  </li>
                )}
                {updated_at && (
                  <li>
                    <span className=''>Updated On </span>-{" "}
                    {updated.toDateString()}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ display: "flex" }}>
        <p className=''>
          <button className='' onClick={() => setCurrent(articleitem)}>
            <Link> Edit</Link>
          </button>
        </p>
        <p className=''>
          <button className='' onClick={onDelete}>
            Delete
          </button>
        </p>
        </div>*/}
    </div>
  );
};

Article.propTypes = {
  articleitem: PropTypes.object.isRequired
};
export default Article;
