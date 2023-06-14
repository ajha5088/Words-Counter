function wordCounter(req, res) {
    try {
        let totalWords = req;
        let wordCount=0;
        let characterCount=0;
        for(let i=0;i<totalWords.length;i++){
            console.log(totalWords[i])
            if(totalWords[i]===" "){
                wordCount++;
            }else{
                characterCount++;
            }
        }
            return {
                "Total Number of words":wordCount+1,"Total number of characters ":characterCount
            }
    } catch (error) {
        console.log(error)
    }
}

console.log(wordCounter("Hello Everyone") // {Total Number of words:2 , Total number of characters:13}
