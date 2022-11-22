function writeCards(name, event) {
    const message_array = [];
    for (let i = 0; i < name.length; i++) {
        const message = "Thank you, " + name[i] + ", for the wonderful" + event + "gift";
        message_array.push(message);
    }
    return message_array;
}

function countDown(num){
    do {
        console.log(num);
        num--;
    } while (num >= 0);
}