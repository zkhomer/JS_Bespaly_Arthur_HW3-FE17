function mTable(size) {
    let table = [];
    for (let i = 0; i <= size; i++) {
        let a = [];
        for (let j = 0; j <= size; j++) {
            a[j] = j * i;
        }
        table[i] = a;
    }
    return table;
}