var text = "Enter a number";
var arr3 = [+prompt(text), +prompt(text), +prompt(text)];


var notebook = {
    brand: prompt("brand"),
    type:  prompt("type"),
    model: prompt("Model"),
    ram: prompt("ram"),
    size: prompt("size"),
    weight: Number(prompt("waight")),
    resolution: {
        width: Number(prompt("width")),
        height: Number(prompt("height")),
    },
};

var phone = {
    brand: prompt("brand"),
    model: prompt("model"),
    ram: Number(prompt("ram")),
    color: prompt("color"),
};

var person = {
    name: prompt("name"),
    surname: prompt("surname"),
    married: confirm("married"),
}