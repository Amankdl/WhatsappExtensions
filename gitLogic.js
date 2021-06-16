const isHeaderFound = setInterval(() => {
    var sidePaneHeader = document.getElementsByClassName("_1ljzS pnYZD");
    if (sidePaneHeader.length) {
        clearInterval(isHeaderFound);
        loadButtons();
    }
}, 2e3);


function loadButtons() {
    var buttonsGroup = document.getElementsByClassName("_1ljzS pnYZD")[0].children[0];
    var exportSavedContacts = document.createElement("div");
    exportSavedContacts.classList = "_2n-zq";
    exportSavedContacts.id = "exportSavedContacts";
    var exportSavedContactsSvg = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX- m-10" data-tab="9" title="Export all contacts" aria-label="Export all contacts"><a id="exportContacts"><span class="downloadSavedContactsSpan"><svg xmlns="http://www.w3.org/2000/svg" class="setting-svg" viewBox="0 0 18 18" width="24" height="24"><path fill="currentColor" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path></svg></span></a></div><span></span>`;
    exportSavedContacts.innerHTML = exportSavedContactsSvg;
    buttonsGroup.insertBefore(exportSavedContacts, buttonsGroup.children[0]);
    document.querySelector('#exportContacts').addEventListener("click", exportSavedContactsFun, false);

    var bulkSend = document.createElement("div");
    bulkSend.classList = "_2n-zq";
    bulkSend.id = "upload-all-contacts";
    bulkSend.addEventListener("click", openBulkSenderPopup, false);
    var bulkSendSvg = `<div class="bulk-send-svg" aria-disabled="false" role="button" tabindex="0" class="_1XaX-" data-tab="9" title="Send Bulk Messages" aria-label="Send Bulk Messages"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="currentColor" d="M14.9,6.707c-0.804-2.497-3.649-4.351-7.035-4.351c-4.008,0-7.27,2.594-7.27,5.782
    c0,2.163,1.516,4.133,3.903,5.122v3.091c0,0.251,0.144,0.478,0.372,0.586c0.087,0.042,0.182,0.062,0.276,0.062
    c0.148,0,0.295-0.051,0.412-0.15l3.678-3.038c0.14-0.022,0.275-0.057,0.413-0.084c0.655,0.666,1.544,1.185,2.607,1.46
    c0.198,0.051,0.401,0.094,0.608,0.125l2.641,2.182c0.118,0.099,0.264,0.15,0.413,0.15c0.094,0,0.188-0.02,0.276-0.062
    c0.228-0.108,0.372-0.335,0.372-0.586v-2.135c1.74-0.761,2.84-2.231,2.84-3.846C19.405,8.862,17.456,7.073,14.9,6.707z
     M8.885,12.552c-0.019,0.003-0.032,0.018-0.051,0.022c-0.101,0.022-0.2,0.056-0.281,0.123l-2.76,2.28v-2.161
    c0-0.275-0.175-0.521-0.434-0.612C3.253,11.467,1.89,9.871,1.89,8.138c0-2.474,2.68-4.487,5.975-4.487
    c2.604,0,4.801,1.265,5.617,3.014c0.187,0.401,0.302,0.823,0.33,1.268c0.005,0.069,0.028,0.134,0.028,0.205
    c0,1.819-1.481,3.438-3.706,4.129c-0.115,0.037-0.224,0.08-0.343,0.111C9.497,12.455,9.196,12.513,8.885,12.552z M15.703,13.809
    c-0.259,0.091-0.434,0.336-0.434,0.612v1.199l-1.723-1.422c-0.095-0.079-0.211-0.129-0.333-0.144
    c-0.219-0.028-0.431-0.068-0.636-0.121c-0.545-0.14-1.023-0.364-1.433-0.64c2.423-0.969,3.99-2.942,3.99-5.155
    c0-0.024-0.004-0.047-0.005-0.071c1.718,0.385,2.98,1.553,2.98,2.948C18.11,12.202,17.165,13.299,15.703,13.809z"></path>
<path fill="none" d="M4.68,7.591h6.167c0.358,0,0.648-0.29,0.648-0.648s-0.29-0.648-0.648-0.648H4.68
    c-0.358,0-0.648,0.29-0.648,0.648S4.323,7.591,4.68,7.591z"></path>
<path fill="none" d="M8.709,8.636H4.68c-0.358,0-0.648,0.29-0.648,0.648c0,0.358,0.29,0.648,0.648,0.648h4.028
    c0.358,0,0.648-0.29,0.648-0.648C9.356,8.926,9.067,8.636,8.709,8.636z"></path></svg></span></div><span></span>`;
    bulkSend.innerHTML = bulkSendSvg;
    buttonsGroup.insertBefore(bulkSend, buttonsGroup.children[0]);
    document.getElementsByClassName("JnmQF _3QmOg")[0].addEventListener('click', isGroupOrIndividual, false);
}

function openBulkSenderPopup() {
    loadingDiv();
}

function isGroupOrIndividual() {
    document.querySelector("._1-qgF").addEventListener('click', (e) => {
        whenChatHeaderClicked();
    }, false);
    /*displayButton();*/
}

