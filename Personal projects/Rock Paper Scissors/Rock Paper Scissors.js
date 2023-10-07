function gamePlay(playerMove){

  let computerMove  = ''

    let mathRandom = Math.random()

    if(mathRandom >= 0 && mathRandom < 1/3){
      computerMove = 'Rock'
    }else if(mathRandom >= 1/3 && mathRandom < 2/3){
      computerMove = 'Paper'
    }else if(mathRandom >= 2/3 && mathRandom < 1){
      computerMove = 'Scissors'
    }

    console.log(computerMove)
  
    let Result = ''

    if(playerMove === 'Rock'){
      if(computerMove === 'Rock'){
        Result = 'Tie'
      }else if(computerMove === 'Paper'){
        Result = 'You lose'
      }else if(computerMove === 'Scissors'){
        Result = 'You win'
      }
    }else if(playerMove === 'Paper'){
      if(computerMove === 'Rock'){
        Result = 'You win'
      }else if(computerMove === 'Paper'){
        Result = 'Tie'
      }else if(computerMove === 'Scissors'){
        Result = 'You lose'
      }
    }else if(playerMove === 'Scissors'){
      if(computerMove === 'Rock'){
        Result = 'You lose'
      }else if(computerMove === 'Paper'){
        Result = 'You win'
      }else if(computerMove === 'Scissors'){
        Result = 'Tie'
      }
    }
    console.log(Result)

     const score = JSON.parse(localStorage.getItem('score')) || {
      Wins:0,
      Ties:0,
      Losses:0
    }


    if(Result === 'You win'){
      score.Wins += 1
    }else if(Result === 'Tie'){
      score.Ties += 1
    }else if(Result === 'You lose'){
      score.Losses += 1
    }
 
    console.log(score)

    localStorage.setItem('score',JSON.stringify(score))

    document.querySelector('.Result').innerHTML = Result

    document.querySelector('.Moves').innerText = `The computer picked ${computerMove} You picked ${playerMove}`

    document.querySelector('.Score').innerText = `  Wins:${score.Wins} Ties:${score.Ties} Losses${score.Losses}`

}