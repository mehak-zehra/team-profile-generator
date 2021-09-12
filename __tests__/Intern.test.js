
const Intern = require("../lib/Intern");

test("Checking intern's data", ()=> {
  let intern = new Intern("Minha", 786, "minha_110@gmail.com", "UC Berkeley")
  expect(intern.getName()).toBe("Minha");
  expect(intern.getRole()).toBe("Intern");
  expect(intern.getSchool()).toBe("UC Berkeley");

})