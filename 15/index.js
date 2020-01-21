    let max = 21
        let result = ""
        for (let i = 1; i <= max; i += 2) {
            let dots = (max - i) / 2
            result += ".".repeat(dots) + "#".repeat(i) + ".".repeat(dots) + "\n"
        }
