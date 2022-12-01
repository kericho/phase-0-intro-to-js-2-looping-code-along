function writeCards(names, surprise){
    let newArr = [];
    names.forEach(element => {
        newArr.push(`Thank you, ${element}, for the wonderful ${surprise} gift!`)
    });
    return newArr;
}
function countDown(number){
    for(let i = 0; i <= number; i++){
        console.log(i)
    }
}