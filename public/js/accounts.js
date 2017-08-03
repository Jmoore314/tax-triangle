angular.module('accountApp', [])
  .controller('AccountListController', function() {
    var accountList = this;

    accountList.accounts = [{name:'john', 
        restricted:'1234', 
        nonQualified:'1234', 
        nonQualifiedAnnuities:'1234', 
        qualified:'1234', accTotal: '4936'}];

    accountList.getAccTotal = function() {
      return accountList.restAmm + accountList.nonQualAmm + accountList.nonQualAnnAmm + accountList.qualAmm
    }

    accountList.addAccount = function() {
      accountList.accounts.push({
        name:accountList.name, 
        restricted:accountList.restAmm, 
        nonQualified:accountList.nonQualAmm, 
        nonQualifiedAnnuities:accountList.nonQualAnnAmm, 
        qualified:accountList.qualAmm, 
        accTotal:accountList.getAccTotal()
      });
      accountList.restAmm = '';
      accountList.nonQualAmm = '';
      accountList.nonQualAnnAmm = '';
      accountList.qualAmm = '';
    };
 
    // accList.getAccTotal = function() {
    //   return this.restText + this.nonQualText + this.nonQualAnnText + this.qualText
    // };

    // todoList.remaining = function() {
    //   var count = 0;
    //   angular.forEach(todoList.todos, function(todo) {
    //     count += todo.done ? 0 : 1;
    //   });
    //   return count;
    // };
 
    // todoList.archive = function() {
    //   var oldTodos = todoList.todos;
    //   todoList.todos = [];
    //   angular.forEach(oldTodos, function(todo) {
    //     if (!todo.done) todoList.todos.push(todo);
    //   });
    // };
  });