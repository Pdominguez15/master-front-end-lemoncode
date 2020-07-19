var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Array
var array = [1, 2, 3];
//Head
var head = function (_a) {
    var first = _a[0];
    return first;
};
console.log("Primer elemento del array: " + head(array));
console.log("Array inmutable: " + array);
//Tail
var tail = function (_a) {
    var primero = _a[0], resto = _a.slice(1);
    return resto;
};
console.log("Array menos el primer elemento: " + tail(array));
console.log("Array inmutable: " + array);
//Init
var init = function (array) { return array.slice(0, -1); };
console.log("Array menos el ultimo elemento: " + init(array));
console.log("Array inmutable: " + array);
//Last
var last = function (array) { return array[array.length - 1]; };
console.log("Último elemento del array: " + last(array));
console.log("Array inmutable: " + array);
//Concat
var array2 = [4, 5, 6];
var array3 = [7, 8, 9];
var concat = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return __spreadArrays(arrays);
};
console.log("Array concatenado: " + concat(array, array2, array3));
//Clone
var objeto = {
    name: "Pedro",
    years: 21,
    saludar: function () { return "hola"; },
};
var clone = function (source) { return (__assign({}, source)); };
var objetoClone = clone(objeto);
console.log(objetoClone);
//Merge
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
var merge = function (source, target) { return (__assign(__assign({}, target), source)); };
console.log(merge(a, b));
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function isBookRead(books, titleToSearch) {
    return books.some(function (book) {
        return book.title === titleToSearch ? book.isRead : false;
    });
}
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
//Slot Machine
console.log("Slot Machine");
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.contador = 0;
    }
    SlothMachine.prototype.play = function () {
        this.contador++;
        var arrayBoolean = [
            Math.random() >= 0.5,
            Math.random() >= 0.5,
            Math.random() >= 0.5,
        ];
        if (arrayBoolean.includes(false)) {
            console.log("Good luck next time!!");
        }
        else {
            console.log("Congratulations!!!. You won " + this.contador + " coins!!");
            this.contador = 0;
        }
    };
    return SlothMachine;
}());
var machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
