const { arrowFunctionExpression } = require("@babel/types")

const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log("2.1")
explorers.forEach(explorer => console.log(explorer.name))

console.log("2.2")
explorers.forEach(item => console.log(item.stack))

console.log("2.3")
const new_stacks = explorers.map(newList => newList.stack)
console.log(new_stacks)

console.log("2.4")
const explorer_js = explorers.filter(listJS => listJS.stack.includes("js"))
console.log(explorer_js)

console.log("2.5")
const explorer_mx = explorers.find(listmx => listmx.city === "CDMX")
console.log(explorer_mx)

console.log("2.6")
const all_excercises = explorers.reduce ((acc, listex) => acc + listex.exercises_completed, 0)
console.log(all_excercises)

console.log("2.7")
const front_true = explorers.some(explorer => explorer["missions"]["frontend"].exercisesFinished === true)
console.log(front_true)

console.log("2.8")
const explorer_finished = explorers.every(explorer => explorer["missions"]["onboarding"].isFinished === true)
console.log(explorer_finished)