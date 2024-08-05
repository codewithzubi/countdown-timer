#!/usr/bin/env node
import inquirer from "inquirer";
let res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Enter valid Number";
        }
        else if (input > 60) {
            return "Second Must be In 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const endTime = Date.now() + val * 1000; // Convert seconds to milliseconds
    setInterval(() => {
        const currTime = Date.now();
        const timeDiff = Math.max(0, (endTime - currTime) / 1000);
        if (timeDiff <= 0) {
            console.log("Time has Expired......");
            process.exit();
        }
        const min = Math.floor(timeDiff / 60);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
