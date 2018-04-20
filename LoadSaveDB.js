// SAVING AND LOADING CUSTOMER DATABASE TO/FROM LOCAL STORAGE
// Function to load Customer Database saved in browser
const loadDatabase = function(customerDB) {

    // Get the string version of the Customer Database
    const databaseString = localStorage.getItem("Customer Database")
        
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)

    }
    
    
// SAVING AND LOADING LIBRARY DATABASE TO/FROM LOCAL STORAGE
// Function to load Library Database saved in browser
const loadDatabase = function(libraryDB) {
    
    // Get the string version of the Library Database
    const databaseString = localStorage.getItem("Library Database")
        
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)

    }
    
        