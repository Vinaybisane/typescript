console.log("this is ts file");
var fun = function () {
    var a = 2;
    var b = 4;
    var add = a + b;
    console.log("addition=", add);
    return add;
};
var addreturn = fun();
var sub = function (a, b) { return a - b; };
var subreturn = sub(4, 1);
console.log("sub", subreturn);
var mul = function () {
    var a = 2;
    var b = '3';
    var c = parseInt(b);
    var mul = a * c;
    console.log('mul', mul);
};
mul();
var div = function (a, b) {
    var c = parseInt(a);
    var d = parseInt(b);
    var divi = c / d;
    console.log("div=", divi);
};
div('10', '2');
