//your JS code here. If required.
function manipulateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((array) => {
        // First transformation: filter out odd numbers
        const evenNumbers = array.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById('output').innerText = evenNumbers.join(',');
        }, 1000);

        return evenNumbers;
    })
    .then((evenNumbers) => {
        // Second transformation: multiply even numbers by 2
        const multiplied = evenNumbers.map(num => num * 2);
        setTimeout(() => {
            document.getElementById('output').innerText = multiplied.join(',');
        }, 2000);
    });
}

// Call the function
manipulateData();