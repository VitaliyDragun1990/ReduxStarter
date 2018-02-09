import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions";
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                    </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

/********** Bind our component to reducers via it's state ****************/

// state argument is this case is a whole application state
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

/********** Bind action creator function to all our reducers ***************/

// Anything returned from this function will end up as props
// on the BookList container (in this case it will be props.selectBook function)
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook }, dispatch);
}

// Connect our component BookList to Redux reducer to managing it's state. It also promote BookList
// from a component to a container - it needs know about this new dispatch method, selectBook. Make it
// available as a props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);