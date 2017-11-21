var word = "Atlanta"

var wins = 0;

var pWins = function (){
  wins++;
}
$(document).ready(function() {
  for (var i = 0; i < word.length; i++) {
      console.log("The loop ran");
      $( "#word-one" ).append( "<p>Test</p>" );

  }

})

