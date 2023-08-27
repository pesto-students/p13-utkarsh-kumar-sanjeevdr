function calcWordFrequencies() {

    //let givenString = "hey hi Mark hi mark";
    let givenString = prompt("Type a sentence to know the frequency of each word : ");

    let wordsCountMap = new Map();
    let wordArr = givenString.split(" ")

    for (let word of wordArr) {
        if (!wordsCountMap.has(word)) {
            wordsCountMap.set(word, 1);
        }
        else {
            wordsCountMap.set(word, wordsCountMap.get(word) + 1);
        }
    }

    console.log("Please find the words frequency below : ");

    for (let [key, value] of wordsCountMap) {
        console.log(`${key} : ${value}`);
    }
}

calcWordFrequencies();