const Employee = require('../lib/Employee.js');

test("Checking employee's data", () => {
  let employee = new Employee('Mehak', 1, "mehak.rizvi.786@gmail.com")
  expect(employee.getName()).toBe("Mehak");
  expect(employee.getRole()).toBe('Employee');
  expect(employee.getEmail()).toBe('mehak.rizvi.786@gmail.com');
});
