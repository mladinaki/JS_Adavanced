function filterEmployees(data, criteria) {
    let [crit, value] = criteria.split("-");
    let parse = JSON.parse(data);
    let count = 0;
    parse.filter((el) => {
      selected.call(el);
    });
    function selected() {
      if (this[crit] === value || criteria === "all") {
        console.log(`${count++}. ${this.first_name} ${this.last_name} - ${this.email}`);
      }
    }
  }
  filterEmployees(
    `[{
      "id": "1",
      "first_name": "Ardine",
      "last_name": "Bassam",
      "email": "abassam0@cnn.com",
      "gender": "Female"
    }, {
      "id": "2",
      "first_name": "Kizzee",
      "last_name": "Jost",
      "email": "kjost1@forbes.com",
      "gender": "Female"
    },  
  {
      "id": "3",
      "first_name": "Evanne",
      "last_name": "Maldin",
      "email": "emaldin2@hostgator.com",
      "gender": "Male"
    }]`,
    "gender-Female"
  );
  