function receivesAFunction(callback){
    callback()
}

function robsFunction() {
    console.log("Rob")
}

function returnsANamedFunction() {
    return robsFunction 
    } 


function returnsAnAnonymousFunction() {
    return function() {

    }
}