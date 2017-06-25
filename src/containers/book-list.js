import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import  { bindActionCreators } from 'redux'


class BookList extends Component {
  renderBookList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderBookList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {   // whatever is returned in here will show up as props inside BookList
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {  // whatever is returned from here, will end up as props on the bookList container
  return bindActionCreators( {selectBook: selectBook}, dispatch)  // whenever selectBook() is called, the results should be passed to all our reducers
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)  // This line of code promotes bookList from component to container.
// It needs to know about this new dispatch method, selectBook. Make it available as a prop
