function ak1(a, c, d) {
    return (a + c + d) / 3;
}
function ak2(m) {
    m.reduce(function (a, b) { return a + b; });
}
function ak3() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return ak2(args);
}
console.log(ak3(3, 5));
console.log(ak2([3, 4, 5, 6]));
console.log(ak1(4, 6, 7));
function lk1(m) {
    var v = [];
    for (var nr = 0; nr < m.length - 2; nr++) {
        v.push(ak1(m[nr], m[nr + 1], m[nr + 2]));
    }
    return v;
}
function lk2(m) {
    var v = [];
    var pikkus = 2;
    for (var nr = 0; nr < m.length - pikkus + 1; nr++) {
        v.push(ak2(m.slice(nr, nr + pikkus)));
    }
    return v;
}
console.log(lk1([1, 2, 5, 3, 3]));
