// Task 11
// // 11-createEmployeesObject.js

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
