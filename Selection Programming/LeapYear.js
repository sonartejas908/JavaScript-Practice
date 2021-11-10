let year=1995;
let A =(year%400);
let B =(year%100);
let C =(year%4);

if(A==0)
    console.log("Leap Year");
else if(B==0)
    console.log("Not Leap Year");
else if(C == 0)
    console.log("Leap Year");
else
    console.log("Not Leap Year");