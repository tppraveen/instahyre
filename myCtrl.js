app.controller('myCtrl', function($scope) {
  var cleanAccount = function() {
    var account = {
      name: 'Bob Jones',
      startingBalace: 100.00,
      runningBalance:0
    }
    return account;
  };  
   var cleanTransaction = function() {
    var transaction = {
      type: '',
      amount: 0.00,
      description: '--'
    }
    return transaction;
  };
  var transactions = [{
    amount: 50.00,
    description: 'aadhar.pdf',
    type: 'Praveen'
  } ];
  $scope.transaction = cleanTransaction();
  $scope.account = cleanAccount();
  $scope.transactionList = transactions;
  $scope.saveTransaction = function() {
    var amount = parseFloat($scope.transaction.amount);
    var num = parseFloat($scope.account.runningBalance);
    $scope.account.runningBalance++;
    
    $scope.transaction.amount = amount;
    transactions.push($scope.transaction);
    $scope.transaction = cleanTransaction();
  };
});