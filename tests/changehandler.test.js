let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  test('Tests for ChangeHandler', function() {
    //Arrage
    let changehandler = new ChangeHandler(200)
    // Act
// changehandler.insertCoin('penny') - example of act
    // Assert
    expect(changehandler.amountDue).toBe(200);
    expect(changehandler.cashTendered).toBe(0);
  });
  test('Inserting a quarter adds 25', function() {
    //Arrage
    let changehandler = new ChangeHandler(25)
    // Act
    changehandler.insertCoin("quarter")
    // Assert
    expect(changehandler.cashTendered).toBe(25);
  });
  test('Inserting a dime adds 10', function() {
    //Arrage
    let changehandler = new ChangeHandler(10)
    // Act
    changehandler.insertCoin("dime")
    // Assert
    expect(changehandler.cashTendered).toBe(10);
  });
  test('Inserting a dime adds 5', function() {
    //Arrage
    let changehandler = new ChangeHandler(5)
    // Act
    changehandler.insertCoin("nickel")
    // Assert
    expect(changehandler.cashTendered).toBe(5);
  });
  test('Inserting a penny adds 1', function() {
    //Arrage
    let changehandler = new ChangeHandler(1)
    // Act
    changehandler.insertCoin("penny")
    // Assert
    expect(changehandler.cashTendered).toBe(1);
  });
  test('Calling function multiple times continues to add on to the amount', function() {
    //Arrage
    // const continueAdd = []
    // for (let changehandler = new ChangeHandler(25)
    let changehandler = new ChangeHandler(75)
    // Act
    changehandler.insertCoin("penny")
    changehandler.insertCoin("penny")
    changehandler.insertCoin("quarter")
    // Assert
    expect(changehandler.cashTendered).toBe(27);
  });
  test('true if cashTendered is more than amountDue', function() {
    //Arrage
    let changehandler = new ChangeHandler(10)
    // Act
    changehandler.insertCoin("quarter")
    // Assert
    expect(changehandler.isPaymentSufficient()).toBe(true);
  });
  test('false if cashTendered less than amountDue', function() {
    //Arrage
    let changehandler = new ChangeHandler(25)
    // Act
    changehandler.insertCoin("dime")
    // Assert
    expect(changehandler.isPaymentSufficient()).toBe(false);
  });
  test('true if cashTendered less than amountDue', function() {
    //Arrage
    let changehandler = new ChangeHandler(25)
    // Act
    changehandler.insertCoin("quarter")
    // Assert
    expect(changehandler.isPaymentSufficient()).toBe(true);
  });
  test('32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', function() {
    //Arrage
    let changehandler = new ChangeHandler(75)
    // Act
    changehandler.cashTendered = 107
    // Assert
    expect(changehandler.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
  });
  test('32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', function() {
    //Arrage
    let changehandler = new ChangeHandler(55)
    // Act
    changehandler.cashTendered = 65
    // Assert
    expect(changehandler.giveChange()).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
  });
  test('32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', function() {
    //Arrage
    let changehandler = new ChangeHandler(25)
    // Act
    changehandler.cashTendered = 52
    // Assert
    expect(changehandler.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
  });
  test('32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', function() {
    //Arrage
    let changehandler = new ChangeHandler(85)
    // Act
    changehandler.cashTendered = 153
    // Assert
    expect(changehandler.giveChange()).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
  }); 
});























// test('Inserting a quarter adds 25', function() {
  //   // this.cashTendered = 25;
  //   expect(insertCoin.type('quarter')).toEqual(25);
  // })
  // test('Inserting a dime adds 10', function() {
  //   expect(this.cashTendered('dime')).toEqual(10);
  // })
  // test('Inserting a nickel adds 5', function() {
  //   expect(this.cashTendered('nickel')).toEqual(5);
  // })
  // test('Inserting a penny adds 1', function() {
  //   expect(this.cashTendered('penny')).toEqual(1);
  // })
  // test('Calling function multiple times continues to add on to the amount', function() {
  //   expect(insertCoin(type)).toBeCalled(4);
  // })
  // test('Returns true if cashTendered more than amountDue', function() {
  //   this.cashTendered > this.amountDue;
  //   expect(isPaymentSufficient()).toReturn('true');
  // })
  // test('Returns false if cashTendered less than amountDue', function() {
  //   this.cashTendered < this.amountDue;
  //   expect(isPaymentSufficient()).toReturn('false');
  // })
  // test('Returns true if cashTendered equal to amountDue', function() {
  //   this.cashTendered = this.amountDue;
  //   expect(isPaymentSufficient()).toReturn('true');
  // })
  // test('32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', function() {
  //   expect(giveChange()).toReturn('quarters: 1, dimes: 0, nickels: 1, pennies: 2');
  // })