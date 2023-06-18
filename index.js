"use strict"

function fillArray() {
    const arrayLength = parseInt(prompt('Введіть довжину масиву: '))

    if (isNaN(arrayLength) || arrayLength <= 0) {
        console.log('Некоректна кількість')
        return
    }

    const mainArray = [];

    for (let i = 0; i < arrayLength; i++) { 
       const innerArrayLength = parseInt(prompt(`Введіть довжину внутрішнього масиву ${i + 1}: `))

       if (isNaN(innerArrayLength) || innerArrayLength <= 0) {
        console.log('Некоректна кількість')
        return
        }

        const innerArrey = [];

        for (let j = 0; j < innerArrayLength; j++) {
            const element = prompt(`введіть значення елемента: `)
            innerArrey.push(element)
        }

        mainArray.push(innerArrey)
    }
    console.log(`Двовимірний масив`, mainArray)
}

fillArray();