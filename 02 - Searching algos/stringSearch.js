// String search - the naive method

/**
 * @param {str} string "the string to be searched"
 * @param {string} searchTxt "the string to look for"
 */

function stringSearch (str, searchTxt) {
    let count = 0;

    for (let i = 0; i < str.length - searchTxt.length - 1; i++) {        
        for (let j = 0; j < searchTxt.length; j++) {
            // console.log(str[i + j], searchTxt[j])

            if (str[i + j] !== searchTxt[j]) break;
            if (j === searchTxt.length - 1) {
                count++;
                // console.log(`Match found: count {${count}}`);
            }
        }
    }

    console.log(count);
}

stringSearch("amaka makawhy naa", "mak");
stringSearch("lalalal lal lalal la alalala", "ala");
stringSearch("lorie loled", "lo");