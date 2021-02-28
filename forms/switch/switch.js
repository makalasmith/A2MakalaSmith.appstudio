//get the users first name
let firstName = prompt("What is your first name?")
console.log(firstName)

//get the users state
let usersState = prompt("What state do you live in? (Ex: NE)")
console.log(usersState)

//get the users temperature
let usersTemperature = prompt("What is the current outside temperature? (Ex: 55)")
console.log(usersTemperature)

//put the users information into an array
let array = [firstName, usersState, usersTemperature]
console.log(array)

//put messages into an array
let messages =["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//switch statement about the users state and weather
switch(true){
case (usersState = "NE" && usersTemperature < 32)
  console.log(messages[0])
  break
case (usersState = "NE" && usersTemperature >= 32 && usersTemperature <=50)
  console.log(messages[1])
  break
case (usersState = "FL" && usersTemperature >= 32 && usersTemperature <=50)
  console.log(messages[2])
  break
case (usersState = "FL" && usersTemperature >= 50 && usersTemperature <=70)
  console.log(messages[3])
}

