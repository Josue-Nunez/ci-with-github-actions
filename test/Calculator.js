//load node.js assertion library
const assert = require("assert");

//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests", function() {

  it("Adds 1 and 2", function() {
    var result = calc.add(1, 2);
    assert.equal(result, 3);
  });
  it("Subtracts 1 and 2", function() {
    var result = calc.sub(1, 2);
    assert.equal(result, -1);
  });
  it("Multiplies 1 and 2", function() {
    var result = calc.mul(1, 2);
    assert.equal(result, 2);
  });
  it("Divides 1 and 2", function() {
    var result = calc.div(1, 2);
    assert.equal(result, 0.5);
  });

});
