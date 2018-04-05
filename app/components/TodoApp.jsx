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
          text: 'Walk dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Paint the bedroom',
          completed: false
        },
        {
          id: uuid(),
          text: 'Do the shopping',
          completed: true
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
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
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;