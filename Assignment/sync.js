//Synchronous Version 
function login() {
    console.log("Logged in successfully.");
    return "UserToken123";   
}

function getData(token) {
    console.log("Data fetched for token:", token);
    return { name: "John Doe", score: 85 };
}

function displayData(data) {
    console.log("Displaying Data:", data);
}

function conductTest() {
    console.log("Test conducted.");
    return "TestResult: Pass";
}

function logout() {
    console.log("Logged out.");
}

function main() {
    const token = login();
    const data = getData(token);
    displayData(data);
    const testResult = conductTest();
    console.log(testResult);
    logout();
}

main();




//Asynchronous version 
async function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged in successfully.");
            resolve("UserToken123");
        }, 1000);
    });
}

async function getData(token) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched for token:", token);
            resolve({ name: "John Doe", score: 85 });
        }, 1000);
    });
}

async function displayData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Displaying Data:", data);
            resolve();
        }, 500);
    });
}

async function conductTest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Test conducted.");
            resolve("TestResult: Pass");
        }, 1500);
    });
}

async function logout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged out.");
            resolve();
        }, 500);
    });
}


async function main() {
    const token = await login();
    const data = await getData(token);
    await displayData(data);
    const testResult = await conductTest();
    console.log(testResult);
    await logout();
}

main();