function whenChatHeaderClicked() {
    setTimeout(() => {
        var selectInfoInDrop = document.querySelector(`[aria-label="Group info"]`);
        var areButtonsAlreadyExsist = document.getElementById("exportGroupContacts");
        if (!areButtonsAlreadyExsist) {
            if (selectInfoInDrop) {
                selectInfoInDrop.addEventListener("click", createGroupButtons, false);
            }
            createGroupButtons();
        }
    }, 500);
}

function createGroupButtons() {
    setTimeout(() => {
        var groupDetailHeader = document.querySelector("._1XrsE");
        if (groupDetailHeader && groupDetailHeader.innerText.includes("Group")) {
            var findInviteToGrpDiv = document.getElementsByClassName("_2Z4DV _25uA8");
            if (findInviteToGrpDiv) {
                // Create duplicate group button
                var createDuplicateGroup = `<div class="_13Kad" title="Create Duplicate Group"><div class="_2GAT7"><div class="_1_JE6">
                <span data-testid="link" data-icon="link" class="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="24" height="24">
                <path fill="currentColor" d="M18.378,1.062H3.855c-0.309,0-0.559,0.25-0.559,0.559c0,0.309,0.25,0.559,0.559,0.559h13.964v13.964
                c0,0.309,0.25,0.559,0.559,0.559c0.31,0,0.56-0.25,0.56-0.559V1.621C18.938,1.312,18.688,1.062,18.378,1.062z M16.144,3.296H1.621
                c-0.309,0-0.559,0.25-0.559,0.559v14.523c0,0.31,0.25,0.56,0.559,0.56h14.523c0.309,0,0.559-0.25,0.559-0.56V3.855
                C16.702,3.546,16.452,3.296,16.144,3.296z M15.586,17.262c0,0.31-0.25,0.558-0.56,0.558H2.738c-0.309,0-0.559-0.248-0.559-0.558
                V4.972c0-0.309,0.25-0.559,0.559-0.559h12.289c0.31,0,0.56,0.25,0.56,0.559V17.262z"></path></svg>
                </span></div></div></div><div class="TbtXF">
                <div role="gridcell" aria-colindex="2" class="_2pkLM"><div class="_3Dr46">
                Create duplicate group</div></div></div>`;
                var div = document.createElement('div');
                div.classList = "_2Z4DV _25uA8";
                div.setAttribute("data-testid", "cell-frame-container");
                div.innerHTML = createDuplicateGroup;
                div.addEventListener('click', duplicateGroup, false);
                document.querySelector(`[data-icon="search"]`).parentElement.parentElement.parentElement.parentElement.parentElement.insertBefore(
                    div, document.querySelector(`[data-icon="search"]`).parentElement.parentElement.parentElement.parentElement
                )

                //export button
                var exportButtonDiv = `<a class="d-flex" id="exportGroupContacts" title="Export All Group Members"><div class="_13Kad"><div class="_2GAT7"><div class="_1_JE6">
                <span data-testid="link" data-icon="link" class="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="24" height="24">
                <path fill="currentColor" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path></svg>
                </span></div></div></div><div class="TbtXF">
                <div role="gridcell" aria-colindex="2" class="_2pkLM"><div class="_3Dr46">
                Export all members number</div></div></div>`;
                var eportDiv = document.createElement('div');
                eportDiv.classList = "_2Z4DV _25uA8";
                eportDiv.setAttribute("data-testid", "cell-frame-container");
                eportDiv.innerHTML = exportButtonDiv;
                eportDiv.addEventListener('click', exportGroupMembers, false);
                document.querySelector(`[data-icon="search"]`).parentElement.parentElement.parentElement.parentElement.parentElement.insertBefore(
                    eportDiv, document.querySelector(`[data-icon="search"]`).parentElement.parentElement.parentElement.parentElement
                )

                var isAdmin = false;
                var admins = document.getElementsByClassName("_33IQJ");
                Array.from(admins).forEach(admin => {
                    if (admin.parentElement.previousElementSibling.children[0].innerText == "You") {
                        isAdmin = true;
                    }
                });

                //Import button
                if (isAdmin) {
                    var importGrpButtonDiv = `<div class="_13Kad" title="Import group members"><div class="_2GAT7"><div class="_1_JE6">
                <span data-testid="link" data-icon="link" class="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="24" height="24">
                <path fill="currentColor" d="M8.416,3.943l1.12-1.12v9.031c0,0.257,0.208,0.464,0.464,0.464c0.256,0,0.464-0.207,0.464-0.464V2.823l1.12,1.12c0.182,0.182,0.476,0.182,0.656,0c0.182-0.181,0.182-0.475,0-0.656l-1.744-1.745c-0.018-0.081-0.048-0.16-0.112-0.224C10.279,1.214,10.137,1.177,10,1.194c-0.137-0.017-0.279,0.02-0.384,0.125C9.551,1.384,9.518,1.465,9.499,1.548L7.76,3.288c-0.182,0.181-0.182,0.475,0,0.656C7.941,4.125,8.234,4.125,8.416,3.943z M15.569,6.286h-2.32v0.928h2.32c0.512,0,0.928,0.416,0.928,0.928v8.817c0,0.513-0.416,0.929-0.928,0.929H4.432c-0.513,0-0.928-0.416-0.928-0.929V8.142c0-0.513,0.416-0.928,0.928-0.928h2.32V6.286h-2.32c-1.025,0-1.856,0.831-1.856,1.856v8.817c0,1.025,0.832,1.856,1.856,1.856h11.138c1.024,0,1.855-0.831,1.855-1.856V8.142C17.425,7.117,16.594,6.286,15.569,6.286z"></path></svg>
                </span></div></div></div><div class="TbtXF">
                <div role="gridcell" aria-colindex="2" class="_2pkLM"><div class="_3Dr46">
                Import members</div></div></div>`;
                    var importDiv = document.createElement('div');
                    importDiv.classList = "_2Z4DV _25uA8";
                    importDiv.setAttribute("data-testid", "cell-frame-container");
                    importDiv.innerHTML = importGrpButtonDiv;
                    importDiv.addEventListener('click', importGroupMembers, false);
                    document.querySelector(`[data-icon="search"]`).parentElement.parentElement.parentElement.parentElement.parentElement.insertBefore(
                        importDiv, document.querySelector(`[data-icon="search"]`).parentElement.parentElement.parentElement.parentElement
                    )
                }
            }
        }
    }, 1000);
}

