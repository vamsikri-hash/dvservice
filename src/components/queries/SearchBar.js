import React, { useContext, useState } from "react";
import AnswerContext from "../../context/answers/answerContext";
import HistoryContext from "../../context/history/historyContext";
import "./Bar.css";

const SearchBar = () => {
  const answerContext = useContext(AnswerContext);
  const historyContext = useContext(HistoryContext);
  const [query, setquery] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    console.log(query);
    answerContext.searchAnswers(query);
    //historyContext.AddHistories(query);
  };
  const onChange = e => {
    setquery(e.target.value);
  };
  return (
    <div className='our-search'>
      <div className='layer'>
        <div className='headin'>How Can we help you?</div>
        <nav className='at-middle'>
          <div
            className='nav-wrapper abc'
            style={{ backgroundColor: "whitesmoke" }}
          >
            <form onSubmit={onSubmit}>
              <div className='input-field'>
                <input
                  id='search'
                  name='query'
                  value={query}
                  type='search'
                  onChange={onChange}
                  required
                />
                <label className='label-icon' htmlFor='search'>
                  <i className='material-icons' style={{ color: "black" }}>
                    search
                  </i>
                </label>
                <i className='material-icons'>close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SearchBar;
