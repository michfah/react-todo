var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function (e) {
    var showCompletedTodos = this.refs.showCompletedTodos.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompletedTodos, searchText);
  },
  render: function() {
    return (
      <div className="container__header">
        <div>
          <input type="search" 
                 ref="searchText" 
                 placeholder="Search Todos" 
                 onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" 
                   ref="showCompletedTodos" 
                   onChange={this.handleSearch}/>
            <strong>Show Completed Todos</strong>
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;