let calculation = ''

function calculate (){
  console.log(calculation)

  document.querySelector('.calculate').innerHTML = calculation
}
function cal (number){
  calculation += number
}
function results (){
  let result = ''
  result = eval(calculation)
  console.log(result)
  document.querySelector('.results').innerHTML = result
}

