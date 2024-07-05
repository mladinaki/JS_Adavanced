function previousDay(year, month, day) {
    let currentData = new Date(year, month - 1, day - 1);
    console.log(`${currentData.getFullYear()}-${currentData.getMonth() + 1}-${currentData.getDate()}`);
}
previousDay(2016, 9, 30);
previousDay(2015, 5, 10);