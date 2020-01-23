function predict() {
    let history = [1, 1, 1, 1];
    let Arr = [
        [
            [
                [-1, -1],
                [-1, -1],
            ],
            [
                [-1, -1],
                [-1, -1],
            ],
        ],
        [
            [
                [-1, -1],
                [-1, -1],
            ],
            [
                [-1, -1],
                [-1, -1],
            ],
        ],
    ]

    while (true) {
        let predict = Arr[history[0]][history[1]][history[2]][history[3]]
        if (predict < 0) {
            predict = Math.round(Math.random())
        }
        console.log(predict)
        let enter = prompt("Введите число 0-1")
        if (enter == "0" || enter == '1') {
            Arr[history[0]][history[1]][history[2]][history[3]] = +enter
            history.push(+enter)
            history.shift()
            alert(`My predict: ${predict}, you say: ${enter}`)
        } else if (enter == null){
            break
        } else {
            alert("введите другое число!")
            continue
        }
    }
    return true
}




