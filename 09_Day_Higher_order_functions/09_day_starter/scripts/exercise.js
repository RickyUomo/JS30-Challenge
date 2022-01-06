const country = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const name = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const product = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Q1-1
/* 
    all methods don't change the original value
    forEach doesn't return value, only loop through the array
    map returns new array, also loop through the array
    filter returns a new array which satisfies the call back function's condition
    reduce returns a new single value
*/

// Q1-3
// country.forEach(c => console.log(c))


// Q1-6
const newCountry = country.map(c => c.toUpperCase())

// Q1-8
const squareNum = number.map(n => n * 2)

// Q2-1
const totalPrice = product.filter(p => {
    if (p.price > 0) return p.price
}).map(p => p.price).reduce((acc, cur) => acc + cur, 0)

// console.log(totalPrice)

// Q2-2
const totalPrice2 = product.reduce((total, cur) => {
    if (typeof cur.price === 'number') {
        total += cur.price
    }
    return total
}, 0)

// console.log(totalPrice2)

// Q3-2
function mostSpokenLanguages(countries, num) {
    let countryAry = []
    let count = {}
    // let count2 = {}
    let res = []

    countries.forEach(c => {
        c.languages.forEach(c => countryAry.push(c))
    })
    // console.log(countryAry[0])

    /* 
        this didn't work because return wll break for loop but not forEach 
    */
    // for(let item of countryAry){
    //     if(count2[item]){
    //         count2[item] += 1
    //         return 
    //     }
    //     count2[item] = 1
    // }
    // console.log(count2)

    countryAry.forEach(item => {
        if (count[item]) {
            count[item] += 1
            return
        }
        count[item] = 1
    })

    const countryEntry = Object.entries(count)

    countryEntry.forEach(c => {
        res.push({ country: c[0], count: c[1] })
    })

    res.sort((a, b) => b.count - a.count)

    console.log(res.splice(0, num))
}

// mostSpokenLanguages(countries, 10)

// Q3-3
function mostPopulatedCountries(countries, num) {

    let res = []
    countries.sort((a, b) => b.population - a.population)
    countries.forEach(c => res.push({country:c.name, population: c.population}))

    console.log(res.splice(0, num))
}

// mostPopulatedCountries(countries, 3)


// Q3-4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const sta = {
    count: function(ary){
        return ary.length
    }
}

console.log(sta.count(ages))