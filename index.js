const employee = {
    name:'Aki',
    streetAddress:'1 Avenue'
} 

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...obj};
    newEmployee[key] = '11 Broadway'
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee.streetAddress = "12 Broadway"
    return employee;
}
function deleteFromEmployeeByKey(obj, key){
    let theEmployee = {...obj}
    delete theEmployee ['name'];
    return theEmployee;

}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete employee.name;
    return employee;
}
