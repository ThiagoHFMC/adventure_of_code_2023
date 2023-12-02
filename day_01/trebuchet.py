with open('input.txt', 'r') as file:
    lines = file.readlines()

calibration_sum = 0

list_one = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
list_two = [1, 2, 3, 4, 5, 6, 7, 8, 9]

enum_numbers = dict(zip(list_one, list_two))

for line in lines:
    for number in enum_numbers.keys():
        line = line.replace(number, number[0] + str(enum_numbers[number]) + number[-1])
    lineDigit = list(filter(lambda caractere: caractere.isdigit(), line))
    calibration_sum += int(lineDigit[0])*10 + int(lineDigit[-1])

print(calibration_sum)