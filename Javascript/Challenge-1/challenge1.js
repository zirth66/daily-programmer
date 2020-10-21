entries = function () {
    const name = entry.name.value
    const age = entry.age.value
    const user = entry.username.value
    document.getElementById("outdiv").innerHTML = `Your name is ${name}, your age is ${age} and your username is ${user}`

}