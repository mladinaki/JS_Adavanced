class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (name === "" || salary < 0 || position === "" || department === "") {
      throw new Error("Invalid input!");
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
    }
    this.departments[department].push({ name, salary, position });
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const avgDepartaments = {};
    Object.keys(this.departments).forEach((key) => {
      const averageSort =
        this.departments[key].reduce(
          (acc, current) => acc + current.salary,
          0
        ) / this.departments[key].length;
      avgDepartaments[key] = averageSort;
    });

    const sorted = Object.entries(avgDepartaments).sort((a, b) => b[1] - a[1]);
    let res = `Best Department is: ${sorted[0][0]}\nAverage salary: ${sorted[0][1]}`;
    this.departments[sorted[0][0]]
      .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
      .forEach((x) => {
        res += `\n${x.name} ${x.salary} ${x.position}`;
      });

    return res 
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
