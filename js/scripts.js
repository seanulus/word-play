$(document).ready(function() {
  $("#sentences").submit(function(event) {
    //debugger

    var sentence = $("#sentence1").val();
    var sentenceArray = sentence.split(" ");

    var greaterArray = []

    sentenceArray.map(function(words) {
      if (words.length > 2) {
        greaterArray.push(words)
      };
    });

    finishedArray = greaterArray.reverse().join(" ");

    $(".display").text(finishedArray);

    event.preventDefault();
  });
});
