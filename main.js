// {
//     // 1-masala
//     function dayName(n) {
//         switch (n) {
//             case 1:
//                 return "1-Dushanba"
//             case 2:
//                 return "2-Seshanba"
//             case 3:
//                 return "3-Chorshanba"
//             case 4:
//                 return "4-Payshanba"
//             case 5:
//                 return "5-Juma"
//             case 6:
//                 return "6-Shanba"
//             case 7:
//                 return "7-Yakshanba"
//             default:
//                 return "Bunday kun mavjud emas"
//         }
//     }
//     console.log(dayName(4));
// }

// {
//     // 2-masala
//     function grades(k) {
//         switch (k) {
//             case 1:
//                 return "1-yomon"
//             case 2:
//                 return "2-qoniqarsiz"
//             case 3:
//                 return "3-qoniqarli"
//             case 4:
//                 return "4-yaxshi"
//             case 5:
//                 return "5-a'lo"
//             default:
//                 return "Xato"
//         }
//     }
//     console.log(grades(3));
// }

// {
//     // 3-masala
//     function moon(a) {
//         switch (a) {
//             case 1:
//                 return "1 chi oy, 'kuz'"
//             case 2:
//                 return "2 chi oy, 'qish'"
//             case 3:
//                 return "3 chi oy, 'bahor'"
//             case 4:
//                 return "4 chi oy, 'yoz'"
//             default:
//                 return "Bunday oy mavjud emas"
//         }
//     }
//     console.log(moon(1));
// }

// {
//     // 4-masala
//     function month(number) {
//         switch (number) {
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 10:
//             case 12:
//                 return "Bu oyda 31 kun bor"
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 return "Bu oyda 30 kun bor"
//             case 2:
//                 return "Bu oyda 29 kun bor"
//             default:
//                 return "Bunday oy yo'q"
//         }
//     }
//     console.log(month(8));
// }

// {
//     // 5-masala
//     let A = parseFloat(prompt("a raqam kiriting:"));
//     let B = parseFloat(prompt("b raqam kiriting:"));
//     let operation = parseInt(prompt("amal raqamini kiriting (1-4):"));
//     let result;
//     switch (operation) {
//         case 1:
//             result = A + B;
//             break;
//         case 2:
//             result = A - B;
//             break;
//         case 3:
//             result = A * B;
//             break;
//         case 4:
//             result = A / B;
//             break;
//         default:
//             break;
//     }
//     console.log(result);
// }

// {
//     // 6-masala
//     let length = parseFloat(prompt("uzunlikni kiriting"));
//     let unit = parseInt(prompt("uirlik sonini kiriting"));
//     switch (unit) {
//         case 1:
//             console.log(length * 0.1 + " m");
//             break;
//         case 2:
//             console.log(length * 1000 + " m");
//             break;
//         case 3:
//             console.log(length + " m");
//             break;
//         case 4:
//             console.log(length * 0.001 + " m");
//             break;
//         case 5:
//             console.log(length * 0.01 + " m");
//             break;
//         default:
//             console.log("Notog'ri birlik raqami kiritildi.");
//             break;
//     }
// }

// {
//     // 7-masala
//     let weight = parseFloat(prompt("og'irlikni kiriting"));
//     let unit = parseInt(prompt("birlik sonini kiriting"));
//     switch (unit) {
//         case 1:
//             console.log(weight + " kg");
//             break;
//         case 2:
//             console.log(weight / 1000 + " kg");
//             break;
//         case 3:
//             console.log(weight / 1000000 + " kg");
//             break;
//         case 4:
//             console.log(weight * 1000 + " kg");
//             break;
//         case 5:
//             console.log(weight * 100 + " kg");
//             break;
//         default:
//             console.log("Notog'ri birlik raqami kiritildi.");
//             break;
//     }
// }

// {
//     // 8-masala
//     let day = parseInt(prompt("kun"));
//     let month = parseInt(prompt("oy"));
//     let isLeapYear = parseInt(prompt("kabisa yili"));
//     let daysInYear = isLeapYear ? 366 : 365;
//     let daysInMonth;
//     switch (month) {
//         case 1: 
//         case 3: 
//         case 5: 
//         case 7: 
//         case 8: 
//         case 10: 
//         case 12:
//             daysInMonth = 31;
//         case 4: 
//         case 6: 
//         case 9: 
//         case 11:
//             daysInMonth = 30;
//         case 2:
//             daysInMonth = isLeapYear ? 29 : 28;
//         default:
//             daysInMonth = "Notog'ri oy raqami kiritildi.";
//     }
//     if (day > 0 && day <= daysInMonth) {
//         console.log("Sanani ifodalovchi dastur: " + day + "-" + month + ", Yilda " + daysInYear + " kun bor.");
//     } else {
//         console.log("Notog'ri kun kiritildi.");
//     }
// }

