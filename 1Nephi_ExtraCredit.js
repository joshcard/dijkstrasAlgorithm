

function importText ()
{
    //Import the .txt file
    const { throws } = require("assert");
    var fs = require("fs");
    var file = fs.readFileSync("./FirstNephiChapter11.txt");
    //Convert to string
    let fileString = String(file)
    return fileString
}

function getNumVerses(fileString)
{
    //Split the passed string on line breaks
    let result = fileString.split('\r\n')
    //Return the passed string -2 to account for blank verses
    console.log(result.length-2)
}

function getNoPeriod(fileString)
{
    //Split the passed string on linebreaks
    let result = fileString.split('\r\n')
    //Filter out the sentences that do not end in period
    result = result.filter(verse => verse.charAt(verse.length - 1) !== ".")
    //Delete the first blank item in the array
    result.shift()
    //Delete the last blank iten in the array
    result.pop()
    //return the final result
    console.log(result)
}

function getNumSentences()
{
    let number=0
    //Loop through the file string and count the number of times that a period, question mark, or exclamation mark appears
    for (i=0; i < fileString.length; i++)
    {
        if (fileString.charAt(i) === "." ||fileString[i] === "?" || fileString[i] === "!" )
        {
            //Add to the total number 
            number++
        }
        
    }
    console.log(number)
}

//Import Text Function
var fileString = importText()
console.log("Get the number Verses-------------->")
getNumVerses(fileString)
console.log("Get Sentences with no periods---------------")
getNoPeriod(fileString)
console.log("Get Number of Sentences in the Chapter--------->")
getNumSentences(fileString)