const libDB = {
    book1: Object.create(null, {
        name: {
            value: "Harry Potter and the Sorcerer's Stone",
            enumerable: true
        },
        author: {
            value: "J. K. Rowling",
            enumerable: true
        } ,
        genre:{
            value: ["Fantasy", "Fiction", "Young Adult", "Mystery", "Thriller"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9780545010221",
            enumerable: true
        },
        checkedout: {
            value: false,
            writeable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book2: Object.create(null, {
        name: {
            value: "The Hobbit",
            enumerable: true
        },
        author: {
            value: "J. R. R. Tolkien",
            enumerable: true
        } ,
        genre:{
            value: ["Fantasy", "Fiction"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9780547928227",
            enumerable: true
        },
        checkedout: {
            value: false,
            writeable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
}