var idFound = false;


function duplicateGroup() {
    openGroupConfirmPopup();
}

var confirmBtn;
function openGroupConfirmPopup() {
    var createGroupConfirm = `<div class="mt-20"><p>Do you really want to create duplicate group ?</p></div>
    <div class="mt-10"><input class="grp-name-input" placeholder="Enter name for duplicate group" type="text" name="grpName" id="grpName"></div>
    <div class="grp-save-cancle-btn"><button id="confirm-btn" class="confirm-btn">Confirm</button><div id=\"spinner\" class=\"spinner\"></div><button id="create-grp-cancle-btn">Close</button></div>`;
    const createGroupConfirmDiv = document.createElement("div");
    document.getElementById("app").classList.add("blur");
    createGroupConfirmDiv.innerHTML = createGroupConfirm;
    createGroupConfirmDiv.classList.add('group-confirm-outer');
    createGroupConfirmDiv.setAttribute("id", "group-confirm-outer");
    document.body.appendChild(createGroupConfirmDiv);
    var closeBtn = document.querySelector("#create-grp-cancle-btn");
    closeBtn.addEventListener("click", closeGroupConfirmPopup, false);
    confirmBtn = document.querySelector("#confirm-btn");
    confirmBtn.addEventListener("click", clickedOnConfirmBtn, false);
}

var canImportMember = false;
var importBtn;
function importGroupMembers() {
    var grpImport = "";
    grpImport += "<textarea class=\"mt-15\" name=\"import-grp-member-textbox\" id=\"import-grp-member-textbox\" placeholder=\"Ex: +91234567890 \n    +91098765432 \n    +91000000000\"><\/textarea>";
    grpImport += "        <p class=\"m-ten\"><b>OR<\/b> select CSV file<\/p>";
    grpImport += "        <input class=\"m-ten\" type=\"file\" name=\"import-grp-member-input\" id=\"import-grp-member-input\">";
    grpImport += "        <div class=\"m-ten btn-grp-div\">";
    grpImport += "            <button class=\"mt-15 create-grp-btn mr-5\" id=\"import-membr-btn\">Import<\/button>";
    grpImport += "            <div id=\"spinner\" class=\"spinner\"></div>";
    grpImport += "            <button id=\"closeImportMemberPopup\" class=\"mt-15 create-grp-btn\">Cancle<\/button>";
    grpImport += "        <\/div>";
    grpImport += "<p id=\"limitExceedMsg\"></p>";

    const importGrpPopup = document.createElement("div");
    importGrpPopup.innerHTML = grpImport;
    importGrpPopup.setAttribute("id", "import-grp-member-box");
    importGrpPopup.classList.add("import-grp-member-box");
    document.body.appendChild(importGrpPopup);
    canImportMember = true;
    document.getElementById("app").classList.add("blur");
    document.getElementById("import-grp-member-input").addEventListener("change", loadContactCsv, false);
    document.getElementById("closeImportMemberPopup").addEventListener("click", closeImportMemberPopup, false);
    importBtn = document.getElementById('import-membr-btn');
    importBtn.addEventListener('click', importGrpMembers, false);
}

function closeImportMemberPopup() {
    var cancleBtnn = document.getElementById("import-grp-member-box");
    document.getElementById("app").classList.remove("blur");
    canImportMember = false;
    cancleBtnn.remove();
}

function exportGroupMembers() {
    var contactsNumbersInGroup = [];
    var groupId = getGroupId();
    WAPI._getGroupParticipants(groupId).then((res) => {
        res['_models'].forEach(item => {
            contactsNumbersInGroup.push(item['__x_id']['user']);
        })
        var groupName = document.getElementsByClassName("_2KQyF")[0].firstElementChild.innerText;
        exportNumbersInGroup(contactsNumbersInGroup, groupName);
    });
}

