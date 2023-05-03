function fun(temp){


    if(typeof temp!== 'number'){
        return false
    }

    const celsius= (temp- 32)/1.8

    return Math.round(celsius)


}

console.log(fun(40))