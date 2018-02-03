var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || 'Full Time';
    this.printEmployeeForms = function(){
        console.log('Name: ' + this.name + ', Job Title: ' + this.jobTitle + ', Salary: ' + this.salary + ', Status: ' + this.status);
    }
}


var nate = new Employee('Nate', 'Intern', '$0/year', 'Part Time');
var maeve = new Employee('Maeve', 'Boss Lady', '$100k+/year');
var josh = new Employee('Josh', 'Sales Rep', '$50k/year');

nate.printEmployeeForms();
maeve.printEmployeeForms();
josh.printEmployeeForms();

employees.push(nate, maeve, josh);
console.log(employees);