function exportNumbersInGroup(rows, groupName) {
    let csvContent = "data:text/csv;charset=utf-8,"
        + rows.join("\n");

    var encodedUri = encodeURI(csvContent);
    var link = document.querySelector("#exportGroupContacts");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${groupName}-members.csv`);
}

function clickedOnConfirmBtn() {
    var contactsInGroup = [];
    confirmBtn.style.display = "none";
    spinner = document.getElementById('spinner');
    spinner.style.display = "block";
    var groupId = getGroupId();
    WAPI._getGroupParticipants(groupId).then((res) => {
        res['_models'].forEach(item => {
            contactsInGroup.push(item['__x_id']['_serialized']);
        })
        var newName = document.getElementById("grpName").value;
        var groupName = newName == "" ? document.getElementsByClassName("_2KQyF")[0].firstElementChild.innerText : newName;
        WAPI.createGroup(groupName, contactsInGroup).then(res => {
            document.getElementById("app").classList.remove("blur");
            confirmBtn.style.display = "block";
            spinner.style.display = "none";
            closeGroupConfirmPopup();
        });
    });
}

function closeGroupConfirmPopup() {
    var cancleBtnn = document.getElementById("group-confirm-outer");
    document.getElementById("app").classList.remove("blur");
    cancleBtnn.remove();
}

var closeBtn;
var sendBtn;
var spinner;
var msg;
var msgType;
var mediaFile;
var caption;

function loadingDiv() {

    var strVar = "";
    strVar += "<div class=\"outer-box\">";
    strVar += "      <div class=\"top\">";
    strVar += "          <button class=\"cancle-btn\">x<\/button>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"upper-box\">";
    strVar += "         <div id=\"radio-btn\" class=\"radio-btn\"> ";
    strVar += "         <input type=\"radio\" id=\"text\" name=\"msg-type\" value=\"text\" checked \"> ";
    strVar += "         <label for=\"text\" class=\"radio-lbl\">Text<\/label>";
    strVar += "         <input type=\"radio\" id=\"file\" name=\"msg-type\" value=\"file\" \">";
    strVar += "         <label for=\"file\" class=\"radio-lbl\">File<\/label><br> ";
    strVar += "         <\/div>";
    strVar += "         <textarea id=\"txt-msg\" class=\"mt-20\" autofocus placeholder=\"Enter your message here\"><\/textarea>";
    strVar += "         <span id=\"file-box\" class=\"file-box\">";
    strVar += "            <h4 style=\"margin-top: 5px\" class=\"slct-file\">Select your file<\/h4>";
    strVar += "            <input type=\"file\" id=\"media-file\" name=\"media-file\">";
    strVar += "            <textarea id=\"caption\" class=\"caption\" autofocus placeholder=\"Write caption here\"><\/textarea>";
    strVar += "        <\/span>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"upper-box\">";
    strVar += "          <span class=\"heading\">";
    strVar += "              <h4>Please enter your number<\/h4>";
    /*strVar += "                <select name=\"cars\" id=\"seprator\">";
    strVar += "                <option value=\"comma\">Comma</option>";
    strVar += "                <option value=\"space\">Space</option>";
    strVar += "                <option value=\"seprator\" selected disabled>Seprator</option>";
    strVar += "                </select>";*/
    strVar += "          <\/span>";
    strVar += "         <textarea id=\"num-area\" type=\"number\" class=\"numbers-txtarea\" autofocus placeholder=\"Ex: +91234567890 \n    +91098765432 \n    +91000000000\"><\/textarea>";
    strVar += "         <hr>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"lower-box\">";
    strVar += "        <span class=\"lower-box-span\">";
    strVar += "            <h4 style=\"margin-top: 5px\">OR Upload an CSV file<\/h4>";
    strVar += "            <input type=\"file\" id=\"myfile\" class=\"myfile\" accept=\".csv\" name=\"myfile\">";
    strVar += "            <button id=\"send-btn\" class=\"send-btn\">Send<\/button>";
    strVar += "            <div id=\"spinner\" class=\"spinner\"></div>";
    strVar += "            <h4 class=\"no-msg-error\" id=\"no-msg-error\"></h4>";
    strVar += "        <\/span>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"lowest\"><\/div>";
    strVar += "    <\/div>";

    const loadingDiv = document.createElement("div");
    loadingDiv.innerHTML = strVar;
    loadingDiv.setAttribute("id", "loadingDiv");
    document.body.appendChild(loadingDiv);

    closeBtn = document.querySelector(".cancle-btn");
    sendBtn = document.getElementById("send-btn");
    closeBtn.addEventListener("click", cancelClose, false);
    document.getElementById("file").addEventListener("click", onFileMsgSelect, false);
    document.getElementById("text").addEventListener("click", onTextMsgSelect, false);
    sendBtn.addEventListener("click", sendMessage1, false);
    document.getElementById("myfile").addEventListener("change", loadContactCsv, false);
}

function cancelClose() {
    const loadingDiv = document.getElementById("loadingDiv");
    loadingDiv.remove();
    sendMsg = false;
}

function onTextMsgSelect() {
    document.getElementById("file-box").style.display = "none";
    document.getElementById("txt-msg").style.display = "inline-block";
}

function onFileMsgSelect() {
    document.getElementById("txt-msg").style.display = "none";
    document.getElementById("file-box").style.display = "flex";
}

function sendMessage1() {
    sendMessage();
}

var count = 0;
var sendMsg = false;
function grabNumber() {
    if (contactsArray.length - 1 >= count && sendMsg) {
        setTimeout(() => {
            let num = contactsArray[count].replace(/^\D+/g, '');
            if (msgType == "text") {
                smP(num, msg);
            } else {
                const bulkWhatsappLink1 = document.getElementById("blkwhattsapplink");
                if (bulkWhatsappLink1) {
                    bulkWhatsappLink1.setAttribute("href", `https://wa.me/${num}?text=`)
                } else {
                    var spanHtml = `<a href="https://wa.me/${num}?text=" id="blkwhattsapplink"></a>`;
                    var spans = document.querySelector("#app .app-wrapper-web span");
                    spans.innerHTML = spanHtml;
                }
                document.getElementById("blkwhattsapplink").click();
                setTimeout(() => {
                    window.sendImage(num + "@c.us", mediaFile, caption);
                }, 1000);
            }
            ++count;
            grabNumber();
        }, 1000)
    } else {
        count = 0;
        sendMsg = true;
        sendBtn.style.display = "block";
        spinner.style.display = "none";
    }
}

