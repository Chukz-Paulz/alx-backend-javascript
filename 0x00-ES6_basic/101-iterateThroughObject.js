// 101-iterateThroughObject.js
// Task 14

export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // Iterate through the iterator and collect employee names
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the employee names with ' | ' and return the resulting string
  return employees.join(' | ');
}