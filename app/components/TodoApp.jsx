var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompletedTodos: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk dog'
        },
        {
          id: uuid(),
          text: 'Paint the bedroom'
        },
        {
          id: uuid(),
          text: 'Do the shopping'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
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