var contactsArray;
const sendMessage = () => {
    //check whether it is a text message or file message
    //if text message than our code will be as follows
    //var message = document.getElementById("txt-msg").value;
    var numbersInTextArea = (document.getElementById("num-area").value).trim();
    msgType = document.querySelector('input[name="msg-type"]:checked').value;
    //var seprator = document.getElementById("seprator").value;
    //contactsArray = seprator == "space" ? numbersInTextArea.split(" ") : (numbersInTextArea.match(/\n/g) || []).length > 0 ? numbersInTextArea.split("\n") : numbersInTextArea.split(",");
    contactsArray = numbersInTextArea.trim().split("\n");
    sendBtn.style.display = "none";
    spinner = document.getElementById('spinner');
    spinner.style.display = "block";
    sendMsg = true;
    if (msgType == "text") {
        msg = encodeURIComponent(document.getElementById("txt-msg").value);
    } else {
        mediaFile = document.getElementById("media-file").files[0]
        caption = document.getElementById("caption").value;
    }
    if (msgType == "text" && msg !== "" || msgType !== "text" && mediaFile !== undefined) {
        if (numbersInTextArea !== "") {
            document.getElementById("no-msg-error").innerText = ``;
            grabNumber();
        } else {
            document.getElementById("no-msg-error").innerText = "No recipient is mentioned. Enter numbers or Select CSV file";
            sendBtn.style.display = "block";
            spinner.style.display = "none";
        }
    } else {
        document.getElementById("no-msg-error").innerText = "Message box is empty, Write something or a select file to send.";
        sendBtn.style.display = "block";
        spinner.style.display = "none";
    }
}

async function smP(nm, sm) {
    return new Promise(async (resolve, reject) => {
        waLinkCrt(nm, sm).then(() => {
            setTimeout(async function () {
                let result = false;
                result = await frd_clk();
                console.log(result);
                resolve(result)
            }, 600)
        })
    })
}

async function frd_clk() {
    let result = false;
    await sbs();
    if (document.querySelector("[data-icon=send]")) {
        document.querySelector("[data-icon=send]").click();
        result = true
    }
    return result
}

async function sbs() {
    if (!document.querySelector("[data-icon=send]")) {
        setTimeout(async function () {
            await sbs()
        }, 500)
    }
}

async function waLinkCrt(n, et) {

    return new Promise((resolve, reject) => {
        const bulkWhatsappLink = document.getElementById("blkwhattsapplink");
        if (bulkWhatsappLink) {
            bulkWhatsappLink.setAttribute("href", `https://wa.me/${n}?text=${et}`)
        } else {
            var spanHtml = `<a href="https://wa.me/${n}?text=${et}" id= "blkwhattsapplink"></a>`;
            var spans = document.querySelector("#app .app-wrapper-web span");
            spans.innerHTML = spanHtml;
        }
        setTimeout(() => {
            document.getElementById("blkwhattsapplink").click();
            resolve()
        }, 1000)
    })
}

var currentTextAreaId;
function loadContactCsv(e) {
    currentTextAreaId = e['srcElement'].id;
    var files = document.getElementById(currentTextAreaId).files;
    // Check for the various File API support, this for csv fole
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    //reader.onerror = errorHandler;
}

function loadHandler(event) {
    var csv = event.target.result;
    //processData(csv);
    csv.replace(";", ",");
    var id = currentTextAreaId == 'import-grp-member-input' ? "import-grp-member-textbox" : "num-area";
    if (currentTextAreaId == 'import-grp-member-input') {
        checkNoOfGroupMmbrBeforeImport(id, csv);
    } else {
        document.getElementById(id).value = csv;
    }
}

function getGroupId() {
    var grpId
    try {
        grpId = document.getElementsByClassName("GDTQm message-in focusable-list-item")[0].getAttribute("data-id").split("_")[1];
    } catch { }
    if (!grpId) {
        try {
            grpId = document.getElementsByClassName("GDTQm message-out focusable-list-item")[0].getAttribute("data-id").split("_")[1];
        } catch { }
        if (!grpId) {
            try {
                grpId = document.getElementsByClassName("GDTQm _397qe focusable-list-item")[1].getAttribute("data-id").split("_")[1];
            } catch { }
            if (!grpId) {
                var classArrays = document.getElementsByClassName("GDTQm _397qe focusable-list-item");
                if (!classArrays) {
                    classArrays = [];
                }
                Array.from(classArrays).forEach((item) => {
                    var id = item.getAttribute('data-id');
                    if (!idFound && id) {
                        idFound = true;
                        grpId = id;
                    }
                });
            }
        }
    }
    if (!grpId) {
        getGroupId();
    }
    return grpId;
}

