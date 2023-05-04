function numberSquare(someNumber){
    let result = someNumber**2
    return result
}
console.log()

function celsiusToFarenheit(someNumber){
    if(typeof someNumber === 'number'){
        let result = ((someNumber*1.8)+32)
        if(result <= -459.67){
            return 'Temperatura nie jest możliwa'

        }
        else{
            return result
        }
        
        
        
     
    }
    else{
        return 'Parametr nie jest liczbą'
    }
    

    
}
let dupa = "dupa"
console.log(celsiusToFarenheit(-500))
