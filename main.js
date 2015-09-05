chrome.tabs.insertCSS({file:"reflow.css"});

function addClassOnClick(id,term){
    var codeString = 'document.body.style.cssText+="' + term + '"';
    
    document.getElementById(id).addEventListener("click",function(){
        chrome.tabs.executeScript({
            code: codeString
        });
    });
}


addClassOnClick("whitesmoke","background-color:#f9f9f9;color:black;");
addClassOnClick("sepia","background-color:#b6946c;color:black;");
addClassOnClick("night","background-color:black;color:#dddddd");

addClassOnClick("serif","font-family:serif");
addClassOnClick("mono","font-family:monospace");
addClassOnClick("sans","font-family:sans-serif");

addClassOnClick("40","width:40vw");
addClassOnClick("50","width:50vw");
addClassOnClick("60","width:60vw");

addClassOnClick("pt14","font-size:17px");
addClassOnClick("pt20","font-size:20px");
addClassOnClick("pt26","font-size:26px");

