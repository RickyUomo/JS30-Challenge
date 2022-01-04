const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// Q2-1
const values = Object.entries(users)

let howManySkills = []
for (let user of values) {
  howManySkills.push(user[1]['skills'].length)
}
const max = Math.max.apply(this, howManySkills)

const index = howManySkills.indexOf(max)
// console.log(values[index][0], 'has most skills')

// Q2-2
let howManyLogged = 0
let howManyOver50 = 0
for(let user of values){
  if(user[1]['isLoggedIn'] === true) howManyLogged += 1

  if(user[1]['points'] >= 50) howManyOver50 ++
}
// console.log("There are ", howManyLogged, " people logged in")
// console.log(`${howManyOver50} users are over 50 points`)

// Q2-3
let whoUsesMern = []
for(let user of values){
  if(user[1]['skills'].indexOf('Mern') >= 0){
    whoUsesMern.push(user[0])
  } 
}

// if(whoUsesMern.length === 0){
//   console.log('No one uses Mern')
// }else{
//   const res = whoUsesMern.join()
//   console.log(`${res} use Mern`)
// }

// Q2-4
const copyUser = Object.assign({}, users)
copyUser.Ricky = {
  email: 'ricky@gmail.com',
  points: 69,
  skills: ['React', 'HTML']
}
// console.log(copyUser.Ricky)


// Q2-5
const allKeys = Object.keys(users)
// console.log(allKeys)

// Q2-6
const allVal = Object.values(users)
// console.log(allVal

// Q2-7 print a country name
// console.log(countries[0].name)

