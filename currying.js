let multiply = function (x,y) {
    console.log(x*y);
  }
  
// Bind function

let multiplyByTwo = multiply.bind(this,2 );
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

//Function closures

let mltiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let mltiplyByTwo = mltiply(2);
mltiplyByTwo(5);

let mltiplyByThree = mltiply(3);
mltiplyByThree(5);