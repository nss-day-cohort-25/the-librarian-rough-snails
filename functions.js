const getDueDate () => {
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = new Date();
    let month = date.getMonth();
    let dueday = date.getDate() + 7;

    if (dueday > 31 && month in [0, 2, 4, 6, 7, 9, 11]) {
        month += 1;
        dueday -= 31;
    } elseif(dueday > 30 && month in [3, 5, 8, 10]) {
        month += 1;
        dueday -= 30;
    } elseif(dueday > 28 && month === 2) {
        month += 1;
        dueday -= 28;
    }



    let reviewMonth = monthNames[month];
    let dueDate = monthNames[month] + dueday;
    return dueDate;
}


//30 april june september november
//31 january march may july august october dec
//28 feb



function getDate() {
    let dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = new Date();

    let dayOfWeek = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let reviewDay = dayNames[dayOfWeek]
    let reviewMonth = monthNames[month]
    datePosted = reviewMonth + " " + day + ", " + year;

    return datePosted;
}