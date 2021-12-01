// Q1 K번째 수

// first solution
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const selected = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => {
        return a - b;
      });
    answer.push(selected[commands[i][2] - 1]);
  }
  return answer;
}

// second solution
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

// third solution
function solution(array, commands) {
  return commands.map((v) => {
    return array
      .slice(v[0] - 1, v[1])
      .sort((a, b) => a - b)
      .slice(v[2] - 1, v[2])[0];
  });
}

// Q2 가장큰수

// first solution
function solution(numbers) {
  const test = numbers
    .map((n) => n + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  const answer = test[0] === "0" ? "0" : test;
  return answer;
}

// second solution

function solution(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
