/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  /*
  splits the input string, returning the number
  or "invalid number" if the number is not valid
  */
  this.getNum = function(input) {
    let regexResult = regexUnit(input);
    let lastIndex;
    if(regexResult != null) {
      lastIndex = regexResult.index;
    } else {
      lastIndex = input.length;
    }
    let slicedNum = input.slice(0, lastIndex);
    let splitNum = slicedNum.split('/');
    if(splitNum.length > 2) {
      return "invalid number";
    }
    if (splitNum.length == 2) {
      let num1, num2;
      num1 = parseFloat(splitNum[0]);
      num2 = parseFloat(splitNum[1]);
      if(isNaN(num1) || isNaN(num2)) {
        return "invalid number";
      }
      return num1 / num2;
    }
    let num = parseFloat(slicedNum);
    if(isNaN(num)) {
      return "invalid number";
    }
    return num;
  };

  /*
  parses the input string, returning the measurement unit
  if it is in: ['gal', 'L', 'lbs', 'kg', 'mi', 'km'] or
  'invalid unit' if it is not.
  */
  this.getUnit = function(input) {
    let regexResult = regexUnit(input);
    if(regexResult == null) {
      return "invalid unit";
    } else {
      return regexResult[0];
    }
  };

  /*
  takes a valid measurement unit and returns it's conversion opposite:
  gal <-> L
  lbs <-> kg
  mi <-> km
  */
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case "gal":
        return "L";
      case "lbs":
        return "kg":
      case "mi":
        return "km":
      case "L":
        return "gal";
      case "kg":
        return "lbs";
      case "km":
        return "mi";
      default:
        return "invalid unit";
    }
  };

  this.spellOutUnit = function(unit) {
    switch(initUnit) {
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds":
      case "mi":
        return "miles":
      case "L":
        return "liters";
      case "kg":
        return "kilograms";
      case "km":
        return "kilometers";
      default:
        return "invalid unit";
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch(initUnit) {
      case "gal":
        return initNum * galToL;
      case "lbs":
        return initNum * lbsToKg:
      case "mi":
        return initNum * miToKm:
      case "L":
        return initNum / galToL;
      case "kg":
        return initNum / lbsToKg;
      case "km":
        return initNum / miToKm;
      default:
        return "invalid unit";
    }
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if(initNum == "invalid number") {
      if(initUnit == "invalid unit") {
        return "invalid number and unit";
      }
      return "invalid number";
    }
    if(initNum == "invalid unit") {
      return "invalid unit";
    }
    return initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
  };

  this.regexUnit = function(input) {
    let unitRegExp = /[A-z]+$/;
    return input.match(unitRegExp);
  }
}

module.exports = ConvertHandler;
