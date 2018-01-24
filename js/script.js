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
      console.log('the sentence is ' + sentence);
      var transformedSentence = sentenceToPigLatin(sentence);
      console.log(transformedSentence);
        $('#display').text(transformedSentence);
      
      
	});
	
	
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function pigLatin(word) {
	return word + "ay"
};




// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentence
function sentenceToPigLatin(sentence){
	var words = sentence.split(' ');
    

	
	for (var a = 0; a < words.length; a++){
		words[a] = pigLatin(words[a])
	}	
	return words;
	
}
console.log(sentenceToPigLatin("I am here okay right"));
