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
                this.bookshelf.push(libDB[book]name);
                libDB.book.checkedout = true;
                libDB.book.dueDate = 
            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function() {

            }
        }

    }),
    cashew : Object.create(null, {
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
            value: "Cashew"
        },
        lastName: {
            enumerable: true,
            writable: false,
            value: "Agnoletti"
        },
        address: {
            enumerable: true,
            writable: false,
            value: "1500 Pennsylvania Ave."
        },
        lcNumber: {
            enumerable: true,
            writable: true,
            value: ""
        },
        checkout: {
            enumerable: true,
            writable: false,
            value: function() {

            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function() {

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
            value: function() {

            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function() {

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
            value: function() {

            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function() {

            }
        }

    }),
}

console.log (customerDB)