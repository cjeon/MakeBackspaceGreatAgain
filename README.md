# MakeBackspaceGreatAgain
Brings backspace navigation back to chrome.

#important
This extension is built within an hour by non-chrome expert. Install and use it only if you know what you are doing (or other experts tell you it's safe).

# How to install
1. Download [MakeBackspaceGreatAgain.crx](https://github.com/cjeon/MakeBackspaceGreatAgain/raw/master/MakeBackspaceGreatAgain.crx) file.
2. Go to `chrome://extensions/`. 
3. Drop `MakeBackspaceGreatAgain.crx` into `chrome://extensions/` page.
4. Reload page, check if backspace works. 
5. (optional) right-click the globe next to address bar (which is this extension's icon) and click `hide in chrome menu`. 

# How to remove
1. Go to `chrome://extensions/`. 
2. Find `Make Backspace Great Again`
3. Click trash bin.

# How it works
It injects simple js code into every js file you load. The code is in `backspace.js` and is as follows:
``` javascript
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
```
this basically detects every keypress you make, and if it's backspace(whose keycode is 8), then move back a page.
If your focus is on any kind of input, then it does nothing, as it should.

# Contributions
Any kinds of PR are welcome. 
