angular.module('accApp', [])
  .controller('AccListController', function() {
    var accList = this;

    accList.accs = [{name:'Account 1', restricted:'rest', nonQualified:'non qual', nonQualifiedAnnuities:'annu', qualified:'qual' }];

    accList.getAccTotal = function() {
      
    }
 
    accList.addAcc = function() {
      accList.accs.push({name:accList.name});
      accList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });