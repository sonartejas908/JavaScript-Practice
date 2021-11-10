//Min Max Three Digit

let A = Math.floor(Math.random()*1000);
let B = Math.floor(Math.random()*1000);
let C = Math.floor(Math.random()*1000);
let D = Math.floor(Math.random()*1000);
let E = Math.floor(Math.random()*1000);

if ((A > B) && (A > C) && (A > D) && (A > E))
{
    console.log("A is Maximum");
}
else if((B > A) && (B > C) && (B > D) && (B > E))
{
    console.log("B is Maximum")
}
else if((C > A) && (C > B) && (C > D) && (C > E))
{
    console.log("C is Maximum")
}
else if((D > A) && (D > C) && (D > B) && (D > E))
{
    console.log("D is Maximum")
}
else
{
    console.log("E is Maximum");
}

if ((A < B) && (A < C) && (A < D) && (A < E))
{
    console.log("A is Minimum");
}
else if((B < A) && (B < C) && (B < D) && (B < E))
{
    console.log("B is Minimum")
}
else if((C < A) && (C < B) && (C < D) && (C < E))
{
    console.log("C is Minimum")
}
else if((D < A) && (D < C) && (D < B) && (D < E))
{
    console.log("D is Minimum")
}
else
{
    console.log("E is Minimum");
}