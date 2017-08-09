angular.module('accountApp', [])
  .controller('AccountListController', function() {
    var accountList = this;

    this.accounts = [];

    this.restrictedTotal = 0;
    this.nonQualTotal = 0;
    this.nonQualAnnTotal = 0;
    this.QualTotal = 0;
    this.allTotal = 0;

    this.getRestPercent = function() {
      if (this.allTotal == 0) {
        return  0
      } else {
        return (this.restrictedTotal / this.allTotal) * 100;
      }
    };

    this.getNQPercent = function() {
      if (this.allTotal == 0) {
        return  0
      } else {
        return (this.nonQualTotal / this.allTotal) * 100;
      }
    };

    this.getNQAPercent = function() {
      if (this.allTotal == 0) {
        return  0
      } else {
        return (this.nonQualAnnTotal / this.allTotal) * 100;
      }
    };

    this.getQPercent = function() {
      if (this.allTotal == 0) {
        return  0
      } else {
        return (this.QualTotal / this.allTotal) * 100;
      }
    };

    this.getAccTotal = function() {
      return this.restAmm + this.nonQualAmm + this.nonQualAnnAmm + this.qualAmm;
    };

    this.addAccount = function() {
      this.defaults();

      this.accounts.push({
        name:this.name, 
        restricted:this.restAmm, 
        nonQualified:this.nonQualAmm, 
        nonQualifiedAnnuities:this.nonQualAnnAmm, 
        qualified:this.qualAmm, 
        accTotal:this.getAccTotal()
      });

      this.updateTotals();
      this.reset();
    };

    this.defaults = function() {
      if (this.restAmm == null) {
        this.restAmm = 0;
      };

      if (this.nonQualAmm == null) {
        this.nonQualAmm = 0;
      };

      if (this.nonQualAnnAmm == null) {
        this.nonQualAnnAmm = 0;
      };

      if (this.qualAmm == null) {
        this.qualAmm = 0;
      };
    }

    this.updateTotals = function() {
      this.restrictedTotal += this.restAmm;
      this.nonQualTotal += this.nonQualAmm;
      this.nonQualAnnTotal += this.nonQualAnnAmm;
      this.QualTotal += this.qualAmm;
      this.allTotal += this.getAccTotal();
    };

    this.reset = function() {
      this.name = null;
      this.restAmm = null;
      this.nonQualAmm = null;
      this.nonQualAnnAmm = null;
      this.qualAmm = null;
    }
  });