// Function to reverse every word in a sentence
function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Reverse each word and store them in an array
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Input sentence
  const inputSentence = "This is a sunny day";
  
  // Call the function and display the output
  const reversed = reverseWords(inputSentence);
  console.log(reversed);