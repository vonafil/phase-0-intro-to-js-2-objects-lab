// Write your solution in this file!
const employee = {
    name: 'Joe',
    streetAddress: '123 Elm st'
};

function updateEmployeeWithKeyAndValue(employee, key, val) {
    let obj = Object.assign({}, employee);
    obj[key] = val;
    return obj
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj
}

function deleteFromEmployeeByKey(employee, key) {
    let obj = Object.assign({}, employee);
    delete obj[key];
    return obj
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj
}