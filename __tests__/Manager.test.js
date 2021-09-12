const Manager = require('../lib/Manager');
test("Checking employee's data", () => {
  let manager = new Manager('Mehak', 1, "mehak.rizvi.786@gmail.com", 522222222)
  expect(manager.getName()).toBe("Mehak");
  expect(manager.getRole()).toBe('Manager');
  expect(manager.getEmail()).toBe('mehak.rizvi.786@gmail.com');
  expect(manager.getOfficeNumber()).toBe(522222222);
});