let allowedNumbers = [];
let groupId;
function checkNoOfGroupMmbrBeforeImport(id, csv) {
    var numbersToImport = csv.trim().split("\n");
    groupId = getGroupId();
    var contactsNumbersInGroup = [];
    WAPI._getGroupParticipants(groupId).then((res) => {
        res['_models'].forEach(item => {
            contactsNumbersInGroup.push(item['__x_id']['user']);
        })
        var noOfMembrsInGroup = contactsNumbersInGroup.length;
        var contactsInCsv = csv.trim().split("\n");
        var noOfMembersInCsv = contactsInCsv.length;
        var noOfMembrCanBeAdded = 256 - noOfMembrsInGroup;
        var importDiv = document.getElementById("import-grp-member-box");
        var limitExceedMsg = document.getElementById("limitExceedMsg");
        if (noOfMembersInCsv > noOfMembrCanBeAdded) {
            for (var i = 0; i < noOfMembrCanBeAdded; i++) {
                allowedNumbers.push(contactsInCsv[i]);
            }
            csv = allowedNumbers.join("\n").toString();
            importDiv.classList.add("h-400");
            limitExceedMsg.innerText = `Only ${noOfMembrCanBeAdded} more members can be added, So we have selected top ${noOfMembrCanBeAdded} numbers from CSV.`;
        } else {
            allowedNumbers = csv.trim().split("\n");
            importDiv.classList.remove("h-400");
            limitExceedMsg.innerText = "";
        }
        document.getElementById(id).value = csv;
    });
}

function importGrpMembers() {
    importBtn.style.display = "none";
    spinner = document.getElementById('spinner');
    spinner.style.display = "block";
    importMembers();
}

var memberCount = 0;
var numberNotAddedInGroup = [];
function importMembers() {
    if (allowedNumbers.length - 1 >= memberCount && canImportMember) {
        var bulkWhatsappLink2 = document.getElementById("blkwhattsapplink");
        if (bulkWhatsappLink2) {
            bulkWhatsappLink2.setAttribute("href", `https://wa.me/${allowedNumbers[memberCount].replace(/^\D+/g, '')}?text=`)
        } else {
            var spanHtml = `<a href="https://wa.me/${allowedNumbers[memberCount].replace(/^\D+/g, '')}?text=" id="blkwhattsapplink"></a>`;
            var spans = document.querySelector("#app .app-wrapper-web span");
            spans.innerHTML = spanHtml;
        }
        document.getElementById("blkwhattsapplink").click();
        setTimeout(() => {
            setTimeout(() => {
                window.WAPI.addParticipant(groupId, allowedNumbers[memberCount] + "@c.us");
            }, 1000);
            ++memberCount;
            importMembers();
        }, 2000);
    } else {
        memberCount = 0;
        closeImportMemberPopup();
    }
}

const timer = setInterval(general, 1e3);

function general() {
    (getBySelector("div.app") || getBySelector("div.two") || getBySelector("div.three") || getBySelector("div.pane-side")) && (loadModule(), clearInterval(timer))
}

