const ageToVote = 18
const currentYear = 2023
const jsReleaseYear = 1995

console.log("The current age of JS is", currentYear-jsReleaseYear)
if (currentYear-jsReleaseYear >= ageToVote) {
  console.log("Javascript is old enough to vote.")
} else {
  console.log("Javascript is not old enough to vote.")
}
console.log("Starting...")
for (let i = 0; i <= 100; ++i) {
  if (i % 10 == 0) {
    console.log(i)
    if (i == 50) {
      console.log("Halfway")
    }
  }
}
console.log("Finished.")

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}
console.log(`${user.name} lives at ${user.address.street}, ${user.address.city}`)

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// for (const index in cases) {
//   console.log(`${cases[index].title}, ${cases[index].releaseYear}`)
// }
for (const index in cases) {
  if (cases[index].releaseYear == 1903) {
    console.log(`${cases[index].title}`)
  }
}


