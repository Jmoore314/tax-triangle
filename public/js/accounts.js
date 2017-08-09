angular.module('accountApp', [])
  .controller('AccountListController', function() {
    var accountList = this;

    accountList.accounts = [];

    accountList.restrictedTotal = 0;
    accountList.nonQualTotal = 0;
    accountList.nonQualAnnTotal = 0;
    accountList.QualTotal = 0;
    accountList.allTotal = 0;

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
      accountList.defaults();

      accountList.accounts.push({
        name:accountList.name, 
        restricted:accountList.restAmm, 
        nonQualified:accountList.nonQualAmm, 
        nonQualifiedAnnuities:accountList.nonQualAnnAmm, 
        qualified:accountList.qualAmm, 
        accTotal:accountList.getAccTotal()
      });

      accountList.updateTotals();
      accountList.reset();
    };

    accountList.defaults = function() {
      if (accountList.restAmm == null) {
        accountList.restAmm = 0;
      };

      if (accountList.nonQualAmm == null) {
        accountList.nonQualAmm = 0;
      };

      if (accountList.nonQualAnnAmm == null) {
        accountList.nonQualAnnAmm = 0;
      };

      if (accountList.qualAmm == null) {
        accountList.qualAmm = 0;
      };
    }

    accountList.updateTotals = function() {
      accountList.restrictedTotal += accountList.restAmm;
      accountList.nonQualTotal += accountList.nonQualAmm;
      accountList.nonQualAnnTotal += accountList.nonQualAnnAmm;
      accountList.QualTotal += accountList.qualAmm;
      accountList.allTotal += accountList.getAccTotal();
    };

    accountList.reset = function() {
      accountList.name = null;
      accountList.restAmm = null;
      accountList.nonQualAmm = null;
      accountList.nonQualAnnAmm = null;
      accountList.qualAmm = null;
    }
  });