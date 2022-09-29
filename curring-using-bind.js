let multiply=function(x,y){
    console.log(x*y);
}

// let multiplybyTwo=multiply.bind(this,2);//here x=2;
// multiplybyTwo(5);//giving y value as parameter;//ans=10
let multiplybyTwo=multiply.bind(this);//here x=2;
multiplybyTwo(2,5);//giving x and  y value as parameter;//ans=10



let multiplybyThree=multiply.bind(this,3);//here x=3;
multiplybyThree(5);//giving y value as parameter//ans=15