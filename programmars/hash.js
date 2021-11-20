// Q1 => 완주하지 못한선수

// first solution
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for(let i = 0; i < 100000; i++){
      if(participant[i] !== completion[i]){
       return participant[i]   
      }
  }
}

// second solution (using hash)