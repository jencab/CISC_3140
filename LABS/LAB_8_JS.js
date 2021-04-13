var count = document.getElementById('count');
var input = document.getElementById('input');

// event fired when a key is 'up' (up after being pressed down)
input.addEventListener('keyup', function(e) {
  wordCounter(e.target.value);
});

function wordCounter(text) {
  var text = input.value.split(' '); // count words split by a space
  var wordCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {          //if text is not a space; count it 
      wordCount++;
    }
  }
  count.innerText = wordCount;     //display the word count
}
