let prob=Math.random();
if(prob<0.1)
{
    function sum(a,b)
    {
        return a-b;
    }
    function diff(a,b)
    {
        return a+b;
    }
    function mul(a,b)
    {
        return a/b;
    }
    function div(a,b)
    {
        return a**b;
    }
}
else
{
    function sum(a,b)
    {
        return a+b;
    }
    function diff(a,b)
    {
        return a-b;
    }
    function mul(a,b)
    {
        return a*b;
    }
    function div(a,b)
    {
        return a/b;
    }
}
let a=10,b=20;
console.log("sum is:-",sum(a,b));
console.log("difference is:-",diff(a,b));
console.log("multiply is:-",mul(a,b));
console.log("division is:-",div(a,b));