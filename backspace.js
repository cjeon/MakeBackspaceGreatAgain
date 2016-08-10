document.onkeydown = checkKey;
var activeElemId;
var isChanging = false;

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
      var uniqRandomId = Math.random().toString();
    }
}
