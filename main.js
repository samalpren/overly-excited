/* // const addExcitement = () => {
//   console.log("This is a sentence.")
// }
// Stacking Words
// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
// sentence = theWordArray;
// function addExcitement (theWordArray) {
//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = " "
//    for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp = theWordArray[i];
//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//     }
// } 
// // Invoke the function and pass in the array
// addExcitement(sentence)
// More than excited */
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
function addExcitement(theWordArray) {
    //sentence = theWordArray;
    let buildMeUp = "";
    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.*/
        if (i % 3 === 0) {
            buildMeUp += `${theWordArray[i]}! `;
        } else { 
            //buildMeUp += theWordArray[i] + " ";
            //buildMeUp += theWordArray[i].concat(" ");
            buildMeUp += `${theWordArray[i]} `;
        }
    }
      
    // Print buildMeUp to the console

    //addExcitement(sentence);
    console.log(buildMeUp);
}

addExcitement(sentence);

//let sentence2 = ["A","cat","eats","fish"];
//addExcitement(sentence2);


      // buildMeUp = theWordArray[i].concat("!");
// // I want to use a question mark
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
// sentence = theWordArray;
// let solutionCC = sentence.concat(theWordArray + "?");
// function addExcitement(theWordArray) {
    
//     let buildMeUp = " "
//     for (let i = 0; i < theWordArray.length; i++);
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.*/
//         if (theWordArray[i] % 3) {
//             buildMeUp = theWordArray[i] + "!";
//         } else { 
//             buildMeUp = theWordArray[i];
//         }
      
//         // Print buildMeUp to the console
//         // console.log(buildMeUp)
// addExcitement(sentence)
// 