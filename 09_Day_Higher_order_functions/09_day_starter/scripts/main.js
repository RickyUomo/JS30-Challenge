function callback(n) {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) * n;
}

// console.log(cube(callback, 4))

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
//   console.log(higherOrder(2)(3)(10))

const first = n => {
    const second = m => {
        return m * n
    }
    return second
}

//   console.log(first(2)(3))

let sum = 0
const numbers = [175, 25, 50]
numbers.forEach(item => {
    sum += item
})

const sumAry = arr => {
    let sum = 0
    const callback = ele => {
        sum += ele
    }
    arr.forEach(callback)
    return sum
}

// console.log(sumAry(numbers))

const newNum = numbers.filter(num => num > 2)

// if initial value is not specified, the acc will be the first element of the array
const num2 = numbers.reduce((acc, cur) => {
    // console.log("this is acc",acc)
    // console.log('this is cur', cur)
    return acc - cur
})

const numbers22 = [9.81, 7, 10]
// Using sort method to sort number items provide a wrong result. see below
// console.log(numbers22.sort()) //[100, 3.14, 37, 9.81]

numbers22.sort(function (a, b) {
    // console.log(a, b)
    return a - b
})

// console.log(numbers22)

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
//   console.log(users) // sorted ascending