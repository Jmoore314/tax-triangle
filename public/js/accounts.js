angular.module('accountApp', [])
  .controller('AccountListController', function() {
    var accountList = this;

    accountList.accounts = [{name:'john', 
        restricted:'1234', 
        nonQualified:'1234', 
        nonQualifiedAnnuities:'1234', 
        qualified:'1234', accTotal: '4936'}];

    accountList.restrictedTotal = 1234;
    accountList.nonQualTotal = 1234;
    accountList.nonQualAnnTotal = 1234;
    accountList.QualTotal = 1234;
    accountList.allTotal = 4936;

    accountList.getRestPercent = function() {
      if (accountList.allTotal == 0) {
        return  0
      } else {
        return (accountList.restrictedTotal / accountList.allTotal) * 100;
      }
    };

    accountList.getNQPercent = function() {
      if (accountList.allTotal == 0) {
        return  0
      } else {
        return (accountList.nonQualTotal / accountList.allTotal) * 100;
      }
    };

    accountList.getNQAPercent = function() {
      if (accountList.allTotal == 0) {
        return  0
      } else {
        return (accountList.nonQualAnnTotal / accountList.allTotal) * 100;
      }
    };

    accountList.getQPercent = function() {
      if (accountList.allTotal == 0) {
        return  0
      } else {
        return (accountList.QualTotal / accountList.allTotal) * 100;
      }
    };

    accountList.getAccTotal = function() {
      return accountList.restAmm + accountList.nonQualAmm + accountList.nonQualAnnAmm + accountList.qualAmm;
    };

    accountList.addAccount = function() {
      accountList.accounts.push({
        name:accountList.name, 
        restricted:accountList.restAmm, 
        nonQualified:accountList.nonQualAmm, 
        nonQualifiedAnnuities:accountList.nonQualAnnAmm, 
        qualified:accountList.qualAmm, 
        accTotal:accountList.getAccTotal()
      });
      accountList.updateTotals();
      accountList.name = '';
      accountList.restAmm = '';
      accountList.nonQualAmm = '';
      accountList.nonQualAnnAmm = '';
      accountList.qualAmm = '';
    };

    accountList.updateTotals = function() {
      accountList.restrictedTotal += accountList.restAmm;
      accountList.nonQualTotal += accountList.nonQualAmm;
      accountList.nonQualAnnTotal += accountList.nonQualAnnAmm;
      accountList.QualTotal += accountList.qualAmm;
      accountList.allTotal += accountList.getAccTotal();
    };
 
    // todoList.archive = function() {
    //   var oldTodos = todoList.todos;
    //   todoList.todos = [];
    //   angular.forEach(oldTodos, function(todo) {
    //     if (!todo.done) todoList.todos.push(todo);
    //   });
    // };
  });