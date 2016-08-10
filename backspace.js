document.onkeydown = checkKey;
var val_of_this;
var is_changing = false;

var mutationObserver = new MutationObserver(
  function () {console.log("changed!");}
);

mutationObserver.observe(document.activeElement, {
    characterData: true,
    attributeOldValue: true,
    childList: true,
    subtree: true
  });

function checkKey(e) {
    e = e || window.event;
    console.log(e.keyCode);
    // if backspace is pressed,
    if (e.keyCode == 8) {
      if (document.activeElement.tagName == 'INPUT'){
        // if on input, do nothing
      } else {
        // if not on input, go back.
        //window.history.back();
      }
    } else {
      console.log(document.activeElement);
      val_of_this = document.activeElement.innerHtml;
      console.log(val_of_this);
    }
}
