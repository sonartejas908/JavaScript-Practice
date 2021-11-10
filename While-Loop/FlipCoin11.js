let head =0;
let tail =0;

while((head !=11) || (tail !=11))
{
    let result = Math.floor(Math.random()*10 %2)
    if(result == 0)
    {
        head++;
    }
    else
    {
        tail++;
    }
}
console.log("Head : "+head);
console.log("Tail : "+tail);