function fun(a,b){

    if(typeof a==='number' && typeof b==="number"){
        return a+b
    }else{
        return 'შეცდომა მატრიცაში'
    }
}

console.log(fun(2,4))