
//ex1
let dayW = 'Duminica';

switch (dayW) {
    case 'Luni':
        console.log('Astazi este Luni');
    break;
    case 'Marti':
        console.log('Astazi este Marti');
    break;
    case 'Miercuri':
        console.log('Astazi este Miercuri');
    break;
    case 'Joi':
        console.log('Astazi este Joi');
    break;
    case 'Vineri':
        console.log('Astazi este Vineri');
    break;
    case 'Simbata':
        console.log('Astazi este Simbata');
    break;
    case 'Duminica':
        console.log('Astazi este Duminica');
    break;        
    default:
        console.log('Nu ai indicat ziua corect')
}

//ex2

let str = 'textdasdasdasdasdasdas'
let lungimeaStr = str.length>10 ? 'Lungimea str este mai mare de 10' : 'Lungimea str este mai mica de 10';

console.log(lungimeaStr)

//ex3 

let str1 = 'Andrei HUZUN'

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

//ex4 

let str2 = 'Andrei astazi joaca fotbal foarte bine'
let metod1 = str2.slice(13,19)
let metod2 = str2.substring(13,19)

console.log(metod1);
console.log(metod2);



