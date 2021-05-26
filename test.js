// var items = [
//     { name: '이', age: 21 },
//     { name: '박', age: 37 },
//     { name: '강', age: 45 },
//     { name: '우', age: 12 },
//     { name: '서', age: 13 },
//     { name: '장', age: 37 }
// ];
//
// // const sortedArr=items.sort(function (a, b) {
// //     return b.age - a.age;
// // });
// const sorted = Array.prototype.slice.call(items).sort((a,b)=>a.age -b.age);
// console.log(items)
// console.log(sorted)

let weight= {  "1":50,
    "2":80,
    "3":75,
    "4":120
}

console.log(Object.entries(weight).sort((a,b)=>a[1]-b[1]))

