// 100-createIteratorObject.js
// Task 13

export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeeList = [];

  // Collect all employees from the departments
  for (const department in employees) {
    employeeList.push(...employees[department]);
  }

  // Return a generator to iterate over the employee list
  function* iterator() {
    for (const employee of employeeList) {
      yield employee;
    }
  }

  return iterator();
}
