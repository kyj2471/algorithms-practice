// Q1 => 완주하지 못한선수

// first solution
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < 100000; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// second solution (using hash)

// Q2 => 위장

// first solution
function solution(clothes) {
  let obj = {};
  let cal = 1;
  let len = clothes.length;

  for (let i = 0; i < len; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (let key in obj) {
    cal = cal * obj[key];
  }

  return cal - 1;
}

// second solution(using hash)
