var fun1 = function (a, b) {
    var aa = a.trim();
    var bb = b.trim().toUpperCase();
    var newvalue = aa + bb;
    return newvalue;
};
var valueReturn = fun1('vinay', 'achal');
console.log("returnValue", valueReturn);
var addnewuser = function (newuser) {
    var id = Math.random();
    var newdate = new Date();
    return {
        name: newuser.name,
        email: newuser.email,
        id: id,
        date: newdate
    };
};
var onj1 = {
    name: 'vinay',
    email: 'vin2GMAIL.COM'
};
var returnuser = addnewuser(onj1);
console.log("returnuser", returnuser);
