function progres(end) {
    let sum = 0
    for (let i = 1; i <= end; i += 3) {
        sum += i
    }
    return sum
}