/*console.log("Background script running.");

chrome.webNavigation.onCompleted.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info =>{
        console.log("Page loaded!");
        chrome.tabs.executeScript(null,{file: "./foreground.js"},()=>{});
    });
});*/


/*console.log("Background script running.");

chrome.browserAction.onClicked.addListener(clickedButton); 

function clickedButton(){
    console.log("Button clicked");
}

console.log(chrome);
console.log(chrome.tabs);

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info =>{
        //if("https://www.google.com/".match(current_tab_info.url)){  --> this check is not reuired
        //  as we have given permission only for www.google.com to extension in manifest.json file. 
           chrome.tabs.executeScript(null,{file: "./foreground.js"},()=>{});
           console.log("redirect");
        //}
    });
}); */