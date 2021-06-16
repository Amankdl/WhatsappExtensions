const isClassFound = setInterval(()=>{
    var sidePaneHeader = document.getElementsByClassName("_1ljzS pnYZD");
    if(sidePaneHeader.length){
      clearInterval(isClassFound);
      loadSettingButton();
    }
 },1e3);

 function loadSettingButton(){
    var buttonsGroup = document.getElementsByClassName("_1ljzS pnYZD")[0].children[0];
    var settings = document.createElement("div");
    settings.classList = "_2n-zq";
    settings.id = "settings";
    settings.addEventListener("click", openSettingsDiv, false);
    var settingsSvg = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX- m-10" data-tab="9" title="Settings" aria-label="Settings"><span><svg xmlns="http://www.w3.org/2000/svg" class="setting-svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"></path></svg></span></div><span></span>`;
    settings.innerHTML = settingsSvg;
    buttonsGroup.insertBefore(settings, buttonsGroup.children[0]);
    checkSettings();
}

var isLastMsgChecked;
var isProfilePicChecked;
var isNameNoChecked;
var isConversationChecked;
function checkSettings() {
    isLastMsgChecked = sessionStorage.getItem("lst-msg") == "true" ? 1 : 0;
    isLastMsgChecked ? addStyle("lst-msg") : {}

    isProfilePicChecked = sessionStorage.getItem("profile-pic") == "true" ? 1 : 0;
    isProfilePicChecked ? addStyle("profile-pic") : {}

    isNameNoChecked = sessionStorage.getItem("name-number") == "true" ? 1 : 0;
    isNameNoChecked ? addStyle("name-number") : {}

    isConversationChecked = sessionStorage.getItem("conversation") == "true" ? 1 : 0;
    isConversationChecked ? addStyle("conversation") : {}
}

var lastMsg, profilePic, nameNumber, conversation;
function openSettingsDiv() {

    var settingTpl = "";
    settingTpl += "        <div class=\"top h-30\">";
    settingTpl += "          <button id=\"settings-cancle-btn\" class=\"cancle-btn settings-cancle-btn\">x<\/button>";
    settingTpl += "        <\/div>";
    settingTpl += "        <div class=\"settings-ul-div\">";
    settingTpl += "        <ul class=\"settings-ul\">";
    settingTpl += "            <li><input type=\"checkbox\" id=\"lst-msg\" name=\"lst-msg\" value=\"lst-msg\">";
    settingTpl += "                <label>Blur last message.<\/label>";
    settingTpl += "            <\/li>";
    settingTpl += "            <li><input type=\"checkbox\" id=\"profile-pic\" name=\"profile-pic\" value=\"profile-pic\">";
    settingTpl += "                <label>Blur profile picture. <\/label>";
    settingTpl += "            <\/li>";
    settingTpl += "            <li><input type=\"checkbox\" id=\"name-number\" name=\"name-number\" value=\"name-number\">";
    settingTpl += "                <label for=\"\">Blur name\/number<\/label>";
    settingTpl += "            <\/li>";
    settingTpl += "            <li><input type=\"checkbox\" id=\"conversation\" name=\"conversation\" value=\"conversation\">";
    settingTpl += "                <label for=\"\">Blur conversation<\/label>";
    settingTpl += "            <\/li>";
    settingTpl += "        <\/ul>";
    /*settingTpl += "        <ul class=\"settings-ul mt-15\">";
    settingTpl += "            <li><input type=\"checkbox\" id=\"lst-msg\" name=\"lst-msg\" value=\"lst-msg\">";
    settingTpl += "                <label>Blur last message.<\/label>";
    settingTpl += "            <\/li>";
    settingTpl += "            <li><input type=\"checkbox\" id=\"profile-pic\" name=\"profile-pic\" value=\"profile-pic\">";
    settingTpl += "                <label>Blur profile picture. <\/label>";
    settingTpl += "            <\/li>";
    settingTpl += "            <li><input type=\"checkbox\" id=\"name-number\" name=\"name-number\" value=\"name-number\">";
    settingTpl += "                <label for=\"\">Blur name\/number<\/label>";
    settingTpl += "            <\/li>";
    settingTpl += "            <li><input type=\"checkbox\" id=\"conversation\" name=\"conversation\" value=\"conversation\">";
    settingTpl += "                <label for=\"\">Blur conversation<\/label>";
    settingTpl += "            <\/li>";
    settingTpl += "        <\/ul>";*/
    settingTpl += "        </div>";
    settingTpl += "        <hr class=\"horizontal-line hr-bottom\"/>";

    const loadingSettingsDiv = document.createElement("div");
    loadingSettingsDiv.innerHTML = settingTpl;
    loadingSettingsDiv.setAttribute("id", "loadingSettingsDiv");
    document.body.appendChild(loadingSettingsDiv);

    lastMsg = document.getElementById("lst-msg");
    lastMsg.checked = isLastMsgChecked;

    profilePic = document.getElementById("profile-pic");
    profilePic.checked = isProfilePicChecked;

    nameNumber = document.getElementById("name-number");
    nameNumber.checked = isNameNoChecked;

    conversation = document.getElementById("conversation");
    conversation.checked = isConversationChecked;

    document.getElementById("settings-cancle-btn").addEventListener('click', closeSettingPopup, false);

    lastMsg.addEventListener('change', (e) => {
        sessionStorage.setItem("lst-msg", e.target.checked);
        isLastMsgChecked = e.target.checked;
        isLastMsgChecked ? addStyle("lst-msg") : removeStyleById("lst-msg");
    });

    profilePic.addEventListener('change', (e) => {
        sessionStorage.setItem("profile-pic", e.target.checked);
        isProfilePicChecked = e.target.checked;
        isProfilePicChecked ? addStyle("profile-pic") : removeStyleById("profile-pic");
    });

    nameNumber.addEventListener('change', (e) => {
        sessionStorage.setItem("name-number", e.target.checked);
        isNameNoChecked = e.target.checked;
        isNameNoChecked ? addStyle("name-number") : removeStyleById("name-number");
    });

    conversation.addEventListener('change', (e) => {
        sessionStorage.setItem("conversation", e.target.checked);
        isConversationChecked = e.target.checked;
        isConversationChecked ? addStyle("conversation") : removeStyleById("conversation");
    });
}

function closeSettingPopup() {
    const closeSettingPopup = document.getElementById("loadingSettingsDiv");
    closeSettingPopup.remove();
}

function addStyle(id) {
    // only add stylesheets if they weren't added yet
    //if(!document.getElementById(id)){
    var link = document.createElement('link');
    link.id = id + "style";
    link.className = 'myaddedClass';
    link.href = chrome.extension.getURL('settings/'+id+'.css');
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
    //}
}

function removeStyleById(id) {
    // check if the stylesheet is there before removing
    var el = document.getElementById(id + "style")
    el.parentNode.removeChild(el);
}