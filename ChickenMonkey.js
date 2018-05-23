// Only show even numbers

for (let i = 0; i < 100; i++) {
    const currentNumber = [i]

    // Take the current number, divide by 2, and check if the remainder is 0
    if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
        console.log(currentNumber + "ChickenMonkey")
    }
    else if (currentNumber % 5 === 0) {
        console.log(currentNumber + "chicken") // Only 2, 4, 6 will appear
    }
    else if (currentNumber % 7 === 0) {
        console.log(currentNumber + "monkey")
    }
    
}