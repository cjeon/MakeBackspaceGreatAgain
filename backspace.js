document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    // if backspace is pressed, go back.
    if (e.keyCode == 8) {
      if (document.activeElement.tagName == 'INPUT'){
        // if on input, do nothing
      } else{
        //console.log(document.activeElement);
        window.history.back();
      }
    }
}
