var body = {
    tagName: "body",
    subTags: [
        {
            tagName: "div",
            subTags: [
                {
                    tagName: "span",
                    text: "Enter a data please:"
                },
                {
                    tagName: "br/"
                },
                {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "name"
                    }
                },
                {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "surname"
                    }
                }
            ],
            tagName: "div",
            subTags: [
                {
                    tagName: "button",
                    text: "OK",
                    attrs: {
                        id: "ok"
                    }
                },
                {
                    tagName: "button",
                    text: "Cancel",
                    attrs: {
                        id: "cancel"
                    }
                }
            ]
        }
    ]
}