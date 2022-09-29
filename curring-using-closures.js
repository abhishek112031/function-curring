let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyby2=multiply(2);
multiplyby2(5);