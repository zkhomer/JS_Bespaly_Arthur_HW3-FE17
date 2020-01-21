let max = 21
    if (max  <= 0 || max % 2 == 0) {
        alert("enter number")

    }
    let result = ""
    for (let i = 1; i <= max; i += 2) {
        let dots = (max - i) / 2
        result += ".".repeat(dots) + "#".repeat(i) + ".".repeat(dots) + "\n"
    }
