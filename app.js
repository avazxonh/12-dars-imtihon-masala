// 1-m   Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang- 5 ball.

function matn(a, b) {
  return a.replace(b, "");
}
console.log(removeFirstOccurrences("To be or not to be", "not"));

// 2-m  Birinchi va so’ngi burchali qavslarni olib tashlang - 5 ball.
function burchak2(bur) {
  return bur.slice(1, bur.length - 1);
}

console.log(burchak2("<hello>"));

// 3-m  Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin - 10 ball.
function number3(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(number3(3));

// 4-m  Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali - 15 ball.

// 5-m n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring - 10 ball.

function number5(n1, n2) {
  let sum5 = 0;
  for (let i = n1; i <= n2; i++) {
    sum5 += i;
  }
  return sum5;
}

console.log(number5(1, 3));

// 6-m  n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing - 10 ball.

// 7-m  n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing - 15 ball.

// 8-m n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin - 10 ball.

function number8(arr, k, m) {
  let result5 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < k || i > m) {
      result5.push(arr[i]);
    }
  }
  return result5;
}

console.log(number8([2, 1, 8, 4, 7], 9, 3));

// 9-m Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan - 10 ball.

// 10-m  Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang - 10 ball
