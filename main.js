let y = Math.floor(Math.random() * 10 + 1);
let a = 1;

   document.getElementById("tugmacha").onclick = function () {
  let x = document.getElementById("text").value;

  if (x == y) {
    alert("Tabreklaymiz!!! O'yin g'olibi bo'ldingiz");
  } else if (x > y) {
    a++;
    alert("Xato, kichikroq raqam tanlang!");
  } else {
    a++;
    alert("Xato, kattaroq raqam tanlab ko'ring!");
  }
};


// let b = 10;
// // document.getElementById("tugmacha").onclick = function(){
// let span = document.getElementById("span");
// const d = () => {
//   console.log(--b);
//   if (b > 0) {
    
//   }
//   span.innerHTML =b;
// };
// // }
