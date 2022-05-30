const Navbar =  require('./Navbar');

function vmNpm(string) {
    return string === 'WDS'
}

function sayHi() {
    return "Hello from vmNpm";
}

function sayNo() {
    return "No, no, not at all!";
}

module.exports = {
    Navbar,
    vmNpm,
    sayHi,
    sayNo,
}
