const Engineer = require('../lib/Engineer');

test("Checking engineer's data", () => {
  let engineer = new Engineer("Abbas", 1, 'abbas23@yahoo.com', 'abrizvi')
  expect(engineer.getName()).toBe('Abbas');
  expect(engineer.getGithub()).toBe('abrizvi');
  expect(engineer.getRole()).toBe('Engineer');
  expect(engineer.getEmail()).toBe('abbas23@yahoo.com');


})