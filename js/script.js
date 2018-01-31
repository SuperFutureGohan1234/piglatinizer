// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 

$( document ).ready(function() {
  
	$("#submit").click(function(){
	console.log('the button was clicked!');
      var sentence = $('#input1').val();
      var transformedSentence = sentenceToPigLatin(sentence);
      console.log(transformedSentence);
        $('#display').text(transformedSentence);
      
      
	});
	
	
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function pigLatin(word) {
	return word + "ay"
	if(arrayOfVowels.indexOf(words[a][0]) > -1) {
			words[a] = pigLatin(words[a])
		} else {
			words[a] = pigLatin2(words[a]);		
		}
	
};


function pigLatin2(word) {
	// to do: strip the first letter from the word, and append it to "ay" at the end
	var firstLetter = word.substr() // this line is unfinished
	
	if (word[0]==="a" || word[0]==="e" || word==="i" || word==="o" || word==="u" ){
		
		return word +"ay";
		
	} else {
		
		return word.slice + 'ay';
	
		}

}	








// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentence
function sentenceToPigLatin(sentence){
	var words = sentence.split(' ');

	
	for (var a = 0; a < words.length; a++){
		// if it starts with a , do this
		if(arrayOfVowels.indexOf(words[a][0]) > -1) {
			words[a] = pigLatin(words[a])
		} else {
			words[a] = pigLatin2(words[a]);		
		}
		
	}	
	return words;
	
}
console.log(sentenceToPigLatin("I am here okay right"));
