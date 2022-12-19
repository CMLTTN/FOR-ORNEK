 //? girilen sayının Asal sayı olup olmadığını yazdıran kodu for dongulerini kullanarak yazınız


const primeNum = Number(prompt("Enter a number"))
 let isPrime = true
 if(primeNum < 2 ){
    console.log("Number should be bigger than 1");
 } 
 else {for (let i = 2; i< primeNum;i++)

 if (primeNum% i===0){
    //? tam bolunuyorsa asal degildir
    console.log(`${primeNum} is a not prime number`);
    isPrime= false
}
} 
if (isPrime===true) {
    console.log(`${primeNum} is a  prime number`);
}
