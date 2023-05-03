function fun(a,b,operation){

    if(typeof a!== 'number' || typeof b!== 'number'){
        return false
    }

    switch (operation) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return a / b;
        default:
          return false;
      }

    
}

console.log(fun(200,2,'/'))