let count = 0;
for (let i = 1; i <= 100; i++) {
  for (let x = i; x <= 100; x++) { // để tránh lặp để x = i
    if ((i * x) % 19 === 0) {
      const pairs = [];
      console.log(`(${i}, ${x})`);
      count++;
    }
  }
}
console.log(`Số lượng cặp số chia hết cho 19 là ${count}`);
return count;
//Đếm và in ra tất cả các cặp số (i, x) sao cho tích của chúng chia hết cho 19
// Sao cho (1, 19), (19,1) chỉ được đếm 1 lần
