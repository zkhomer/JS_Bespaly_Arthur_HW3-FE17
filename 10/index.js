let length = prompt("asda")
let result = '#'
for (let i = 1; i < length; i++) {
    result += ' #'
}
if (length % 2) {
    result = ' ' + result + ' '
}
console.log(result)