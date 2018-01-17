import React from 'react';
import { connect } from 'react-redux';  // connects a React component with the Redux Store


// for connecting state.article with the component
const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

// List component will interact with the Redux store.
const List = connect(mapStateToProps)(ConnectedList);

export default List;
