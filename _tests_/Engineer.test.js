const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "NahianBari";
    const employeeInstance = new Engineer("Nahian", 2, "nahian@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "NahianBari";
    const employeeInstance = new Engineer("Nahian", 2, "nahian@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Nahian", 2, "nahian@gmail.com", "NahianBari");
    expect(employeeInstance.getRole()).toBe(returnValue);
});