// {
//     // 9-masala
//     let day = parseInt(prompt("kun"));
//     let month = parseInt(prompt("oy"));
//     let isLeapYear = parseInt(prompt("Kabisa yili"));

//     let daysInMonth;
//     switch (month) {
//         case 1: 
//         case 3: 
//         case 5: 
//         case 7: 
//         case 8: 
//         case 10: 
//         case 12:
//             daysInMonth = 31;
//         case 4: 
//         case 6: 
//         case 9: 
//         case 11:
//             daysInMonth = 30;
//         case 2:
//             daysInMonth = isLeapYear ? 29 : 28;
//         default:
//             daysInMonth = 0;
//     }

//     if (day > 0 && day < daysInMonth) {
//         day++;
//     } else if (day === daysInMonth) {
//         day = 1;
//         if (month < 12) {
//             month++;
//         } else {
//             month = 1;
//         }
//     } else {
//         console.log("Notog'ri kun kiritildi.");
//     }
//     console.log("Keyingi sana: " + day + "-" + month);
// }

// {
//     // 10-masala
//     let direction = prompt("Robot yo'nalishi (sh, j, q, g):");
//     let command1 = prompt("1-buyruq");
//     let command2 = prompt("2-buyruq");
//     let finalDirection;

//     function turnLeft(currentDirection) {
//         switch (currentDirection) {
//             case "s":
//                 return "g";
//             case "g":
//                 return "j";
//             case "j":
//                 return "q";
//             case "q":
//                 return "sh";
//         }
//     }

//     function turnRight(currentDirection) {
//         switch (currentDirection) {
//             case "s":
//                 return "q";
//             case "q":
//                 return "j";
//             case "j":
//                 return "g";
//             case "g":
//                 return "sh";
//         }
//     }

//     finalDirection = direction;
//     if (command1 === "1") {
//         finalDirection = turnLeft(finalDirection);
//     }

// }

                                                             // FOR \\

// {
//     // 1-misol
//     let k = parseInt(prompt("k son kiriting:"));
//     let n = parseInt(prompt("n son kiriting:"));
//     for (let i = 0; i < n; i++) {
//         console.log(k);
//     }
// }

// {
//     // 2-misol
//     let a = parseInt(prompt("a son kiriting:"));
//     let b = parseInt(prompt("b son kiriting:"));
//     let count = 0;
//     for (let i = a; i <= b; i++) {
//         console.log(i);
//         count++;
//     }
//     console.log("jami:", count);
// }

// {
//     // 3-misol
//     let a = parseInt(prompt("a son kiriting:"));
//     let b = parseInt(prompt("b son kiriting:"));
//     let count = 0;
//     for (let i = b - 1; i > a; i--) {
//         console.log(i);
//         count++;
//     }
//     console.log("jami:", count);
// }

// {
//     // 4-misol
//     let price = parseFloat(prompt("1 kg kanfet narxini kiriting:"));
//     for (let i = 1; i <= 10; i++) {
//         console.log(i + " kg kanfet narxi:", price * i);
//     }
// }

// {
//     // 5-misol
//     let price = parseFloat(prompt("1 kg kanfet narxini kiriting:"));
//     for (let i = 1; i < 10; i++) {
//         console.log((i / 10 ) + " kg kanfet narxi:", price * (i / 10));
//     }
// }

// {
//     // 6-misol
//     let price = parseFloat(prompt("1 kg kanfet narxini kiriting:"));
//     for (let weight = 1.2; weight <= 2.8; weight += 0.2) {
//         console.log(weight + " kg kanfet narxi:", price * weight);
//     }
// }

// {
//     // 7-misol
//     let a = parseInt(prompt("a son kiriting:"));
//     let b = parseInt(prompt("b son kiriting:"));
//     let total = 0;
//     for (let i = a; i <= b; i++) {
//         total += i;
//     }
//     console.log("jami:", total);
// }

// {
//     // 8-misol
//     let a = parseInt(prompt("a son kiriting:"));
//     let b = parseInt(prompt("b son kiriting:"));
//     let product = 1;
//     for (let i = a; i <= b; i++) {
//         product *= i;
//     }
//     console.log("ko'paytmasi:", product);
// }

// {
//     // 9-misol
//     let a = parseInt(prompt("a son kiriting:"));
//     let b = parseInt(prompt("b son kiriting:"));
//     let total = 0;
//     for (let i = a; i <= b; i++) {
//         total += i * i;
//     }
//     console.log("kvadrat yig'indisi:", total);
// }

// {
//     // 10-misol
//     let n = parseInt(prompt("n son kiriting:"));
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += 1 / i;
//     }
//     console.log("yig'indi:", total);
// }