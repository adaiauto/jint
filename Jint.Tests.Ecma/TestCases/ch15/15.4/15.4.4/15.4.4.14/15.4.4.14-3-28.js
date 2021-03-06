/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-3-28.js
 * @description Array.prototype.indexOf - value of 'length' is boundary value (2^32)
 */


function testcase() {
        var targetObj = {};
        var obj = {
            0: targetObj,
            4294967294: targetObj,
            4294967295: targetObj,
            length: 4294967296
        };

        return Array.prototype.indexOf.call(obj, targetObj) === -1;
    }
runTestCase(testcase);
