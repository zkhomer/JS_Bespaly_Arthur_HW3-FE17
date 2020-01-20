function chess(w, h) {
    let result = ''
    for (let i = 1; i <= h; i++) {
        if (i % 2) {
            for (let a = 1; a <= w; a++) {
                if (a % 2) {
                    result += '.'
                } else {
                    result += '#'
                }
            }
        } else {
            for (let a = 1; a <= w; a++) {
                if (a % 2) {
                    result += '#'
                } else {
                    result += '.'
                }
            }
        }
        result += '\n'
    }
    return result
}