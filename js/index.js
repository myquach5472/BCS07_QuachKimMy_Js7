function performOperations() {
  const arrayValues = document.getElementById("arrayValues").value;
  const array = arrayValues.split(",").map(Number);
  // input thứ 2
  const array2Values = document.getElementById("array2").value;
  const array2 = array2Values.split(",").map(Number);
  //  /input thứ 2

  let output = "";

  //1
  const positiveNumbers = array.filter((num) => num > 0);
  const positiveSum = positiveNumbers.reduce((acc, num) => acc + num, 0);

  //2
  const positiveCount = positiveNumbers.length;

  //3
  const smallestNumber = Math.min(...array);

  //4
  const smallestPositiveNumber = Math.min(...positiveNumbers);

  //5
  let lastEvenNumber = -1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      lastEvenNumber = array[i];
      break;
    }
  }

  //6
  const swapPositions = prompt(
    "Nhập vào vị trí cần đổi (cách nhau bằng dấu phẩy):"
  );
  const [position1, position2] = swapPositions.split(",").map(Number);
  [array[position1], array[position2]] = [array[position2], array[position1]];

  //7
  const sortedArray = array.slice().sort((a, b) => a - b);

  //8
  const firstPrime = array.find((num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });

  // adding new input for this problem
  //9
  const integerCount2 = array2.filter((num) => Number.isInteger(num)).length;

  // 10
  const positiveCount2 = array2.filter((num) => num > 0).length;
  const negativeCount2 = array2.filter((num) => num < 0).length;
  const moreCount =
    positiveCount2 > negativeCount2 ? "Số dương nhiều hơn" : "Số âm nhiều hơn";

  // ouput*************************
  output += `Số trong Array đầu là: ${array}<br><br>`;

  output += `1/. Tổng các số dương trong Array: ${positiveSum}<br>`;
  output += `2/. Đếm có bao nhiêu số dương trong Array: ${positiveCount}<br>`;
  output += `3/. Số nhỏ nhất là: ${smallestNumber}<br>`;
  output += `4/. Số dương nhỏ nhất là: ${smallestPositiveNumber}<br>`;
  output += `5/. Số chẵn cuối cùng trong Array là: ${lastEvenNumber}<br>`;
  output += `6/. Array sau khi đổi vị trí: ${array}<br>`;
  output += `7/. Sắp xếp tăng dần: ${sortedArray}<br>`;
  output += `8/. Số nguyên đầu tiên: ${
    firstPrime !== undefined ? firstPrime : -1
  }<br>`;
  output += `9/. Số nguyên trong Array2: ${integerCount2}<br>`;
  output += `10/. So sánh các số trong Array2: ${moreCount}<br>`;

  document.getElementById("outputSection").innerHTML = output;
}