function loadModule() {
    if (!window.Store || !window.Store.Msg) {
        (function () {
            function getStore(modules) {
                let foundCount = 0;
                let neededObjects = [
                    { id: "Store", conditions: (module) => (module.default && module.default.Chat && module.default.Msg) ? module.default : null },
                    { id: "MediaCollection", conditions: (module) => (module.default && module.default.prototype && (module.default.prototype.processFiles !== undefined || module.default.prototype.processAttachments !== undefined)) ? module.default : null },
                    { id: "MediaProcess", conditions: (module) => (module.BLOB) ? module : null },
                    { id: "Archive", conditions: (module) => (module.setArchive) ? module : null },
                    { id: "Block", conditions: (module) => (module.blockContact && module.unblockContact) ? module : null },
                    { id: "ChatUtil", conditions: (module) => (module.sendClear) ? module : null },
                    { id: "GroupInvite", conditions: (module) => (module.queryGroupInviteCode) ? module : null },
                    { id: "Wap", conditions: (module) => (module.createGroup) ? module : null },
                    { id: "ServiceWorker", conditions: (module) => (module.default && module.default.killServiceWorker) ? module : null },
                    { id: "State", conditions: (module) => (module.STATE && module.STREAM) ? module : null },
                    { id: "_Presence", conditions: (module) => (module.setPresenceAvailable && module.setPresenceUnavailable) ? module : null },
                    { id: "WapDelete", conditions: (module) => (module.sendConversationDelete && module.sendConversationDelete.length == 2) ? module : null },
                    { id: "Conn", conditions: (module) => (module.default && module.default.ref && module.default.refTTL) ? module.default : null },
                    { id: "WapQuery", conditions: (module) => (module.default && module.default.queryExist) ? module.default : null },
                    { id: "CryptoLib", conditions: (module) => (module.decryptE2EMedia) ? module : null },
                    { id: "OpenChat", conditions: (module) => (module.default && module.default.prototype && module.default.prototype.openChat) ? module.default : null },
                    { id: "UserConstructor", conditions: (module) => (module.default && module.default.prototype && module.default.prototype.isServer && module.default.prototype.isUser) ? module.default : null },
                    { id: "SendTextMsgToChat", conditions: (module) => (module.sendTextMsgToChat) ? module.sendTextMsgToChat : null },
                    { id: "ReadSeen", conditions: (module) => (module.sendSeen) ? module : null },
                    { id: "sendDelete", conditions: (module) => (module.sendDelete) ? module.sendDelete : null },
                    { id: "addAndSendMsgToChat", conditions: (module) => (module.addAndSendMsgToChat) ? module.addAndSendMsgToChat : null },
                    { id: "sendMsgToChat", conditions: (module) => (module.sendMsgToChat) ? module.sendMsgToChat : null },
                    { id: "Catalog", conditions: (module) => (module.Catalog) ? module.Catalog : null },
                    { id: "bp", conditions: (module) => (module.default && module.default.toString && module.default.toString().includes('bp_unknown_version')) ? module.default : null },
                    { id: "MsgKey", conditions: (module) => (module.default && module.default.toString && module.default.toString().includes('MsgKey error: obj is null/undefined')) ? module.default : null },
                    { id: "Parser", conditions: (module) => (module.convertToTextWithoutSpecialEmojis) ? module.default : null },
                    { id: "Builders", conditions: (module) => (module.TemplateMessage && module.HydratedFourRowTemplate) ? module : null },
                    { id: "Me", conditions: (module) => (module.PLATFORMS && module.Conn) ? module.default : null },
                    { id: "CallUtils", conditions: (module) => (module.sendCallEnd && module.parseCall) ? module : null },
                    { id: "Identity", conditions: (module) => (module.queryIdentity && module.updateIdentity) ? module : null },
                    { id: "MyStatus", conditions: (module) => (module.getStatus && module.setMyStatus) ? module : null },
                    { id: "ChatStates", conditions: (module) => (module.sendChatStatePaused && module.sendChatStateRecording && module.sendChatStateComposing) ? module : null },
                    { id: "GroupActions", conditions: (module) => (module.sendExitGroup && module.localExitGroup) ? module : null },
                    { id: "Features", conditions: (module) => (module.FEATURE_CHANGE_EVENT && module.features) ? module : null },
                    { id: "MessageUtils", conditions: (module) => (module.storeMessages && module.appendMessage) ? module : null },
                    { id: "WebMessageInfo", conditions: (module) => (module.WebMessageInfo && module.WebFeatures) ? module.WebMessageInfo : null },
                    { id: "createMessageKey", conditions: (module) => (module.createMessageKey && module.createDeviceSentMessage) ? module.createMessageKey : null },
                    { id: "Participants", conditions: (module) => (module.addParticipants && module.removeParticipants && module.promoteParticipants && module.demoteParticipants) ? module : null },
                    { id: "WidFactory", conditions: (module) => (module.isWidlike && module.createWid && module.createWidFromWidLike) ? module : null },
                    { id: "Base", conditions: (module) => (module.setSubProtocol && module.binSend && module.actionNode) ? module : null },
                    { id: "Versions", conditions: (module) => (module.loadProtoVersions && module.default["15"] && module.default["16"] && module.default["17"]) ? module : null },
                    { id: "Sticker", conditions: (module) => (module.default && module.default.Sticker) ? module.default.Sticker : null },
                    { id: "MediaUpload", conditions: (module) => (module.default && module.default.mediaUpload) ? module.default : null },
                    { id: "UploadUtils", conditions: (module) => (module.default && module.default.encryptAndUpload) ? module.default : null }
                ];
                for (let idx in modules) {
                    if ((typeof modules[idx] === "object") && (modules[idx] !== null)) {
                        neededObjects.forEach((needObj) => {
                            if (!needObj.conditions || needObj.foundedModule)
                                return;
                            let neededModule = needObj.conditions(modules[idx]);
                            if (neededModule !== null) {
                                foundCount++;
                                needObj.foundedModule = neededModule;
                            }
                        });

                        if (foundCount == neededObjects.length) {
                            break;
                        }
                    }
                }
                let neededStore = neededObjects.find((needObj) => needObj.id === "Store");
                window.Store = neededStore.foundedModule ? neededStore.foundedModule : {};
                neededObjects.splice(neededObjects.indexOf(neededStore), 1);
                neededObjects.forEach((needObj) => {
                    if (needObj.foundedModule) {
                        window.Store[needObj.id] = needObj.foundedModule;
                    }
                });
                window.Store.Chat.modelClass.prototype.sendMessage = function (e) {
                    window.Store.SendTextMsgToChat(this, ...arguments);
                }
                return window.Store;
            }
            const parasite = `parasite${Date.now()}`
            if (typeof webpackJsonp === 'function') webpackJsonp([], {
                [parasite]: (x, y, z) => getStore(z)
            }, [parasite]);
            else webpackChunkbuild.push([
                [parasite], {},
                function (o, e, t) {
                    let modules = [];
                    for (let idx in o.m) { modules.push(o(idx)); }
                    getStore(modules);
                }
            ]);
        })();
    }

}

function getBySelector(e) {
    return document.querySelector(e)
}

