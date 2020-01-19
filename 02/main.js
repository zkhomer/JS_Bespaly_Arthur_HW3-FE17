let person = {
    name: prompt("Enter a name"),
    surname: prompt("Enter a surname"),
    married: confirm("Are you married?"),
    smartphone: [
        {
            title: prompt('Enter a smartphone:'),
        },
    ],
    laptop: [
        {
            title: prompt('Enter a laptop:'),
        },
    ],
}
person.smartphone.owner = person;
person.laptop.owner = person;