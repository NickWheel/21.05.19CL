
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





// let arr = [1, 50, 14 ,23, 31, 9, -3];
// let min = arr[0];
// let max = arr[0];

// for (let i=0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     else if (arr[i] > max){
//         max = arr[i];  
      
//     }
// }
// console.log(min);
// console.log(max);


let data = [3, 15, 'xoxo', 42, 'attata', ['zhop', 'aa', 1], 4, [23, 'kekss']];

let numbers = [];
let strings = [];
// let arrays = [];

for (let i=0; i < data.length; i++) {
    
    if (typeof data[i] === "number") {
        numbers.push(data[i]);
    }
    else if (typeof data[i] === "string") {
        strings.push(data[i]);
    }
    else if (typeof data[i] === "object") {
        // arrays.push(data[i]);
        let subdata = data[i];
        for(let j = 0; j < subdata.length ;j++) {
            if (typeof subdata[j] === "number") {
                // console.log(subdata[j] + ' this is a number');
                numbers.push(subdata[j]);
            }
            else if (typeof subdata[j] === "string") {
                // console.log(subdata[j] + ' this is a string');
                strings.push(subdata[j]);
            }
        }
    }
}
console.log('numbers are: ' + numbers);
console.log('strings are: ' + strings);
// console.log('arrays are: ' + arrays);