window.sendImage = ((e, t, n, l) => window.Store.Chat.find(e).then(e => {
    let i = new window.Store.MediaCollection(e);
    i.processAttachments([{
        file: t
    }, 1], e, 1).then(() => {
        i.models[0].sendToChat(e, {
            caption: n
        }), void 0 !== l && l(!0)
    })
}))

//----------------------------

window.WAPI = {};
window._WAPI = {};

window.WAPI._serializeRawObj = (obj) => {
    if (obj && obj.toJSON) {
        return obj.toJSON();
    }
    return {}
};

window.WAPI._serializeContactObj = (obj) => {
    if (obj == undefined) {
        return null;
    }
    return Object.assign(window.WAPI._serializeRawObj(obj), {
        id: obj.id._serialized,
        formattedName: obj.formattedName,
        isHighLevelVerified: obj.isHighLevelVerified,
        isMe: obj.isMe,
        isMyContact: obj.isMyContact,
        isPSA: obj.isPSA,
        isUser: obj.isUser,
        isVerified: obj.isVerified,
        isWAContact: obj.isWAContact,
        profilePicThumbObj: obj.profilePicThumb ? WAPI._serializeProfilePicThumb(obj.profilePicThumb) : {},
        statusMute: obj.statusMute,
        msgs: null
    });
};

window.WAPI.createGroup = async function (name, contactsId) {
    if (!Array.isArray(contactsId)) {
        contactsId = [contactsId];
    }
    return await window.Store.WapQuery.createGroup(name, contactsId);
};

window.WAPI.getMyContacts = function () {
    return window.Store.Contact.filter((contact) => contact.isMyContact === true).map((contact) => WAPI._serializeContactObj(contact));
};

window.WAPI.getGroupMetadata = async function (id) {
    return window.Store.GroupMetadata.find(id);
};

window.WAPI._getGroupParticipants = async function (id) {
    return (await WAPI.getGroupMetadata(id)).participants;
};

window.WAPI.getMe = function () {
    return {
        ...WAPI.quickClean({
            ...Store.Contact.get(Store.Me.wid).attributes,
            ...Store.Me.attributes
        }),
        me: Store.Me.me
    };
}

window.WAPI.addParticipant = async function (idGroup, idParticipant) {
    const chat = Store.Chat.get(idGroup);
    const add = Store.Contact.get(idParticipant);
    await window.Store.Participants.addParticipants(chat, [add]);
    return true;
}

window.WAPI.quickClean = function (ob) {
    var r = JSON.parse(JSON.stringify(ob));
    if (r.mediaData && Object.keys(r.mediaData).length == 0) delete r.mediaData;
    if (r.chat && Object.keys(r.chat).length == 0) delete r.chat;
    Object.keys(r).filter(k => r[k] == "" || r[k] == [] || r[k] == {} || r[k] == null).forEach(k => delete r[k]);
    Object.keys(r).filter(k => r[k] ? r[k]._serialized : false).forEach(k => r[k] = r[k]._serialized);
    Object.keys(r).filter(k => r[k] ? r[k].id : false).forEach(k => r[k] = r[k].id);
    return r;
};

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     alert("Script1 says: " + message.message);
// });

var allSavedContacts;
var contacts = [];
function exportSavedContactsFun(e) {
    allSavedContacts = window.WAPI.getMyContacts();
    allSavedContacts.forEach(detail => {
        contacts.push([detail['name'], detail['id'].replace('@c.us', '')]);
    });
    exportAllSavedContacts(contacts, e);
}

function exportAllSavedContacts(rows, e) {
    let csvContent = "data:text/csv;charset=utf-8,"
        + rows.map(e => e.join(",")).join("\n");

    var encodedUri = encodeURI(csvContent);
    var link = document.querySelector("#exportContacts");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${window.WAPI.getMe()['phone']['device_manufacturer']}-contacts.csv`);
}


function openBulkGroupAddPopup() {
    var createGroupTemp = "";
    createGroupTemp += "        <button id=\"create-grp-cancle-btn\" class=\"create-grp-cancle-btn\">x<\/button>";
    createGroupTemp += "        <textarea class=\"mt-15 grp-name\" placeholder=\"Enter group name\"><\/textarea>";
    createGroupTemp += "        <h4 class=\"mt-25\">Enter contacts saved in your device.<\/h4>";
    createGroupTemp += "        <textarea class=\"mt-15\" name=\"contactsSavedInPhone\" id=\"contactsSavedInPhone\"><\/textarea>";
    createGroupTemp += "        <input class=\"mt-15\" type=\"file\" name=\"savedContactsCsv\" id=\"savedContactsCsv\">";
    createGroupTemp += "        <button class=\"mt-15 create-grp-btn\">Create<\/button>";

    const createGroupPopup = document.createElement("div");
    createGroupPopup.innerHTML = createGroupTemp;
    createGroupPopup.classList.add('createGroupPopup');
    createGroupPopup.setAttribute("id", "createGroupPopup");
    document.body.appendChild(createGroupPopup);
    var closeBtn = document.querySelector("#create-grp-cancle-btn");
    closeBtn.addEventListener("click", closeGroupCreatePopup, false);
    document.getElementById("savedContactsCsv").addEventListener("change", loadContactCsv, false);
}

function closeGroupCreatePopup() {
    var cancleBtnn = document.getElementById("createGroupPopup");
    cancleBtnn.remove();
}
