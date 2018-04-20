const getDueDate = () => {
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = new Date();
    let month = date.getMonth();
    let dueday = date.getDate() + 7;

    if (dueday > 31 && month in [0, 2, 4, 6, 7, 9, 11]) {
        month += 1;
        dueday -= 31;
    } else if(dueday > 30 && month in [3, 5, 8, 10]) {
        month += 1;
        dueday -= 30;
    } else if(dueday > 28 && month === 2) {
        month += 1;
        dueday -= 28;
    }
    let reviewMonth = monthNames[month];
    let dueDate = monthNames[month] + " " + dueday;
    return dueDate;
}

const customerDB = {
    cole : Object.create(null, {
        favGenres: {
            enumerable: true,
            writable: false,
            value: []
        },
        bookShelf: {
            enumerable: true,
            writable: true,
            value: []
        },
        firstName: {
            enumerable: true,
            writable: false,
            value: "Cole"
        },
        lastName: {
            enumerable: true,
            writable: false,
            value: "Doster"
        },
        address: {
            enumerable: true,
            writable: false,
            value: "3302 Overlook Dr."
        },
        lcNumber: {
            enumerable: true,
            writable: true,
            value: ""
        },
        checkout: {
            enumerable: true,
            writable: false,
            value: function(book) {
                this.bookShelf.push(libDB[book]);
                libDB[book].checkedout = getDueDate();
                libDB[book].dueDate = getDueDate()
            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function(book) {
                libDB[book].dueDate = "";
                let bookIndex = this.bookshelf.indexOf(libDB[book])
                this.bookShelf.splice(bookIndex, 1);
            }
        }

    }),
    kyle : Object.create(null, {
        favGenres: {
            enumerable: true,
            writable: false,
            value: []
        },
        bookShelf: {
            enumerable: true,
            writable: true,
            value: []
        },
        firstName: {
            enumerable: true,
            writable: false,
            value: "Kyle"
        },
        lastName: {
            enumerable: true,
            writable: false,
            value: "Ducharme"
        },
        address: {
            enumerable: true,
            writable: false,
            value: "500 Interstate Blvd."
        },
        lcNumber: {
            enumerable: true,
            writable: true,
            value: ""
        },
        checkout: {
            enumerable: true,
            writable: false,
            value: function(book) {
                this.bookshelf.push(libDB[book].name);
                libDB[book].checkedout = true;
                libDB[book].dueDate = getDueDate()
            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function(book) {
                libDB[book].dueDate = "";
                let bookIndex = this.bookshelf.find(b => libDB[b].name === libDB[book].name)
                this.bookshelf.splice(bookIndex);
            }
        }

    }),
    raf : Object.create(null, {
        favGenres: {
            enumerable: true,
            writable: false,
            value: []
        },
        bookShelf: {
            enumerable: true,
            writable: true,
            value: []
        },
        firstName: {
            enumerable: true,
            writable: false,
            value: "Raf"
        },
        lastName: {
            enumerable: true,
            writable: false,
            value: "Cevallos"
        },
        address: {
            enumerable: true,
            writable: false,
            value: "742 Evergreen Terrace"
        },
        lcNumber: {
            enumerable: true,
            writable: true,
            value: ""
        },
        checkout: {
            enumerable: true,
            writable: false,
            value: function(book) {
                this.bookshelf.push(libDB[book].name);
                libDB[book].checkedout = true;
                libDB[book].dueDate = getDueDate()
            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function(book) {
                libDB[book].dueDate = "";
                let bookIndex = this.bookshelf.indexOf(libDB[book].name)
                this.bookshelf.splice(bookIndex, 1);
            }
        }
    }),
}

customerDB.cole.checkout("book1")
console.log(libDB.book1)
customerDB.cole.return("book1")
console.log(libDB.book1)
console.log(customerDB.cole)