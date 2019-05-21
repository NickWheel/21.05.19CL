
// let otchestvo = ['SerGAYevich','Svolyanovna',  'Batkovich',
//                  'Olegovna','Nikitich', 'Kekovna'];
// males = [];
// females = [];

// for (i = 0; i < otchestvo.length; i++) {
//     samo_otchestvo = otchestvo[i];

//     if (samo_otchestvo[samo_otchestvo.length - 1] === 'a') {
//         console.log(samo_otchestvo + ' hohoo-hahaaa, this is TELKA');
//         females.push(samo_otchestvo);
//     }
//     else {
//         console.log(samo_otchestvo + ' heeeeyy, dis is POSAN')
//         males.push(samo_otchestvo)
//     }
// }
// console.log(males + ' -- eto parni');
// console.log(females + ' -- eto devochki')


let arr = [1, 50, 14 ,23, 31, 9, -3];
let min = arr[0];
let max = arr[0];

for (let i=0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    else if (arr[i] > max){
        max = arr[i];  
      
    }
}
console.log(min);
console.log(max);
