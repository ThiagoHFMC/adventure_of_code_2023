const fs = require('fs')


const line_one = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const line_two = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const enum_numbers = {}

line_one.forEach((element, index) => {
    enum_numbers[element] = line_two[index]
}); 

let calibration_sum = 0

fs.readFile('input.txt', 'utf-8', (err, data) => {
    lines = data.split('\n')
    for (var index in lines) {
        for (var key in enum_numbers) {
            lines[index] = lines[index].replaceAll(key, key[0] + enum_numbers[key] + key[key.length - 1])
        }
        lineDigit = lines[index].split('').filter((c) => {
            if (c >= '0' && c <= '9') {
                return c
            }
        }) 

        calibration_sum += Number(lineDigit[0])*10 + Number(lineDigit[lineDigit.length - 1])
    }
})

console.log(calibration_sum)
