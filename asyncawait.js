async function getCustomerName() {
    let name = await "Ibrohim";
    console.log(name);
    return name;
}

// promise yordamida chaqirish:
getCustomerName().then(data => console.log(data));
console.log(1);
getCustomerName();
console.log(2); 