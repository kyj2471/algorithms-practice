// Q1 K번째 수

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

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

//  또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

//  또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

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

// Q3 H-index

// 문제설명 h-index는 과학자의 생산성 영향력을 나타내는 지표. 어느 과학자 h-index를 나타내는 값인 h를 구하려한다.
// 어떤 과학자가 발표한 논문 n편중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되면 h의 최대값이 과학자의 h-index이다.
// 어떤 과학자가 발표한 논문의 인용횟수를 담은 배열 citations가 매개변수로 주어질때 이과학자의 h-index를 return하는 solution함수 작성

// [제한사항]
// 논문수는 1~1000
// 논문별 인용횟수 0 ~ 10,000

// first solution

function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (i >= citations[i]) return i;
  }
  return citations.length;
}

// second solution
function solution(citations) {
  let i = 0;

  while (i + 1 <= citations.sort((a, b) => b - a)[i]) i++;

  return i;
}

// third solution
function solution(citations) {
  citations = citations.sort(sorting);
  var i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;

  function sorting(a, b) {
    return b - a;
  }
}
