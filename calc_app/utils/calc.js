export default class Calculator {
  constructor() {
    this.output = 0
    this.calculation = ''
    this.history = []
  }

  runCalculation(calculation) {
    this.calculation = calculation
    const calcArray = calculation.split(' ').map((str) => {
      const testNum = Number(str)
      if (testNum) {
        return testNum
      }
      return str
    })
    if (!Number(calcArray[0])) {
      calcArray.unshift(this.output)
    }
    const calcOrder = ['/', '*', '+', '-']
    let output = calcArray
    for (let i = 0; (typeof output !== 'number' && i < calcOrder.length); i++) {
      output = processArrayWithFilter(output, calcOrder[i])
    }
    this.output = output
    this.history.push({ calculation, output: this.output })
  }

  clear() {
    this.output = 0
    this.calculation = ''
  }

  clearAll() {
    this.clear()
    this.history = []
  }
}

const processArrayWithFilter = (array, filter) => {
  const output = []
  if (array.length === 1) {
    return array[0]
  } else if (typeof array === 'number') {
    return array
  }
  if (array[1] !== filter) {
    output.push(array[0])
    output.push(array[1])
    output.push(array[2])
  } else {
    output.push(calc(filter, array[0], array[2]))
  }
  for (let i = 3; i < array.length; i += 2) {
    const isLastCalc = (i === array.length - 2)
    if (array[i] !== filter) {
      output.push(array[i])
      if (isLastCalc) {
        output.push(array[array.length - 1])
      }  else {
        output.push(array[i+1])
      }
    } else {
      let num = array[i - 1]
      if (Number(output[output.length - 1])) {
        num = output.pop()
      }
      output.push(calc(filter, num, array[i + 1]))
    }
  }
  if (output.length === 1) {
    return output[0]
  }
  return output
}

const calc = (type, ...numbers) => {
  if (numbers.length === 1 && typeof numbers[0] === 'number') {
    return numbers[0]
  } else if (typeof numbers[0] === 'number' && typeof numbers[1] === 'number') {
    switch (type) {
      case '+':
        return numbers[0] + numbers[1]
      case '-':
        return numbers[0] - numbers[1]
      case '*':
        return numbers[0] * numbers[1]
      case '/':
        return numbers[0] / numbers[1]
      default:
        return 0
    }
  }
  return 0
}

