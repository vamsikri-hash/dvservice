import React, { useState, useEffect, useContext } from "react";
import ArticleContext from "../../context/article/articleContext";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";
import { toast, ToastContainer } from "react-toastify";
const ArticleForm = () => {
  const articleContext = useContext(ArticleContext);
  const {
    AddArticle,
    UpdateArticle,
    clearCurrent,
    current,
    error
  } = articleContext;

  useEffect(() => {
    if (current !== null) {
      setArticle(current);
    } else {
      setArticle({ title: "", content: "" });
    }
  }, [error, articleContext, current]);
  const [article, setArticle] = useState({ title: "", content: "" });
  const { title, content } = article;
  const onChange = e => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("entering submit");
    console.log(article);
    if (title === "") {
      toast.error("Empty title nt allowed");
    } else if (content === "") {
      toast.error("empty content not allowed");
    }
    if (current === null) {
      AddArticle(article);
    } else {
      UpdateArticle(article);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <div className='container'>
      <ToastContainer />
      <h1>Submit your Request</h1>

      <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              id='icon_prefix'
              type='text'
              name='title'
              value={title}
              onChange={onChange}
            />

            <label htmlFor='icon_prefix' className='active'>
              Title
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <textarea
              id='textarea1'
              className='materialize-textarea'
              name='content'
              value={content}
              onChange={onChange}
            ></textarea>
            <label htmlFor='textarea1' className='active'>
              Description
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='submit'
              value={current ? "Edit Article" : "Submit Request"}
              name='action'
              className='btn waves-effect waves-light'
            />
          </div>
        </div>

        {current && (
          <div className='row'>
            <button className='btn waves-effect waves-light' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ArticleForm;
