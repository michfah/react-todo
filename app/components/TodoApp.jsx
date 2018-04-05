var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompletedTodos: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk dog'
        },
        {
          id: 2,
          text: 'Paint the bedroom'
        },
        {
          id: 3,
          text: 'Do the shopping'
        },
        {
          id: 4,
          text: 'Clean the yard'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert(text);
  },
  handleSearch: function (showCompletedTodos, searchText) {
    this.setState({
      showCompletedTodos: showCompletedTodos,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;