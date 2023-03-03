// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const a = 2;
const b = 3;

if(a > b){
    console.log('Skaicius a: ',a, 'didesnis uz skaiciu b: ', b);
}else if(a < b){
    console.log('Skaicius b: ',b, 'didesnis uz skaiciu a: ', a);
}else{
    console.log('Abu skaiciai lygus');
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log('-----------------------');
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('-----------------------');
for(let i = 0; i <= 10; i+=2){
    console.log(i);
}
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('-----------------------');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(let i = 0; i<5; i++){
    console.log(rand(1, 10));
}


// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log('-----------------------');
let sk = 0;
while(sk != 5){
    sk = rand(1, 10);
    console.log(sk);
}
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log('-----------------------');
const leng = rand(20, 30);
const arr = [];
for(let i = 0; i < leng; i++){
    arr.push(rand(10, 30));
}
let max = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);


// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log('-----------------------');
const letters = 'ABCD';
const letter_array = [];
for(let i = 0; i<100; i++){
    letter_array.push(letters[Math.floor(Math.random() * letters.length)]);
}
const count = {}
letter_array.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log('-----------------------');
function lygineSuma(p1, p2){
    if(typeof p1 == 'number' && typeof p2 == 'number'){
        if((p1+p2) % 2 == 0){
            return console.log(p1+p2);;
        }else{
            return console.log('Suma nelygine');
        }
    }else if(Array.isArray(p1) && Array.isArray(p2)){
        if((p1.length + p2.length) % 2 == 0){
            return console.log(p1.length + p2.length);
        }else{
            return console.log('Masyvu ilgiu suma nelygine');
        }
    }else{
        return console.log('Pateikti nevienodo tipo kintamieji');
    }
}

lygineSuma(5, 3);
lygineSuma(5, 2);
lygineSuma([1, 2, 3], [4, 5, 6]);
lygineSuma([1, 2, 3], [4, 5]);
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log('-----------------------');
function pirminisSkaicius(sk){
    let count = 0;
    if(sk == NaN){
        return console.log('Pateiktas argumentas nera skaicius');
    }else{
        for(let i = 1; i <= sk; i++){
            if(sk % i == 0){
                count++;
            }
        }
    }
    if(count == 2){
        return console.log("pateiktas skaicius yra pirminis");
        
    }else{
        return console.log('Pateiktas skaicius nera pirminis');
    }
}

pirminisSkaicius(41);

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)
console.log('-----------------------');
function telefonoNumeris(arr){
    if(Array.isArray(arr))
    {
        if(arr.length == 10){
            for(let i = 0; i < arr.length; i++){
                if(Number.isInteger(arr[i]) == false){
                    return console.log('Ne visi masyvo elementai yra teisingi skaiciai');
                }
            }
            return console.log(`(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`);
        }else{
            return console.log('Pateiktas netinkamo ilgio masyvas');
        }
    }else{
        return console.log('Pateiktas argumentas nėra masyvas');
    }
}

telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);



