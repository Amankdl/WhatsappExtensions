console.log("Script running successfully");
const isHeaderFound = setInterval(() => {
    var sidePaneHeader = document.getElementsByClassName("_1ljzS pnYZD");
    console.log("sidePaneHeader", sidePaneHeader);
    if (sidePaneHeader.length) {
        clearInterval(isHeaderFound);
        console.log("Function called");
        loadButtons();
    }
}, 1e3);


function loadButtons() {
    var buttonsGroup = document.getElementsByClassName("_1ljzS pnYZD")[0].children[0];
    console.log("Function called 01");
    var exportSavedContacts = document.createElement("div");
    exportSavedContacts.classList = "_2n-zq";
    exportSavedContacts.id = "exportSavedContacts";
    var exportSavedContactsSvg = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX- m-10" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><a id="exportContacts"><span class="downloadSavedContactsSpan"><svg xmlns="http://www.w3.org/2000/svg" class="setting-svg" viewBox="0 0 18 18" width="24" height="24"><path fill="currentColor" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path></svg></span></a></div><span></span>`;
    exportSavedContacts.innerHTML = exportSavedContactsSvg;
    buttonsGroup.insertBefore(exportSavedContacts, buttonsGroup.children[0]);
    document.querySelector('#exportContacts').addEventListener("click", exportSavedContactsFun, false);

    var bulkSend = document.createElement("div");
    bulkSend.classList = "_2n-zq";
    bulkSend.id = "upload-all-contacts";
    bulkSend.addEventListener("click", openBulkSenderPopup, false);
    var bulkSendSvg = `<div class="bulk-send-svg" aria-disabled="false" role="button" tabindex="0" class="_1XaX-" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="currentColor" d="M14.9,6.707c-0.804-2.497-3.649-4.351-7.035-4.351c-4.008,0-7.27,2.594-7.27,5.782
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

    /*var createGroup = document.createElement("div");
    createGroup.classList = "_2n-zq";
    createGroup.id = "createGroup";
    var createGroupSvg = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX- m-10" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><span><svg xmlns="http://www.w3.org/2000/svg" class="setting-svg" viewBox="0 0 18 18" width="25" height="25"><path fill="currentColor" d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path></svg></span></a></div><span></span>`;
    createGroup.innerHTML = createGroupSvg;
    createGroup.addEventListener("click", openBulkGroupAddPopup, false);
    buttonsGroup.insertBefore(createGroup, buttonsGroup.children[0]);*/

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
        if (selectInfoInDrop) {
            selectInfoInDrop.addEventListener("click", createGroupButtons, false);
        }
        createGroupButtons();
    }, 1000);
}

function createGroupButtons() {
    setTimeout(() => {
        var groupDetailHeader = document.querySelector("._1XrsE");
        if (groupDetailHeader && groupDetailHeader.innerText.includes("Group")) {
            // document.getElementsByClassName("_2Z4DV _25uA8")[1].
            // parentNode.insertBefore(document.createElement("a"), 
            // document.getElementsByClassName("_2Z4DV _25uA8")[1]);
            var findInviteToGrpDiv = document.getElementsByClassName("_2Z4DV _25uA8");
            if (findInviteToGrpDiv) {
                console.log(findInviteToGrpDiv);
                // Create duplicate group button
                var createDuplicateGroup = `<div class="_13Kad"><div class="_2GAT7"><div class="_1_JE6">
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
                var exportButtonDiv = `<a class="d-flex" id="exportGroupContacts"><div class="_13Kad"><div class="_2GAT7"><div class="_1_JE6">
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

                //Import button
                var importGrpButtonDiv = `<div class="_13Kad"><div class="_2GAT7"><div class="_1_JE6">
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
    }, 1000);
}

var idFound = false;


function duplicateGroup() {
    openGroupConfirmPopup();
}

function openGroupConfirmPopup() {
    var createGroupConfirm = `<div class="mt-20"><p>Do you really want to create duplicate group ?</p></div>
    <div class="mt-10"><input class="grp-name-input" placeholder="Enter name for duplicate group" type="text" name="grpName" id="grpName"></div>
    <div class="grp-save-cancle-btn"><button id="confirm-btn" class="confirm-btn">Confirm</button><button id="create-grp-cancle-btn">Close</button></div>`;
    const createGroupConfirmDiv = document.createElement("div");
    document.getElementById("app").classList.add("blur");
    createGroupConfirmDiv.innerHTML = createGroupConfirm;
    createGroupConfirmDiv.classList.add('group-confirm-outer');
    createGroupConfirmDiv.setAttribute("id", "group-confirm-outer");
    document.body.appendChild(createGroupConfirmDiv);
    var closeBtn = document.querySelector("#create-grp-cancle-btn");
    closeBtn.addEventListener("click", closeGroupConfirmPopup, false);
    var confirmBtn = document.querySelector("#confirm-btn");
    confirmBtn.addEventListener("click", clickedOnConfirmBtn, false);
}

function importGroupMembers() {
    var grpImport = "";
    grpImport += "<textarea class=\"mt-15\" name=\"import-grp-member-textbox\" id=\"import-grp-member-textbox\"><\/textarea>";
    grpImport += "        <p class=\"m-ten\"><b>OR<\/b> select CSV file<\/p>";
    grpImport += "        <input class=\"m-ten\" type=\"file\" name=\"import-grp-member-input\" id=\"import-grp-member-input\">";
    grpImport += "        <div class=\"m-ten btn-grp-div\">";
    grpImport += "            <button class=\"mt-15 create-grp-btn mr-5\" id=\"import-membr-btn\">Import<\/button>";
    grpImport += "            <button id=\"closeImportMemberPopup\" class=\"mt-15 create-grp-btn\">Cancle<\/button>";
    grpImport += "        <\/div>";
    grpImport += "<p id=\"limitExceedMsg\"></p>";

    const importGrpPopup = document.createElement("div");
    importGrpPopup.innerHTML = grpImport;
    importGrpPopup.setAttribute("id", "import-grp-member-box");
    importGrpPopup.classList.add("import-grp-member-box");
    document.body.appendChild(importGrpPopup);
    document.getElementById("app").classList.add("blur");
    document.getElementById("import-grp-member-input").addEventListener("change", loadContactCsv, false);
    document.getElementById("closeImportMemberPopup").addEventListener("click", closeImportMemberPopup, false);
    document.getElementById('import-membr-btn').addEventListener('click', importMembers, false);
}

function closeImportMemberPopup() {
    var cancleBtnn = document.getElementById("import-grp-member-box");
    document.getElementById("app").classList.remove("blur");
    cancleBtnn.remove();
}

function exportGroupMembers() {
    var contactsNumbersInGroup = [];
    var groupId;
    try {
        groupId = document.getElementsByClassName("GDTQm message-in focusable-list-item")[0].getAttribute("data-id").split("_")[1];
    } catch { }
    if (!groupId) {
        try {
            groupId = document.getElementsByClassName("GDTQm message-out focusable-list-item")[0].getAttribute("data-id").split("_")[1];
        } catch { }
        if (!groupId) {
            try {
                groupId = document.getElementsByClassName("GDTQm _397qe focusable-list-item")[1].getAttribute("data-id").split("_")[1];
            } catch { }
            if (!groupId) {
                var classArrays = document.getElementsByClassName("GDTQm _397qe focusable-list-item");
                if (!classArrays) {
                    classArrays = [];
                }
                Array.from(classArrays).forEach((item) => {
                    var id = item.getAttribute('data-id');
                    if (!idFound && id) {
                        idFound = true;
                        groupId = id;
                    }
                });
            }
        }
    }
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
    var groupId;
    try {
        groupId = document.getElementsByClassName("GDTQm message-in focusable-list-item")[0].getAttribute("data-id").split("_")[1];
    } catch { }
    if (!groupId) {
        try {
            groupId = document.getElementsByClassName("GDTQm message-out focusable-list-item")[0].getAttribute("data-id").split("_")[1];
        } catch { }
        if (!groupId) {
            try {
                groupId = document.getElementsByClassName("GDTQm _397qe focusable-list-item")[1].getAttribute("data-id").split("_")[1];
            } catch { }
            if (!groupId) {
                var classArrays = document.getElementsByClassName("GDTQm _397qe focusable-list-item");
                if (!classArrays) {
                    classArrays = [];
                }
                Array.from(classArrays).forEach((item) => {
                    var id = item.getAttribute('data-id');
                    if (!idFound && id) {
                        idFound = true;
                        groupId = id;
                    }
                });
            }
        }
    }
    WAPI._getGroupParticipants(groupId).then((res) => {
        res['_models'].forEach(item => {
            contactsInGroup.push(item['__x_id']['_serialized']);
        })
        var newName = document.getElementById("grpName").value;
        var groupName = newName == "" ? document.getElementsByClassName("_2KQyF")[0].firstElementChild.innerText : newName;
        WAPI.createGroup(groupName, contactsInGroup).then(res => {
            document.getElementById("app").classList.remove("blur")
            closeGroupConfirmPopup();
        });
    });
}

function closeGroupConfirmPopup() {
    var cancleBtnn = document.getElementById("group-confirm-outer");
    document.getElementById("app").classList.remove("blur");
    cancleBtnn.remove();
}

/*function displayButton() {

    try {

        const buttonExist = document.getElementById("download-all-contacts");

        if (!buttonExist) {

            setTimeout(() => {
                var buttonsGroup = document.getElementsByClassName("_1ljzS pnYZD")[1];
                var div = document.createElement("div");
                div.classList = "_2n-zq";
                div.id = "download-all-contacts";
                div.addEventListener("click", downloadAllContactsOfGroup, false)
                var button = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX-" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path></svg></span></div><span></span>`;
                div.innerHTML = button;
                buttonsGroup.insertBefore(div, buttonsGroup.children[0]);
            }, 700)
        }

    } catch (err) {
        //console.log("contact not found");
    }
}*/

/*function downloadAllContactsOfGroup() {
    var tableData = "";
    var tableToExcel;
    var finalNumberArray = document.getElementsByClassName(" fKfSX")[0].innerText.split(",");

    function createExcelTemplate() {
        finalNumberArray.forEach((number) => {
            tableData += "<tr><td>" + number + "</tr></td>"
        });

        tableToExcel = (function () {
            var uri = 'data:application/vnd.ms-excel;base64,',
                template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>' + tableData + '</table></body></html>',
                base64 = function (s) {
                    return window.btoa(unescape(encodeURIComponent(s)))
                },
                format = function (s, c) {
                    return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; })
                }
            return function (table, name) {
                var ctx = { worksheet: 'Worksheet', table: "Contacts" }
                window.location.href = uri + base64(format(template, ctx))
            }
        })()
        tableToExcel();
    }

    createExcelTemplate();
}*/


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
    strVar += "                <select name=\"cars\" id=\"seprator\">";
    strVar += "                <option value=\"comma\">Comma</option>";
    strVar += "                <option value=\"space\">Space</option>";
    strVar += "                <option value=\"seprator\" selected disabled>Seprator</option>";
    strVar += "                </select>";
    strVar += "          <\/span>";
    strVar += "         <textarea id=\"num-area\" type=\"number\" class=\"numbers-txtarea\" autofocus placeholder=\"Ex: +918696181616 +917023535423\"><\/textarea>";
    strVar += "         <hr>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"lower-box\">";
    strVar += "        <span class=\"lower-box-span\">";
    strVar += "            <h4 style=\"margin-top: 5px\">OR Upload an excel sheet<\/h4>";
    strVar += "            <input type=\"file\" id=\"myfile\" class=\"myfile\" accept=\".csv\" name=\"myfile\">";
    strVar += "            <button id=\"send-btn\" class=\"send-btn\">Send<\/button>";
    strVar += "            <div id=\"spinner\" class=\"spinner\"></div>";
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

/*function loadjs() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.jsdelivr.net/gh/amankdl/mycdn/try1.js";
    script.onload = function(){

    };
    document.body.appendChild(script);
 }*/

function cancelClose() {
    const loadingDiv = document.getElementById("loadingDiv");
    loadingDiv.remove();
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
function grabNumber() {
    if (contactsArray.length - 1 >= count) {
        setTimeout(() => {
            console.log(contactsArray[count], " => ", count);
            let num = contactsArray[count].replace(/^\D+/g, '');
            if (msgType == "text") {
                smP(num, msg);
            } else {
                console.log(num);
                const bulkWhatsappLink1 = document.getElementById("blkwhattsapplink");
                if (bulkWhatsappLink1) {
                    bulkWhatsappLink1.setAttribute("href", `https://wa.me/${num}?text=`)
                } else {
                    var spanHtml = `<a href="https://wa.me/${num}?text= id= "blkwhattsapplink"></a>`;
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
    var seprator = document.getElementById("seprator").value;
    contactsArray = seprator == "space" ? numbersInTextArea.split(" ") : (numbersInTextArea.match(/\n/g) || []).length > 0 ? numbersInTextArea.split("\n") : numbersInTextArea.split(",");
    console.log(contactsArray);
    sendBtn.style.display = "none";
    spinner = document.getElementById('spinner');
    spinner.style.display = "block";
    if (msgType == "text") {
        msg = encodeURIComponent(document.getElementById("txt-msg").value);
    } else {
        mediaFile = document.getElementById("media-file").files[0]
        caption = document.getElementById("caption").value;
    }
    grabNumber();
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

let allowedNumbers = [];
let groupId;
function checkNoOfGroupMmbrBeforeImport(id, csv) {
    var numbersToImport = csv.trim().split("\n");
    try {
        groupId = document.getElementsByClassName("GDTQm message-in focusable-list-item")[0].getAttribute("data-id").split("_")[1];
    } catch { }
    if (!groupId) {
        try {
            groupId = document.getElementsByClassName("GDTQm message-out focusable-list-item")[0].getAttribute("data-id").split("_")[1];
        } catch { }
        if (!groupId) {
            try {
                groupId = document.getElementsByClassName("GDTQm _397qe focusable-list-item")[1].getAttribute("data-id").split("_")[1];
            } catch { }
            if (!groupId) {
                var classArrays = document.getElementsByClassName("GDTQm _397qe focusable-list-item");
                if (!classArrays) {
                    classArrays = [];
                }
                Array.from(classArrays).forEach((item) => {
                    var id = item.getAttribute('data-id');
                    if (!idFound && id) {
                        idFound = true;
                        groupId = id;
                    }
                });
            }
        }
    }

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

var memberCount  = 0;
function importMembers(){
    console.log("import call");
    if(allowedNumbers.length - 1 >= memberCount){
        console.log("import call");
        var bulkWhatsappLink2 = document.getElementById("blkwhattsapplink");
        if (bulkWhatsappLink2) {
            bulkWhatsappLink2.setAttribute("href", `https://wa.me/${allowedNumbers[memberCount]}?text=`)
        } else {
            var spanHtml = `<a href="https://wa.me/${allowedNumbers[memberCount]}?text=" id="blkwhattsapplink"></a>`;
            var spans = document.querySelector("#app .app-wrapper-web span");
            spans.innerHTML = spanHtml;
        }
        document.getElementById("blkwhattsapplink").click();
        setTimeout(()=>{
            setTimeout(()=>{window.WAPI.addParticipant(groupId, allowedNumbers[memberCount]+"@c.us");},1000);
            ++memberCount;
            importMembers();
        },2000);
    }else{
        memberCount = 0;
        /*allowedNumbers = [];
        groupId = undefined;*/
    }
}

const timer = setInterval(general, 1e3);

function general() {
    console.log("Script running");
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

/**
 * Serializes a chat object
 *
 * @param rawChat Chat object
 * @returns {{}}
 */

window.WAPI._serializeChatObj = (obj) => {
    if (obj == undefined) {
        return null;
    }
    return Object.assign(window.WAPI._serializeRawObj(obj), {
        id: obj.id._serialized,
        kind: obj.kind,
        isGroup: obj.isGroup,
        formattedTitle: obj.formattedTitle,
        contact: obj['contact'] ? window.WAPI._serializeContactObj(obj['contact']) : null,
        groupMetadata: obj["groupMetadata"] ? window.WAPI._serializeRawObj(obj["groupMetadata"]) : null,
        presence: obj["presence"] ? window.WAPI._serializeRawObj(obj["presence"]) : null,
        msgs: null
    });
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


window.WAPI._serializeMessageObj = (obj) => {
    if (obj == undefined) {
        return null;
    }
    const _chat = obj['chat'] ? WAPI._serializeChatObj(obj['chat']) : {};
    if (obj.quotedMsg) obj.quotedMsgObj();
    return Object.assign(window.WAPI._serializeRawObj(obj), {
        id: obj.id._serialized,
        from: obj.from._serialized,
        quotedParticipant: obj.quotedParticipant ? obj.quotedParticipant._serialized ? obj.quotedParticipant._serialized : undefined : undefined,
        author: obj.author ? obj.author._serialized ? obj.author._serialized : undefined : undefined,
        chatId: obj.chatId ? obj.chatId._serialized ? obj.chatId._serialized : undefined : undefined,
        to: obj.to ? obj.to._serialized ? obj.to._serialized : undefined : undefined,
        fromMe: obj.id.fromMe,
        sender: obj["senderObj"] ? WAPI._serializeContactObj(obj["senderObj"]) : null,
        timestamp: obj["t"],
        content: obj["body"],
        isGroupMsg: obj.isGroupMsg,
        isLink: obj.isLink,
        isMMS: obj.isMMS,
        isMedia: obj.isMedia,
        isNotification: obj.isNotification,
        isPSA: obj.isPSA,
        type: obj.type,
        chat: _chat,
        isOnline: _chat.isOnline,
        lastSeen: _chat.lastSeen,
        chatId: obj.id.remote,
        quotedMsgObj: WAPI._serializeMessageObj(obj['_quotedMsgObj']),
        mediaData: window.WAPI._serializeRawObj(obj['mediaData']),
        reply: body => window.WAPI.reply(_chat.id._serialized, body, obj)
    });
};

window.WAPI._serializeNumberStatusObj = (obj) => {
    if (obj == undefined) {
        return null;
    }

    return Object.assign({}, {
        id: obj.jid,
        status: obj.status,
        isBusiness: (obj.biz === true),
        canReceiveMessage: (obj.status === 200)
    });
};

window.WAPI._serializeProfilePicThumb = (obj) => {
    if (obj == undefined) {
        return null;
    }

    return Object.assign({}, {
        eurl: obj.eurl,
        id: obj.id,
        img: obj.img,
        imgFull: obj.imgFull,
        raw: obj.raw,
        tag: obj.tag
    });
}

window.WAPI.createGroup = async function (name, contactsId) {
    if (!Array.isArray(contactsId)) {
        contactsId = [contactsId];
    }
    return await window.Store.WapQuery.createGroup(name, contactsId);
};

/**
 * Sends the command for your device to leave a group.
 * @param groupId stirng, the is for the group.
 * returns Promise<void>
 */
/*window.WAPI.leaveGroup = function (groupId) {
    groupId = typeof groupId == "string" ? groupId : groupId._serialized;
    var group = WAPI.getChat(groupId);
    return Store.GroupActions.sendExitGroup(group)
};


window.WAPI.getAllContacts = function () {
    return window.Store.Contact.map((contact) => WAPI._serializeContactObj(contact));
};*/

/**
 * Fetches all contact objects from store, filters them
 *
 * @returns {Array|*} List of contacts
 */
window.WAPI.getMyContacts = function () {
    return window.Store.Contact.filter((contact) => contact.isMyContact === true).map((contact) => WAPI._serializeContactObj(contact));
};

/**
 * Fetches contact object from store by ID
 *
 * @param id ID of contact
 * @returns {T|*} Contact object
 */
/*window.WAPI.getContact = function (id) {
    const found = window.Store.Contact.get(id);
    return window.WAPI._serializeContactObj(found);
};

window.WAPI.syncContacts = function () {
    Store.Contact.sync()
    return true;
}

/**
 * Fetches all chat objects from store
 *
 * @returns {Array|*} List of chats
 */
/*window.WAPI.getAllChats = function () {
    return window.Store.Chat.map((chat) => WAPI._serializeChatObj(chat));
};

window.WAPI.haveNewMsg = function (chat) {
    return chat.unreadCount > 0;
};

window.WAPI.getAllChatsWithNewMsg = function () {
    return window.Store.Chat.filter(window.WAPI.haveNewMsg).map((chat) => WAPI._serializeChatObj(chat));
};

/**
 * Fetches all chat IDs from store
 *
 * @returns {Array|*} List of chat id's
 */
/*window.WAPI.getAllChatIds = function () {
    return window.Store.Chat.map((chat) => chat.id._serialized || chat.id);
};

window.WAPI.getAllNewMessages = async function () {
    return WAPI.getAllChatsWithNewMsg().map(c => WAPI.getChat(c.id)).flatMap(c => c.msgs._models.filter(x => x.isNewMsg)).map(WAPI._serializeMessageObj) || [];
}

// nnoo longer determined by x.ack==-1
window.WAPI.getAllUnreadMessages = async function () {
    return Store.Chat.models.filter(chat => chat.unreadCount && chat.unreadCount > 0).map(unreadChat => unreadChat.msgs.models.slice(-1 * unreadChat.unreadCount)).flat().map(WAPI._serializeMessageObj)
}

window.WAPI.getIndicatedNewMessages = async function () {
    return JSON.stringify(Store.Chat.models.filter(chat => chat.unreadCount).map(chat => { return { id: chat.id, indicatedNewMessages: chat.msgs.models.slice(Math.max(chat.msgs.length - chat.unreadCount, 0)).filter(msg => !msg.id.fromMe) } }))
}

window.WAPI.getSingleProperty = function (namespace, id, property) {
    if (Store[namespace] && Store[namespace].get(id) && Object.keys(Store[namespace].get(id)).find(x => x.includes(property))) return Store[namespace].get(id)[property];
    return 404
}

window.WAPI.getAllChatsWithMessages = async function (onlyNew) {
    let x = [];
    if (onlyNew) { x.push(WAPI.getAllChatsWithNewMsg().map(c => WAPI.getChat(c.id._serialized))); }
    else {
        x.push(WAPI.getAllChatIds().map((c) => WAPI.getChat(c)));
    }
    const result = (await Promise.all(x)).flatMap(x => x);
    return JSON.stringify(result);
}

/**
 * Fetches all groups objects from store
 *
 * @returns {Array|*} List of chats
 */
/*window.WAPI.getAllGroups = function () {
    return window.WAPI.getAllChats().filter((chat) => chat.isGroup);
};

/**
 * Sets the chat state
 * 
 * @param {0|1|2} chatState The state you want to set for the chat. Can be TYPING (1), RECRDING (2) or PAUSED (3);
 * returns {boolean}
 */
/*window.WAPI.sendChatstate = async function (state, chatId) {
    switch (state) {
        case 0:
            await window.Store.ChatStates.sendChatStateComposing(chatId);
            break;
        case 1:
            await window.Store.ChatStates.sendChatStateRecording(chatId);
            break;
        case 2:
            await window.Store.ChatStates.sendChatStatePaused(chatId);
            break;
        default:
            return false
    }
    return true;
};

/**
 * Fetches chat object from store by ID
 *
 * @param id ID of chat
 * @returns {T|*} Chat object
 */
/*window.WAPI.getChat = function (id) {
    if (!id) return false;
    id = typeof id == "string" ? id : id._serialized;
    const found = window.Store.Chat.get(id);
    if (found) found.sendMessage = (found.sendMessage) ? found.sendMessage : function () { return window.Store.sendMessage.apply(this, arguments); };
    return found;
}

/**
 * Get your status
 * @param {string} to '000000000000@c.us'
 * returns: {string,string} and string -"Hi, I am using WA"
 */
/*window.WAPI.getStatus = async (id) => {
    return await Store.MyStatus.getStatus(id)
}

/*window.WAPI.getChatByName = function (name) {
    return window.WAPI.getAllChats().find((chat) => chat.name === name);
};

/*window.WAPI.sendImageFromDatabasePicBot = function (picId, chatId, caption) {
    var chatDatabase = window.WAPI.getChatByName('DATABASEPICBOT');
    var msgWithImg = chatDatabase.msgs.find((msg) => msg.caption == picId);

    if (msgWithImg === undefined) {
        return false;
    }
    var chatSend = WAPI.getChat(chatId);
    if (chatSend === undefined) {
        return false;
    }
    const oldCaption = msgWithImg.caption;

    msgWithImg.id.id = window.WAPI.getNewId();
    msgWithImg.id.remote = chatId;
    msgWithImg.t = Math.ceil(new Date().getTime() / 1000);
    msgWithImg.to = chatId;

    if (caption !== undefined && caption !== '') {
        msgWithImg.caption = caption;
    } else {
        msgWithImg.caption = '';
    }

    msgWithImg.collection.send(msgWithImg).then(function (e) {
        msgWithImg.caption = oldCaption;
    });

    return true;
};

window.WAPI.getGeneratedUserAgent = function (useragent) {*/
    //if (!useragent.includes('WhatsApp')) return 'WhatsApp/0.4.315 ' + useragent;
    //return useragent.replace(useragent.match(/WhatsApp\/([.\d])*/g)[0].match(/[.\d]*/g).find(x => x), window.Debug.VERSION)
//}

/*window.WAPI.getWAVersion = function () {
    return window.Debug.VERSION;
}

/**
 * Automatically sends a link with the auto generated link preview. You can also add a custom message to be added.
 * @param chatId 
 * @param url string A link, for example for youtube. e.g https://www.youtube.com/watch?v=61O-Galzc5M
 * @param text string Custom text as body of the message, this needs to include the link or it will be appended after the link.
 */
/*window.WAPI.sendLinkWithAutoPreview = async function (chatId, url, text) {
    text = text || '';
    var chatSend = WAPI.getChat(chatId);
    if (chatSend === undefined) {
        return false;
    }
    const linkPreview = await Store.WapQuery.queryLinkPreview(url);
    return (await chatSend.sendMessage(text.includes(url) ? text : `${url}\n${text}`, { linkPreview })) == 'OK'
}

window.WAPI.sendMessageWithThumb = function (thumb, url, title, description, text, chatId) {
    var chatSend = WAPI.getChat(chatId);
    if (chatSend === undefined) {
        return false;
    }
    var linkPreview = {
        canonicalUrl: url,
        description: description,
        matchedText: url,
        title: title,
        thumbnail: thumb // Thumbnail max size allowed: 200x200
    };
    chatSend.sendMessage(text.includes(url) ? text : `${url}\n${text}`, { linkPreview: linkPreview, mentionedJidList: [], quotedMsg: null, quotedMsgAdminGroupJid: null });
    return true;
};

window.WAPI.revokeGroupInviteLink = async function (chatId) {
    var chat = Store.Chat.get(chatId);
    if (!chat.isGroup) return false;
    await Store.GroupInvite.revokeGroupInvite(chat);
    return true;
}

window.WAPI.getGroupInviteLink = async function (chatId) {
    var chat = Store.Chat.get(chatId);
    if (!chat.isGroup) return false;
    await Store.GroupInvite.queryGroupInviteCode(chat);
    return `https://chat.whatsapp.com/${chat.inviteCode}`
}

window.WAPI.inviteInfo = async function (link) {
    return await Store.WapQuery.groupInviteInfo(link.split('\/').pop()).then(r => r.status === 200 ? WAPI.quickClean(r) : r.status);
}

window.WAPI.getNewId = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};

window.WAPI.getChatById = function (id) {
    let found = WAPI.getChat(id);
    if (found) {
        found = WAPI._serializeChatObj(found);
    } else {
        found = false;
    }
    return found;
};


/**
 * I return all unread messages from an asked chat and mark them as read.
 *
 * :param id: chat id
 * :type  id: string
 *
 * :param includeMe: indicates if user messages have to be included
 * :type  includeMe: boolean
 *
 * :param includeNotifications: indicates if notifications have to be included
 * :type  includeNotifications: boolean
 *
 * :returns: list of unread messages from asked chat
 * :rtype: object
 */
/*window.WAPI.getUnreadMessagesInChat = function (id, includeMe, includeNotifications) {
    // get chat and its messages
    let chat = WAPI.getChat(id);
    let messages = chat.msgs._models;

    // initialize result list
    let output = [];

    // look for unread messages, newest is at the end of array
    for (let i = messages.length - 1; i >= 0; i--) {
        // system message: skip it
        if (i === "remove") {
            continue;
        }

        // get message
        let messageObj = messages[i];

        // found a read message: stop looking for others
        if (typeof (messageObj.isNewMsg) !== "boolean" || messageObj.isNewMsg === false) {
            continue;
        } else {
            messageObj.isNewMsg = false;
            // process it
            let message = WAPI.processMessageObj(messageObj,
                includeMe,
                includeNotifications);

            // save processed message on result list
            if (message)
                output.push(message);
        }
    }
    // return result list
    return output;
};


/**
 * Load more messages in chat object from server. Use this in a while loop
 *
 * @param id ID of chat
 * @returns None
 */
/*window.WAPI.loadEarlierMessages = async function (id) {
    const chat = WAPI.getChat(id);
    if (chat) {
        const someEarlierMessages = await chat.loadEarlierMsgs();
        if (someEarlierMessages) return someEarlierMessages.map(WAPI._serializeMessageObj);
    }
    return false;
};

/**
 * Load more messages in chat object from store by ID
 *
 * @param id ID of chat
 * @returns None
 */
/*window.WAPI.loadAllEarlierMessages = async function (id) {
    const found = WAPI.getChat(id);
    while (!found.msgs.msgLoadState.noEarlierMsgs) {
        console.log('loading more messages')
        await found.loadEarlierMsgs();
    }
    return true
};

window.WAPI.asyncLoadAllEarlierMessages = async function (id) {
    return await window.WAPI.loadAllEarlierMessages(id);
};

window.WAPI.areAllMessagesLoaded = function (id) {
    const found = WAPI.getChat(id);
    if (!found.msgs.msgLoadState.noEarlierMsgs) {
        return false
    }
    return true
};

/**
 * Load more messages in chat object from store by ID till a particular date
 *
 * @param id ID of chat
 * @param lastMessage UTC timestamp of last message to be loaded
 * @returns None
 */

/*window.WAPI.loadEarlierMessagesTillDate = async function (id, lastMessage) {
    const found = WAPI.getChat(id);
    x = async function () {
        if (found.msgs.models[0].t > lastMessage && !found.msgs.msgLoadState.noEarlierMsgs) {
            return await found.loadEarlierMsgs().then(x);
        } else {
            return true
        }
    };
    return await x();
};


/**
 * Fetches all group metadata objects from store
 *
 * @returns {Array|*} List of group metadata
 */
/*window.WAPI.getAllGroupMetadata = function () {
    return window.Store.GroupMetadata.map((groupData) => groupData.all);
};

/**
 * Fetches group metadata object from store by ID
 *
 * @param id ID of group
 * @returns {T|*} Group metadata object
 */
window.WAPI.getGroupMetadata = async function (id) {
    return window.Store.GroupMetadata.find(id);
};


/**
 * Fetches group participants
 *
 * @param id ID of group
 * @returns {Promise.<*>} Yields group metadata
 * @private
 */
window.WAPI._getGroupParticipants = async function (id) {
    return (await WAPI.getGroupMetadata(id)).participants;
};

/**
 * Fetches IDs of group participants
 *
 * @param id ID of group
 * @returns {Promise.<Array|*>} Yields list of IDs
 */
/*window.WAPI.getGroupParticipantIDs = async function (id) {
    return (await WAPI._getGroupParticipants(id))
        .map((participant) => participant.id._serialized);
};

window.WAPI.getGroupAdmins = async function (id) {
    return (await WAPI._getGroupParticipants(id))
        .filter((participant) => participant.isAdmin)
        .map((admin) => admin.id._serialized);
};

WAPI.iAmAdmin = async function () {
    return (await Promise.all(Store.GroupMetadata.models.map(({ id }) => Store.GroupMetadata.find(id)))).filter(({ participants }) => participants.iAmAdmin() || participants.iAmSuperAdmin()).map(({ id }) => id._serialized);
}

/**
 * Returns an object with all of your host device details
 */
window.WAPI.getMe = function () {
    return {
        ...WAPI.quickClean({
            ...Store.Contact.get(Store.Me.wid).attributes,
            ...Store.Me.attributes
        }),
        me: Store.Me.me
    };
}

/*window.WAPI.isLoggedIn = function () {
    // Contact always exists when logged in
    const isLogged = window.Store.Contact && window.Store.Contact.checksum !== undefined;
    return isLogged;
};

window.WAPI.isConnected = function () {
    // Phone or connection Disconnected icon appears when phone or connection is disconnected
    const isConnected = (document.querySelector('[data-testid="alert-phone"]') == null && document.querySelector('[data-testid="alert-computer"]') == null) ? true : false;
    return isConnected;
};

//I dont think this will work for group chats.
window.WAPI.isChatOnline = async function (id) {
    return Store.Chat.get(id) ? await Store.Chat.get(id).presence.subscribe().then(_ => Store.Chat.get(id).presence.attributes.isOnline) : false;
}

window.WAPI.processMessageObj = function (messageObj, includeMe, includeNotifications) {
    if (messageObj.isNotification) {
        if (includeNotifications)
            return WAPI._serializeMessageObj(messageObj);
        else
            return;
        // System message
        // (i.e. "Messages you send to this chat and calls are now secured with end-to-end encryption...")
    } else if (messageObj.id.fromMe === false || includeMe) {
        return WAPI._serializeMessageObj(messageObj);
    }
    return;
};

window.WAPI.getAllMessagesInChat = function (id, includeMe = false, includeNotifications = false, clean = false) {
    const chat = WAPI.getChat(id);
    let output = chat.msgs._models || [];
    if (!includeMe) output = output.filter(m => !m.id.fromMe)
    if (!includeNotifications) output = output.filter(m => !m.isNotification)
    return (clean ? output.map(WAPI.quickClean) : output.map(WAPI._serializeMessageObj)) || [];
};

window.WAPI.loadAndGetAllMessagesInChat = function (id, includeMe, includeNotifications) {
    return WAPI.loadAllEarlierMessages(id).then(_ => {
        const chat = WAPI.getChat(id);
        let output = [];
        const messages = chat.msgs._models;

        for (const i in messages) {
            if (i === "remove") {
                continue;
            }
            const messageObj = messages[i];

            let message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications)
            if (message)
                output.push(message);
        }
        return output;
    })
};

window.WAPI.getAllMessageIdsInChat = function (id, includeMe, includeNotifications) {
    const chat = WAPI.getChat(id);
    let output = [];
    const messages = chat.msgs._models;

    for (const i in messages) {
        if ((i === "remove")
            || (!includeMe && messages[i].isMe)
            || (!includeNotifications && messages[i].isNotification)) {
            continue;
        }
        output.push(messages[i].id._serialized);
    }
    return output;
};

window.WAPI.getMessageById = function (id) {
    let result = false;
    try {
        let msg = window.Store.Msg.get(id);
        if (msg) {
            result = WAPI.processMessageObj(msg, true, true);
        }
    } catch (err) { }
    return result;
};

window.WAPI.sendMessageWithMentions = async function (ch, body) {
    var chat = ch.id ? ch : Store.Chat.get(ch);
    var chatId = chat.id._serialized;
    var msgIveSent = chat.msgs.filter(msg => msg.__x_isSentByMe)[0];
    if (!msgIveSent) return chat.sendMessage(body);
    var tempMsg = Object.create(msgIveSent);
    var newId = window.WAPI.getNewMessageId(chatId);
    var mentionedJidList = body.match(/@(\d*)/g).filter(x => x.length > 5).map(x => Store.Contact.get(x.replace("@", "") + "@c.us") ? new Store.WidFactory.createUserWid(x.replace("@", "")) : '') || undefined;
    var extend = {
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: new Store.WidFactory.createWid(chatId),
        isNewMsg: !0,
        type: "chat",
        body,
        quotedMsg: null,
        mentionedJidList
    };
    Object.assign(tempMsg, extend);
    await Store.addAndSendMsgToChat(chat, tempMsg)
    return newId._serialized;
}

window.WAPI.sendMessageReturnId = async function (ch, body) {
    var chat = ch.id ? ch : Store.Chat.get(ch);
    var chatId = chat.id._serialized;
    var msgIveSent = chat.msgs.filter(msg => msg.__x_isSentByMe)[0];
    if (!msgIveSent) return chat.sendMessage(body);
    var tempMsg = Object.create(msgIveSent);
    var newId = window.WAPI.getNewMessageId(chatId);
    var extend = {
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: new Store.WidFactory.createWid(chatId),
        isNewMsg: !0,
        type: "chat",
        body,
        quotedMsg: null
    };
    Object.assign(tempMsg, extend);
    await Store.addAndSendMsgToChat(chat, tempMsg)
    return newId._serialized;
}


window.WAPI.sendMessage = async function (id, message) {
    if (id === 'status@broadcast') return 'Not able to send message to broadcast';
    let chat = WAPI.getChat(id);
    if ((!chat && !id.includes('g') || chat.msgs.models.length == 0)) {
        var contact = WAPI.getContact(id)
        if (!contact || !contact.isMyContact) return 'Not a contact';
        await Store.Chat.find(Store.Contact.get(id).id)
        chat = WAPI.getChat(id);
    }
    if (chat !== undefined) {
        // return WAPI.sendMessageReturnId(chat,message).then(id=>{return id})
        return await chat.sendMessage(message).then(_ => chat.lastReceivedKey._serialized);
    }
    return false;
};


window.WAPI.sendSeen = async function (id) {
    if (!id) return false;
    var chat = window.WAPI.getChat(id);
    if (chat !== undefined) {
        await Store.ReadSeen.sendSeen(chat, false);
        return true;
    }
    return false;
};

window.WAPI.markAsUnread = async function (id) {
    var chat = window.WAPI.getChat(id);
    if (chat !== undefined) {
        await Store.ReadSeen.markUnread(chat, true);
        return true;
    }
    return false;
};

function isChatMessage(message) {
    if (message.isSentByMe) {
        return false;
    }
    if (message.isNotification) {
        return false;
    }
    if (!message.isUserCreatedType) {
        return false;
    }
    return true;
}

window.WAPI.setPresence = function (available) {
    if (available) Store._Presence.setPresenceAvailable();
    else Store._Presence.setPresenceUnavailable();
}

window.WAPI.getUnreadMessages = function (includeMe, includeNotifications, use_unread_count) {
    const chats = window.Store.Chat.models;
    let output = [];

    for (let chat in chats) {
        if (isNaN(chat)) {
            continue;
        }

        let messageGroupObj = chats[chat];
        let messageGroup = WAPI._serializeChatObj(messageGroupObj);

        messageGroup.messages = [];

        const messages = messageGroupObj.msgs._models;
        for (let i = messages.length - 1; i >= 0; i--) {
            let messageObj = messages[i];
            if (typeof (messageObj.isNewMsg) != "boolean" || messageObj.isNewMsg === false) {
                continue;
            } else {
                messageObj.isNewMsg = false;
                let message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications);
                if (message) {
                    messageGroup.messages.push(message);
                }
            }
        }

        if (messageGroup.messages.length > 0) {
            output.push(messageGroup);
        } else { // no messages with isNewMsg true
            if (use_unread_count) {
                let n = messageGroupObj.unreadCount; // will use unreadCount attribute to fetch last n messages from sender
                for (let i = messages.length - 1; i >= 0; i--) {
                    let messageObj = messages[i];
                    if (n > 0) {
                        if (!messageObj.isSentByMe) {
                            let message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications);
                            messageGroup.messages.unshift(message);
                            n -= 1;
                        }
                    } else if (n === -1) { // chat was marked as unread so will fetch last message as unread
                        if (!messageObj.isSentByMe) {
                            let message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications);
                            messageGroup.messages.unshift(message);
                            break;
                        }
                    } else { // unreadCount = 0
                        break;
                    }
                }
                if (messageGroup.messages.length > 0) {
                    messageGroupObj.unreadCount = 0; // reset unread counter
                    output.push(messageGroup);
                }
            }
        }
    }
    return output;
};

window.WAPI.getGroupOwnerID = async function (id) {
    const output = (await WAPI.getGroupMetadata(id)).owner.id;
    return output;

};

window.WAPI.getCommonGroups = async function (id) {
    let output = [];

    groups = window.WAPI.getAllGroups();

    for (let idx in groups) {
        try {
            participants = await window.WAPI.getGroupParticipantIDs(groups[idx].id);
            if (participants.filter((participant) => participant == id).length) {
                output.push(groups[idx]);
            }
        } catch (err) {
            console.log("Error in group:");
            console.log(groups[idx]);
            console.log(err);
        }
    }
    return output;
};

window.WAPI.getProfilePicFromServer = function (id) {
    return Store.WapQuery.profilePicFind(id).then(x => x.eurl);
}

window.WAPI.getProfilePicSmallFromId = async function (id) {
    return await window.Store.ProfilePicThumb.find(id).then(async d => {
        if (d.img !== undefined) {
            return await window.WAPI.downloadFileWithCredentials(d.img);
        } else {
            return false
        }
    }, function (e) {
        return false
    })
};

window.WAPI.getProfilePicFromId = async function (id) {
    return await window.Store.ProfilePicThumb.find(id).then(async d => {
        if (d.imgFull !== undefined) {
            return await window.WAPI.downloadFileWithCredentials(d.imgFull);
        } else {
            return false
        }
    }, function (e) {
        return false
    })
};

window.WAPI.downloadFileWithCredentials = async function (url) {
    if (!axios || !url) return false;
    const ab = (await axios.get(url, { responseType: 'arraybuffer' })).data
    return btoa(new Uint8Array(ab).reduce((data, byte) => data + String.fromCharCode(byte), ''));
};

window.WAPI.downloadFile = async function (url) {
    return await new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let reader = new FileReader();
                    reader.readAsDataURL(xhr.response);
                    reader.onload = function (e) {
                        resolve(reader.result.substr(reader.result.indexOf(',') + 1))
                    };
                } else {
                    console.error(xhr.statusText);
                }
            } else {
                console.log(err);
                resolve(false);
            }
        };

        xhr.open("GET", url, true);
        xhr.responseType = 'blob';
        xhr.send(null);
    })
};

window.WAPI.getBatteryLevel = function () {
    return Store.Conn.battery;
};

window.WAPI.getIsPlugged = function () {
    return Store.Conn.plugged;
};

window.WAPI.deleteConversation = async function (chatId) {
    let userId = new window.Store.UserConstructor(chatId, { intentionallyUsePrivateConstructor: true });
    let conversation = WAPI.getChat(userId);
    if (!conversation) {
        return false;
    }
    return await window.Store.sendDelete(conversation, false).then(() => {
        return true;
    }).catch(() => {
        return false;
    });
};

window.WAPI.smartDeleteMessages = async function (chatId, messageArray, onlyLocal) {
    var userId = new Store.WidFactory.createWid(chatId);
    let conversation = WAPI.getChat(userId);
    if (!conversation) return false;

    if (!Array.isArray(messageArray)) {
        messageArray = [messageArray];
    }

    let messagesToDelete = messageArray.map(msgId => (typeof msgId == 'string') ? window.Store.Msg.get(msgId) : msgId).filter(x => x);
    if (messagesToDelete.length == 0) return true;
    let jobs = onlyLocal ? [conversation.sendDeleteMsgs(messagesToDelete, conversation)] : [
        conversation.sendRevokeMsgs(messagesToDelete.filter(msg => msg.isSentByMe), conversation),
        conversation.sendDeleteMsgs(messagesToDelete.filter(msg => !msg.isSentByMe), conversation)
    ]
    return Promise.all(jobs).then(_ => true)
};

window.WAPI.deleteMessage = async function (chatId, messageArray, revoke = false) {
    let userId = new window.Store.UserConstructor(chatId, { intentionallyUsePrivateConstructor: true });
    let conversation = WAPI.getChat(userId);

    if (!conversation) return false;

    if (!Array.isArray(messageArray)) {
        messageArray = [messageArray];
    }

    let messagesToDelete = messageArray.map(msgId => window.Store.Msg.get(msgId));

    if (revoke) {
        conversation.sendRevokeMsgs(messagesToDelete, conversation);
    } else {
        conversation.sendDeleteMsgs(messagesToDelete, conversation);
    }

    return true;
};

window.WAPI.clearChat = async function (id) {
    return await Store.ChatUtil.sendClear(Store.Chat.get(id), true);
}

/**
 * @param id The id of the conversation
 * @param archive boolean true => archive, false => unarchive
 * @return boolean true: worked, false: didnt work (probably already in desired state)
 */
/*window.WAPI.archiveChat = async function (id, archive) {
    return await Store.Archive.setArchive(Store.Chat.get(id), archive).then(_ => true).catch(_ => false)
}

/**
 * Extracts vcards from a message
 * @param id string id of the message to extract the vcards from
 * @returns [vcard] 
 * ```
 * [
 * {
 * displayName:"Contact name",
 * vcard: "loong vcard string"
 * }
 * ]
 * ``` or false if no valid vcards found
 */
/*window.WAPI.getVCards = function (id) {
    var msg = Store.Msg.get(id);
    if (msg) {
        if (msg.type == 'vcard') {
            return [
                {
                    displayName: msg.subtype,
                    vcard: msg.body
                }
            ]
        } else if (msg.type == 'multi_vcard') {
            return msg.vcardList
        } else return false;
    } else {
        return false
    }
}

window.WAPI.checkNumberStatus = async function (id) {
    try {
        const result = await window.Store.WapQuery.queryExist(id);
        if (result.jid === undefined) throw 404;
        const data = window.WAPI._serializeNumberStatusObj(result);
        if (data.status == 200) data.numberExists = true
        return data;
    } catch (e) {
        return window.WAPI._serializeNumberStatusObj({
            status: e,
            jid: id
        });
    }
};

window.WAPI.onAnyMessage = callback => window.Store.Msg.on('add', (newMessage) => {
    if (newMessage && newMessage.isNewMsg) {
        if (!newMessage.clientUrl && (newMessage.mediaKeyTimestamp || newMessage.filehash)) {
            const cb = (msg) => {
                if (msg.id._serialized === newMessage.id._serialized && msg.clientUrl) {
                    callback(WAPI.processMessageObj(msg, true, false));
                    Store.Msg.off('change:isUnsentMedia', cb);
                }
            };
            Store.Msg.on('change:isUnsentMedia', cb);
        } else {
            let pm = window.WAPI.processMessageObj(newMessage, true, true);
            let message = pm ? JSON.parse(JSON.stringify(pm)) : WAPI.quickClean(newMessage.attributes);
            if (message) {
                callback(message)
            }
        }
    }
});

/**
 * Registers a callback to be called when a the acknowledgement state of the phone connection.
 * @param callback - function - Callback function to be called when the device state changes. this returns 'CONNECTED' or 'TIMEOUT'
 * @returns {boolean}
 */
/*window.WAPI.onStateChanged = function (callback) {
    window.Store.State.default.on('change:state', ({ state }) => callback(state))
    return true;
}

/**
 * Returns the current state of the session. Possible state values:
 * "CONFLICT"
 * "CONNECTED"
 * "DEPRECATED_VERSION"
 * "OPENING"
 * "PAIRING"
 * "PROXYBLOCK"
 * "SMB_TOS_BLOCK"
 * "TIMEOUT"
 * "TOS_BLOCK"
 * "UNLAUNCHED"
 * "UNPAIRED"
 * "UNPAIRED_IDLE"
 */
/*window.WAPI.getState = function () {
    return Store.State.default.state;
}

/**
 * Registers a callback to be called when your phone receives a new call request.
 * @param callback - function - Callback function to be called upon a new call. returns a call object.
 * @returns {boolean}
 */
/*window.WAPI.onIncomingCall = function (callback) {
    window.Store.Call.on('add', callback);
    return true;
}

/**
 * @param label: either the id or the name of the label. id will be something simple like anhy nnumber from 1-10, name is the label of the label if that makes sense.
 * @param objectId The Chat, message or contact id to which you want to add a label
 * @param type The type of the action. It can be either "add" or "remove"
 * @returns boolean true if it worked otherwise false
 */
/*window.WAPI.addOrRemoveLabels = async function (label, objectId, type) {
    var { id } = Store.Label.models.find(x => x.id == label || x.name == label)
    var to = Store.Chat.get(objectId) || Store.Msg.get(objectId) || Store.Contact.get(objectId);
    if (!id || !to) return false;
    const { status } = await Store.Label.addOrRemoveLabels([{ id, type }], [to]);
    return status === 200;
}

/**
 * Registers a callback to be called when a the acknowledgement state of a message changes.
 * @param callback - function - Callback function to be called when a message acknowledgement changes.
 * @returns {boolean}
 */
/*window.WAPI.onAck = function (callback) {
    Store.Msg.on("change:ack", m => callback(WAPI.quickClean(m)));
    return true;
}

//returns an array of liveLocationChangeObjects
window.WAPI.forceUpdateLiveLocation = async function (chatId) {
    if (!Store.LiveLocation.get(chatId)) return false;
    return WAPI.quickClean(await Store.LiveLocation.update(chatId)).participants.map(l => {
        return {
            ...l,
            msgId: l.msg.id._serialized
        }
    });
}

window.WAPI.onLiveLocation = function (chatId, callback) {
    var lLChat = Store.LiveLocation.get(chatId);
    if (lLChat) {
        var validLocs = lLChat.participants.validLocations();
        validLocs.map(x => x.on('change:lastUpdated', (x, y, z) => {
            const { id, lat, lng, accuracy, degrees, speed, lastUpdated } = x;
            const l = {
                id: id.toString(), lat, lng, accuracy, degrees, speed, lastUpdated
            };
            callback(l);
        }));
        return true;
    } else {
        return false;
    }
}

window.WAPI.onBattery = function (callback) {
    window.Store.Conn.on('change:battery', ({ battery }) => callback(battery));
    return true;
}

window.WAPI.onPlugged = function (callback) {
    window.Store.Conn.on('change:plugged', ({ plugged }) => callback(plugged));
    return true;
}

/**
 * A new approach to listening to add and remove events from groups. This takes only a callback and is prevents memory leaks
 */
/*WAPI.onGlobalParicipantsChanged = function (callback) {
    const events = [
        'change:isAdmin',
        'remove',
        'add'
    ]
    //const id = eventName.replace('group_participant_change','');
    const chats = Store.GroupMetadata.models
        //.filter(group=>group.participants.models.find(participant=>participant.id._serialized===id))
        .filter(x => x.id.server !== 'broadcast').map(group => window.Store.Chat.get(group.id._serialized));
    const cb = (eventName, eventData, extra) => {
        if (events.includes(eventName)) {
            let action = eventName;
            if (eventName == 'change:isAdmin') {
                action = extra ? 'promote' : 'demote';
            }
            callback({
                by: undefined,
                action: action,
                who: eventData.id._serialized,
                chat: extra.parent.id._serialized
            });
            chats.map(chat => {
                chat.groupMetadata.participants.off('all', cb)
                chat.groupMetadata.participants.off(cb)
            });
        }
    }
    chats.map(chat => chat.groupMetadata.participants.on('all', cb));
    Store.GroupMetadata.on('all', (eventName, groupId) => chats.map(chat => chat.groupMetadata.participants.on('all', cb)))
    return true;
}

/**
 * Registers a callback to participant changes on a certain, specific group
 * @param groupId - string - The id of the group that you want to attach the callback to.
 * @param callback - function - Callback function to be called when a message acknowledgement changes. The callback returns 3 variables
 * @returns {boolean}
 */
/*window.WAPI.onParticipantsChanged = function (groupId, callback) {
    const subtypeEvents = [
        "invite",
        "add",
        "remove",
        "leave",
        "promote",
        "demote"
    ];
    const events = [
        'change:isAdmin',
        'remove',
        'add'
    ]
    const chat = window.Store.Chat.get(groupId);
    chat.groupMetadata.participants.on('all', (eventName, eventData, extra) => {
        if (events.includes(eventName)) {
            let action = eventName;
            if (eventName == 'change:isAdmin') {
                action = extra ? 'promote' : 'demote';
            }
            callback({
                by: undefined,
                action: action,
                who: eventData.id._serialized
            });
        }
    })
}

/**
 * Registers a callback to participant changes on a certain, specific group
 * @param groupId - string - The id of the group that you want to attach the callback to.
 * @param callback - function - Callback function to be called when a message acknowledgement changes. The callback returns 3 variables
 * @returns {boolean}
 */
/*var groupParticpiantsEvents = {};
window.WAPI._onParticipantsChanged = function (groupId, callback) {
    const subtypeEvents = [
        "invite",
        "add",
        "remove",
        "leave",
        "promote",
        "demote"
    ];
    const chat = window.Store.Chat.get(groupId);
    //attach all group Participants to the events object as 'add'
    const metadata = window.Store.GroupMetadata.get(groupId);
    if (!groupParticpiantsEvents[groupId]) {
        groupParticpiantsEvents[groupId] = {};
        metadata.participants.forEach(participant => {
            groupParticpiantsEvents[groupId][participant.id.toString()] = {
                subtype: "add",
                from: metadata.owner
            }
        });
    }
    let i = 0;
    chat.on("change:groupMetadata.participants",
        _ => chat.on("all", (x, y) => {
            const { isGroup, previewMessage } = y;
            if (isGroup && x === "change" && previewMessage && previewMessage.type === "gp2" && subtypeEvents.includes(previewMessage.subtype)) {
                const { subtype, author, recipients } = previewMessage;
                const rec = recipients[0].toString();
                if (groupParticpiantsEvents[groupId][rec] && groupParticpiantsEvents[groupId][recipients[0]].subtype == subtype) {
                    //ignore, this is a duplicate entry
                    // console.log('duplicate event')
                } else {
                    //ignore the first message
                    if (i == 0) {
                        //ignore it, plus 1,
                        i++;
                    } else {
                        groupParticpiantsEvents[groupId][rec] = { subtype, author };
                        //fire the callback
                        // // previewMessage.from.toString()
                        // x removed y
                        // x added y
                        callback({
                            by: author.toString(),
                            action: subtype,
                            who: recipients
                        });
                        chat.off("all", this)
                        i = 0;
                    }
                }
            }
        })
    )
    return true;
}


/**
 * Registers a callback that fires when your host phone is added to a group.
 * @param callback - function - Callback function to be called when a message acknowledgement changes. The callback returns 3 variables
 * @returns {boolean}
 */
/*window.WAPI.onAddedToGroup = function (callback) {
    Store.Chat.on('change:previewMessage', async event => {
        if (event.isGroup && event.previewMessage && event.previewMessage.type == 'gp2' && event.previewMessage.subtype == 'add' && event.previewMessage.recipients && event.previewMessage.recipients.map(x => x._serialized).includes(Store.Me.wid._serialized)) {
            const tdiff = (Date.now() - Store.Msg.get(event.previewMessage.id._serialized).t * 1000) / 1000;
            if (tdiff < 10.0) {
                console.log('added', tdiff, 'seconds ago')
                await WAPI.sendSeen(event.id);
                callback(WAPI._serializeChatObj(Store.Chat.get(event.id)));
            } else console.log('Not a new group add', event.id._serialized)
        }
    })
    return true;
}

/**
 * Reads buffered new messages.
 * @returns {Array}
 */
/*window.WAPI.getBufferedNewMessages = function () {
    let bufferedMessages = window._WAPI._newMessagesBuffer;
    window._WAPI._newMessagesBuffer = [];
    return bufferedMessages;
};
/** End new messages observable functions **/

/** Joins a group via the invite link, code, or message
 * @param link This param is the string which includes the invite link or code. The following work:
 * - Follow this link to join my WA group: https://chat.whatsapp.com/DHTGJUfFJAV9MxOpZO1fBZ
 * - https://chat.whatsapp.com/DHTGJUfFJAV9MxOpZO1fBZ
 * - DHTGJUfFJAV9MxOpZO1fBZ
 * @returns Promise<string | boolean> Either false if it didn't work, or the group id.
 */
/*window.WAPI.joinGroupViaLink = async function (link) {
    return await Store.WapQuery.acceptGroupInvite(link.split('\/').pop()).then(res => res.status === 200 ? res.gid._serialized : res.status);
    let code = link;
    //is it a link? if not, assume it's a code, otherwise, process the link to get the code.
    if (link.includes('chat.whatsapp.com')) {
        if (!link.match(/chat.whatsapp.com\/([\w\d]*)/g).length) return false;
        code = link.match(/chat.whatsapp.com\/([\w\d]*)/g)[0].replace('chat.whatsapp.com\/', '');
    }
    const group = await Store.GroupInvite.joinGroupViaInvite(code);
    if (!group.id) return false;
    return group.id._serialized
}

window.WAPI.sendImage = async function (imgBase64, chatid, filename, caption, quotedMsg, waitForKey, ptt) {
    if (!chatid.includes('@g') && !chatid.includes('@c')) return false;
    let extras = {};
    if (quotedMsg) {
        if (typeof quotedMsg !== "object") quotedMsg = Store.Msg.get(quotedMsg);
        extras = {
            quotedMsg,
            quotedParticipant: quotedMsg.author || quotedMsg.from,
            quotedStanzaID: quotedMsg.id.id
        };
    }
    return await Store.Chat.find(chatid).then(async (chat) => {
        var mediaBlob = window.WAPI.base64ImageToFile(imgBase64, filename);
        return await window.WAPI.procFiles(chat, mediaBlob).then(async mc => {
            var media = mc.models[0];
            if (ptt) media.mediaPrep._mediaData.type = 'ptt';
            await media.sendToChat(chat, { caption, ...extras });
            return waitForKey ? await new Promise(async (resolve, reject) => {
                const cb = msg => {
                    if (media.attributes.file.size === msg.size) resolve(msg.id._serialized);
                    Store.Msg.off('change:clientUrl', cb);
                };
                Store.Msg.on('change:clientUrl', cb);
            }) : true
        });
    });
}

/**
 * This function sts the profile name of the number.
 * 
 * Please note this DOES NOT WORK ON BUSINESS ACCOUNTS!
 * 
 * @param newName - string the new name to set as profile name
 */
/*window.WAPI.setMyName = async function (newName) {
    if (!Store.Versions.default[12].BinaryProtocol) Store.Versions.default[12].BinaryProtocol = new Store.bp(Store.Me.binVersion);
    return (await Store.Versions.default[12].setPushname(newName)).status === 200;
}

/** Change the icon for the group chat
 * @param groupId 123123123123_1312313123@g.us The id of the group
 * @param imgData 'data:image/jpeg;base64,...` The base 64 data uri
 * @returns boolean true if it was set, false if it didn't work. It usually doesn't work if the image file is too big.
 */
/*window.WAPI.setGroupIcon = async function (groupId, imgData) {
    const { status } = await Store.WapQuery.sendSetPicture(groupId, imgData, imgData);
    return status == 200;
}

/**
* Update your status
*   @param newStatus string new Status
*/
/*window.WAPI.setMyStatus = function (newStatus) {
    return Store.MyStatus.setMyStatus(newStatus)
}

window.WAPI.sendVideoAsGif = async function (imgBase64, chatid, filename, caption, quotedMsg) {
    let extras = {};
    if (quotedMsg) {
        if (typeof quotedMsg !== "object") quotedMsg = Store.Msg.get(quotedMsg);
        extras = {
            quotedMsg,
            quotedParticipant: quotedMsg.author || quotedMsg.from,
            quotedStanzaID: quotedMsg.id.id
        };
    }
    // create new chat
    return await Store.Chat.find(chatid).then(async (chat) => {
        var mediaBlob = window.WAPI.base64ImageToFile(imgBase64, filename);
        var mc = new Store.MediaCollection(chat);
        return await window.WAPI.procFiles(chat, mediaBlob).then(async mc => {
            var media = mc.models[0];
            media.mediaPrep._mediaData.isGif = true;
            media.mediaPrep._mediaData.gifAttribution = 1;
            await media.mediaPrep.sendToChat(chat, { caption, ...extras });
            return chat.lastReceivedKey._serialized;
        });
    });
}

window.WAPI.refreshBusinessProfileProducts = async function () {
    await Promise.all(Store.BusinessProfile.models.map(async x => {
        try {
            await Store.Catalog.findCarouselCatalog(x.id._serialized)
        } catch (error) { }
    }));
    return true;
}

/**
 * Find any product listings of the given number. Use this to query a catalog
 *
 * @param id id of buseinss profile (i.e the number with @c.us)
 * @returns None
 */
/*window.WAPI.getBusinessProfilesProducts = async function (id) {
    try {
        if (!Store.Catalog.get(id)) await Store.Catalog.findCarouselCatalog(id)
        const catalog = Store.Catalog.get(id);
        if (catalog.productCollection && catalog.productCollection._models.length)
            return JSON.parse(JSON.stringify(catalog.productCollection._models));
        else return [];
    } catch (error) {
        return false;
    }
};


window.WAPI.procFiles = async function (chat, blobs) {
    if (!Array.isArray(blobs)) {
        blobs = [blobs];
    }
    var mc = new Store.MediaCollection(chat);
    await mc.processFiles((Debug.VERSION === '0.4.613') ? blobs : blobs.map(blob => { return { file: blob } }), chat, 1);
    return mc
}
/**
 * Sends product with image to chat
 * @param imgBase64 Base64 image data
 * @param chatid string the id of the chat that you want to send this product to
 * @param caption string the caption you want to add to this message
 * @param bizNumber string the @c.us number of the business account from which you want to grab the product
 * @param productId string the id of the product within the main catalog of the aforementioned business
 * @returns 
 */
/*window.WAPI.sendImageWithProduct = async function (imgBase64, chatid, caption, bizNumber, productId) {
    await WAPI.refreshBusinessProfileProducts();
    return await Store.Catalog.findCarouselCatalog(bizNumber).then(async cat => {
        if (cat && cat[0]) {
            const product = cat[0].productCollection.get(productId);
            const temp = {
                productMsgOptions: {
                    businessOwnerJid: product.catalogWid.toString({
                        legacy: !0
                    }),
                    productId: product.id.toString(),
                    url: product.url,
                    productImageCount: product.productImageCollection.length,
                    title: product.name,
                    description: product.description,
                    currencyCode: product.currency,
                    priceAmount1000: product.priceAmount1000,
                    type: "product"
                },
                caption
            }

            // var idUser = new Store.WidFactory.createWid(chatid);

            return Store.Chat.find(chatid).then(async (chat) => {
                var mediaBlob = window.WAPI.base64ImageToFile(imgBase64, "filename.jpg");
                // var mc = new Store.MediaCollection(chat);
                // mc.processFiles([mediaBlob], chat, 1)
                return await window.WAPI.procFiles(chat, mediaBlob).then(async mc => {
                    var media = mc.models[0];
                    Object.entries(temp.productMsgOptions).map(([k, v]) => media.mediaPrep._mediaData[k] = v)
                    await media.mediaPrep.sendToChat(chat, temp);
                    return chat.lastReceivedKey._serialized;
                });
            });
        }
    })
}

window.WAPI.base64ImageToFile = function (b64Data, filename) {
    var arr = b64Data.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = window.Base64 ? window.Base64.atob(arr[1]) : atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
};

/**
 * Send contact card to a specific chat using the chat ids
 *
 * @param {string} to '000000000000@c.us'
 * @param {string|array} contact '111111111111@c.us' | ['222222222222@c.us', '333333333333@c.us, ... 'nnnnnnnnnnnn@c.us']
 */
/*window.WAPI.sendContact = function (to, contact) {
    if (!Array.isArray(contact)) {
        contact = [contact];
    }
    contact = contact.map((c) => {
        return WAPI.getChat(c).__x_contact;
    });

    if (contact.length > 1) {
        window.WAPI.getChat(to).sendContactList(contact);
    } else if (contact.length === 1) {
        window.WAPI.getChat(to).sendContact(contact[0]);
    }
};

/**
 * Ghost forwarding is like a normal forward but as if it were sent from the host phone.
 */
/*window.WAPI.ghostForward = async function (chatId, messageId) {
    if (!chatId.includes('@g') && !chatId.includes('@c')) return false;
    var chat = Store.Chat.get(chatId);
    if (!Store.Msg.get(messageId)) return false;
    var tempMsg = Object.create(Store.Msg.get(messageId));
    var newId = window.WAPI.getNewMessageId(chatId);
    var extend = {
        ...JSON.parse(JSON.stringify(tempMsg)),
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: new Store.WidFactory.createWid(chatId),
        from: Store.Me.wid,
        isNewMsg: true
    };
    Object.assign(tempMsg, extend);
    const res = await Promise.all(Store.addAndSendMsgToChat(chat, extend))
    return res[1] == 'success';
}


/**
 * Forward an array of messages to a specific chat using the message ids or Objects
 *
 * @param {string} to '000000000000@c.us'
 * @param {string|array[Message | string]} messages this can be any mixture of message ids or message objects
 * @param {boolean} skipMyMessages This indicates whether or not to skip your own messages from the array
 */
/*window.WAPI.forwardMessages = async function (to, messages, skipMyMessages) {
    if (!Array.isArray(messages)) {
        messages = [messages];
    }
    const finalForwardMessages = messages.map(msg => {
        if (typeof msg == 'string') {
            //msg is string, get the message object
            return window.Store.Msg.get(msg);
        } else {
            return window.Store.Msg.get(msg.id);
        }
    }).filter(msg => skipMyMessages ? !msg.__x_isSentByMe : true);

    // let userId = new window.Store.UserConstructor(to);
    let conversation = window.Store.Chat.get(to);
    return await conversation.forwardMessages(finalForwardMessages)
};

/**
 * Create an chat ID based in a cloned one
 *
 * @param {string} chatId '000000000000@c.us'
 */
/*window.WAPI.getNewMessageId = function (chatId) {
    var newMsgId = new Store.MsgKey(Object.assign({}, Store.Msg.models[0].__x_id))
    // .clone();

    newMsgId.fromMe = true;
    newMsgId.id = WAPI.getNewId().toUpperCase();
    newMsgId.remote = new Store.WidFactory.createWid(chatId);
    newMsgId._serialized = `${newMsgId.fromMe}_${newMsgId.remote}_${newMsgId.id}`

    return newMsgId;
};


/**
 * Simulate '...typing' in the chat.
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {boolean} on true to turn on similated typing, false to turn it off //you need to manually turn this off.
 */
/*window.WAPI.simulateTyping = async function (chatId, on) {
    if (on) Store.ChatStates.sendChatStateComposing(chatId)
    else Store.ChatStates.sendChatStatePaused(chatId)
    return true
};

/**
 * Send location
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {string} lat latitude
 * @param {string} lng longitude
 * @param {string} loc Text to go with the location message
 */
/*window.WAPI.sendLocation = async function (chatId, lat, lng, loc) {
    loc = loc || '';
    var chat = Store.Chat.get(chatId);
    if (!chat) return false;
    var tempMsg = Object.create(Store.Msg.models.filter(msg => msg.__x_isSentByMe && !msg.quotedMsg)[0]);
    var newId = window.WAPI.getNewMessageId(chatId);
    var extend = {
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: chatId,
        isNewMsg: !0,
        type: "location",
        lat,
        lng,
        loc,
        clientUrl: undefined,
        directPath: undefined,
        filehash: undefined,
        uploadhash: undefined,
        mediaKey: undefined,
        isQuotedMsgAvailable: false,
        invis: false,
        mediaKeyTimestamp: undefined,
        mimetype: undefined,
        height: undefined,
        width: undefined,
        ephemeralStartTimestamp: undefined,
        body: undefined,
        mediaData: undefined,
        isQuotedMsgAvailable: false
    };
    Object.assign(tempMsg, extend);
    return (await Promise.all(Store.addAndSendMsgToChat(chat, tempMsg)))[1] === 'success' ? newId._serialized : false;
};

/**
 * Send VCARD
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {string} vcard vcard as a string
 * @param {string} contactName The display name for the contact. CANNOT BE NULL OTHERWISE IT WILL SEND SOME RANDOM CONTACT FROM YOUR ADDRESS BOOK.
 * @param {string} contactNumber If supplied, this will be injected into the vcard (VERSION 3 ONLY FROM VCARDJS) with the WA id to make it show up with the correct buttons on WA.
 */
/*window.WAPI.sendVCard = async function (chatId, vcard, contactName, contactNumber) {
    var chat = Store.Chat.get(chatId);
    var tempMsg = Object.create(Store.Msg.models.filter(msg => msg.__x_isSentByMe && !msg.quotedMsg)[0]);
    var newId = window.WAPI.getNewMessageId(chatId);
    var extend = {
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: chatId,
        isNewMsg: !0,
        type: "vcard",
        clientUrl: undefined,
        directPath: undefined,
        filehash: undefined,
        uploadhash: undefined,
        mediaKey: undefined,
        isQuotedMsgAvailable: false,
        invis: false,
        mediaKeyTimestamp: undefined,
        mimetype: undefined,
        height: undefined,
        width: undefined,
        ephemeralStartTimestamp: undefined,
        body: contactNumber ? vcard.replace('TEL;TYPE=WORK,VOICE:', `TEL;TYPE=WORK,VOICE;waid=${contactNumber}:`) : vcard,
        mediaData: undefined,
        isQuotedMsgAvailable: false,
        subtype: contactName
    };
    Object.assign(tempMsg, extend);
    return (await Promise.all(Store.addAndSendMsgToChat(chat, tempMsg)))[1] == "success"
};

window.WAPI.reply = async function (chatId, body, quotedMsg) {
    if (typeof quotedMsg !== "object") quotedMsg = Store.Msg.get(quotedMsg)
    var chat = Store.Chat.get(chatId);
    if (!chat) return false;
    let extras = {};
    if (quotedMsg) {
        extras = {
            quotedParticipant: quotedMsg.author || quotedMsg.from,
            quotedStanzaID: quotedMsg.id.id
        };
    }
    var tempMsg = Object.create(Store.Msg.models.filter(msg => msg.__x_isSentByMe && !msg.quotedMsg)[0]);
    var newId = window.WAPI.getNewMessageId(chatId);
    var extend = {
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: new Store.WidFactory.createWid(chatId),
        isNewMsg: !0,
        type: "chat",
        quotedMsg,
        body,
        ...extras
    };
    Object.assign(tempMsg, extend);
    const res = await Promise.all(await Store.addAndSendMsgToChat(chat, tempMsg));
    if (res[1] != 'success') return false;
    return res[0].id._serialized
};

/**
 * Send Payment Request
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {string} amount1000 The amount in base value / 10 (e.g 50000 in GBP = £50)
 * @param {string} currency Three letter currency code (e.g SAR, GBP, USD, INR, AED, EUR)
 * @param {string} note message to send with the payment request
 */
/*window.WAPI.sendPaymentRequest = async function (chatId, amount1000, currency, noteMessage) {
    var chat = Store.Chat.get(chatId);
    var tempMsg = Object.create(Store.Msg.models.filter(msg => msg.__x_isSentByMe && !msg.quotedMsg)[0]);
    var newId = window.WAPI.getNewMessageId(chatId);
    var extend = {
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: chatId,
        isNewMsg: !0,
        type: "payment",
        subtype: "request",
        amount1000,
        requestFrom: chatId,
        currency,
        noteMessage,
        expiryTimestamp: parseInt(new Date(new Date().setDate(new Date().getDate() + 1)).getTime() / 1000)
    };
    Object.assign(tempMsg, extend);
    await Store.addAndSendMsgToChat(chat, tempMsg)
};



/**
 * Send Customized VCard without the necessity of contact be a WA Contact
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {object|array} vcard { displayName: 'Contact Name', vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:;Contact Name;;;\nEND:VCARD' } | [{ displayName: 'Contact Name 1', vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:;Contact Name 1;;;\nEND:VCARD' }, { displayName: 'Contact Name 2', vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:;Contact Name 2;;;\nEND:VCARD' }]
 */
/*window.WAPI._sendVCard = function (chatId, vcard) {
    var chat = Store.Chat.get(chatId);
    var tempMsg = Object.create(Store.Msg.models.filter(msg => msg.__x_isSentByMe && !msg.quotedMsg)[0]);
    var newId = window.WAPI.getNewMessageId(chatId);

    var extend = {
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: chatId,
        isNewMsg: !0,
        isQuotedMsgAvailable: false,
    };

    if (Array.isArray(vcard)) {
        Object.assign(extend, {
            type: "multi_vcard",
            vcardList: vcard
        });

        delete extend.body;
    } else {
        Object.assign(extend, {
            type: "vcard",
            subtype: vcard.displayName,
            body: vcard.vcard
        });

        delete extend.vcardList;
    }

    Object.assign(tempMsg, extend);

    Store.addAndSendMsgToChat(chat, tempMsg)
};

/**
 * Block contact 
 * @param {string} id '000000000000@c.us'
 */
/*window.WAPI.contactBlock = async function (id) {
    const contact = window.Store.Contact.get(id);
    if (contact !== undefined) {
        await Store.Block.blockContact(contact)
        return true;
    }
    return false;
}
/**
 * Unblock contact 
 * @param {string} id '000000000000@c.us'
 */
/*window.WAPI.contactUnblock = async function (id) {
    const contact = window.Store.Contact.get(id);
    if (contact !== undefined) {
        await Store.Block.unblockContact(contact)
        return true;
    }
    return false;
}

/**
 * Remove participant of Group
 * @param {*} idGroup '0000000000-00000000@g.us'
 * @param {*} idParticipant '000000000000@c.us'
 */
/*window.WAPI.removeParticipant = async function (idGroup, idParticipant) {
    const chat = Store.Chat.get(idGroup);
    const rm = chat.groupMetadata.participants.get(idParticipant);
    await window.Store.Participants.removeParticipants(chat, [rm]);
    return true;
}


/**
 * Add participant to Group
 * @param {*} idGroup '0000000000-00000000@g.us'
 * @param {*} idParticipant '000000000000@c.us'
 */
window.WAPI.addParticipant = async function (idGroup, idParticipant) {
    const chat = Store.Chat.get(idGroup);
    const add = Store.Contact.get(idParticipant);
    await window.Store.Participants.addParticipants(chat, [add]);
    return true;
}

/**
 * Promote Participant to Admin in Group
 * @param {*} idGroup '0000000000-00000000@g.us'
 * @param {*} idParticipant '000000000000@c.us'
 */
/*window.WAPI.promoteParticipant = async function (idGroup, idParticipant) {
    const chat = Store.Chat.get(idGroup);
    const promote = chat.groupMetadata.participants.get(idParticipant);
    await window.Store.Participants.promoteParticipants(chat, [promote]);
    return true;
}

/**
 * Demote Admin of Group
 * @param {*} idGroup '0000000000-00000000@g.us'
 * @param {*} idParticipant '000000000000@c.us'
 */
/*window.WAPI.demoteParticipant = async function (idGroup, idParticipant) {
    await window.Store.WapQuery.demoteParticipants(idGroup, [idParticipant])
    const chat = Store.Chat.get(idGroup);
    const demote = chat.groupMetadata.participants.get(idParticipant);
    await window.Store.Participants.demoteParticipants(chat, [demote])
    return true

}

/**
 * @private
 * Send Sticker
 * @param {*} sticker 
 * @param {*} chatId '000000000000@c.us'
 * @param metadata about the image. Based on [sharp metadata](https://sharp.pixelplumbing.com/api-input#metadata)
 */
/*window.WAPI._sendSticker = async function (sticker, chatId, metadata) {
    var chat = Store.Chat.get(chatId)
    let stick = new window.Store.Sticker.modelClass();
    stick.__x_clientUrl = sticker.clientUrl;
    stick.__x_filehash = sticker.filehash;
    stick.__x_id = sticker.filehash;
    stick.__x_uploadhash = sticker.uploadhash;
    stick.__x_mediaKey = sticker.mediaKey;
    stick.__x_initialized = false;
    stick.__x_mediaData.mediaStage = 'INIT';
    stick.mimetype = 'image/webp';
    stick.height = (metadata && metadata.height) ? metadata.height : 512;
    stick.width = (metadata && metadata.width) ? metadata.width : 512;
    await stick.initialize();
    return await stick.sendToChat(chat);
};

window.WAPI.getFileHash = async (data) => {
    let buffer = await data.arrayBuffer();
    var sha = new jsSHA("SHA-256", "ARRAYBUFFER");
    sha.update(buffer);
    return sha.getHash("B64");
};

window.WAPI.generateMediaKey = async (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

/**
 * @param type: The type of file.  {'audio' | 'sticker' | 'video' | 'product' | 'document' | 'gif' | 'image' | 'ptt' | 'template' | 'history' | 'ppic'}
 * @param blob: file
 */
/*window.WAPI.encryptAndUploadFile = async function (type, blob) {
    let filehash = await window.WAPI.getFileHash(blob);
    let mediaKey = await window.WAPI.generateMediaKey(32);
    let controller = new AbortController();
    let signal = controller.signal;
    let encrypted = await window.Store.UploadUtils.encryptAndUpload({
        blob,
        type,
        signal,
        mediaKey
    });
    return {
        ...encrypted,
        clientUrl: encrypted.url,
        filehash,
        id: filehash,
        uploadhash: encrypted.encFilehash,
    };
};

/**
 * Send Image As Sticker
 * @param {*} imageBase64 A valid webp image is required.
 * @param {*} chatId '000000000000@c.us'
 * @param metadata about the image. Based on [sharp metadata](https://sharp.pixelplumbing.com/api-input#metadata)
 */
/*window.WAPI.sendImageAsSticker = async function (imageBase64, chatId, metadata) {
    let mediaBlob = await window.WAPI.base64ImageToFile(
        'data:image/webp;base64,' + imageBase64,
        'file.webp'
    );
    let encrypted = await window.WAPI.encryptAndUploadFile("sticker", mediaBlob);
    return await window.WAPI._sendSticker(encrypted, chatId, metadata);
};

/**
This will dump all possible stickers into the chat. ONLY FOR TESTING. THIS IS REALLY ANNOYING!!
 */
/*window.WAPI._STICKERDUMP = async function (chatId) {
    var chat = Store.Chat.get(chatId);
    let prIdx = await Store.StickerPack.pageWithIndex(0);
    await Store.StickerPack.fetchAt(0);
    await Store.StickerPack._pageFetchPromises[prIdx];
    return await Promise.race(Store.StickerPack.models.forEach(pack => pack.stickers.fetch().then(_ => pack.stickers.models.forEach(stkr => stkr.sendToChat(chat))))).catch(e => { })
}


window.WAPI.getLastSeen = async function (id) {
    if (!Store.Chat.get(id)) return false;
    let { presence } = Store.Chat.get(id)
    await presence.subscribe();
    return presence.chatstate.t;
}

window.WAPI.getUseHereString = async function () {
    if (!window.l10n.localeStrings['en']) {
        const originalLocale = window.l10n.getLocale();
        await window.l10n.init('en');
        await window.l10n.init(originalLocale)
    }
    return window.l10n.localeStrings[window.l10n.getLocale()][0][window.l10n.localeStrings.en[0].findIndex(x => x.toLowerCase() === 'use here')]
}

window.WAPI.getAmountOfLoadedMessages = function () {
    return Store.Msg.models.length;
}

WAPI.getChatWithNonContacts = async function () {
    return Store.Chat.models.map(chat => chat.contact && !chat.contact.isMyContact ? chat.contact : null).filter(x => x && !x.isGroup).map(WAPI._serializeContactObj)
}

window.WAPI.cutMsgCache = function () {
    Store.Msg.models.map(msg => Store.Msg.remove(msg));
    return true;
}

window.WAPI.getHostNumber = function () {
    return WAPI.getMe().me.user;
}

//All of the following features can be unlocked using a license key: https://github.com/open-wa/wa-automate-nodejs#license-key
window.WAPI.getStoryStatusByTimeStamp = function () { return false; }
window.WAPI.deleteAllStatus = function () { return false; }
window.WAPI.getMyStatusArray = function () { return false; }
window.WAPI.deleteStatus = function () { return false; }
window.WAPI.setGroupToAdminsOnly = function () { return false; }
window.WAPI.setGroupEditToAdminsOnly = function () { return false; }
window.WAPI.postTextStatus = function () { return false; }
window.WAPI.postImageStatus = function () { return false; }
window.WAPI.postVideoStatus = function () { return false; }
window.WAPI.onRemovedFromGroup = function () { return false; }
window.WAPI.onContactAdded = function () { return false; }
window.WAPI.sendReplyWithMentions = function () { return false; }
window.WAPI.clearAllChats = function () { return false; }
window.WAPI.getCommonGroups = function () { return false; }
window.WAPI.setChatBackgroundColourHex = function () { return false; }
window.WAPI.darkMode = function () { return false; }
window.WAPI.onChatOpened = function () { return false; }
window.WAPI.onStory = function () { return false; }
window.WAPI.getStoryViewers = function () { return false; }
window.WAPI.onChatState = function () { return false; }
window.WAPI.getStickerDecryptable = function () { return false; }
window.WAPI.forceStaleMediaUpdate = function () { return false; }
window.WAPI.setProfilePic = function () { return false; }
window.WAPI.setGroupDescription = function () { return false; }
window.WAPI.setGroupTitle = function () { return false; }
window.WAPI.tagEveryone = function () { return false; }

/**
 * Patches
 */
/*window.WAPI.sendGiphyAsSticker = function () { return false; }
window.WAPI.getBlockedIds = function () { return false; }*/

window.WAPI.quickClean = function (ob) {
    var r = JSON.parse(JSON.stringify(ob));
    if (r.mediaData && Object.keys(r.mediaData).length == 0) delete r.mediaData;
    if (r.chat && Object.keys(r.chat).length == 0) delete r.chat;
    Object.keys(r).filter(k => r[k] == "" || r[k] == [] || r[k] == {} || r[k] == null).forEach(k => delete r[k]);
    Object.keys(r).filter(k => r[k] ? r[k]._serialized : false).forEach(k => r[k] = r[k]._serialized);
    Object.keys(r).filter(k => r[k] ? r[k].id : false).forEach(k => r[k] = r[k].id);
    return r;
};

/*window.WAPI.pyFunc = async function (fn, done) {
    return done(await fn())
}

/**
 * If you're using WAPI.js outside of open-wa: https://github.com/open-wa/wa-automate-nodejs/ then you can use the following code to enable the locked features above if you've got a license keu.
 * 
 * THIS WILL NOT WORK OUT OF THE BOX. YOU WILL NEED TO DISAVLE CONTENT SECURITY POLICY (WHICH IS HIGHLY DISCOURAGED AND THE MAINTAINERS OF THIS CODE ASSUME NO RESPONSIBILITY FOR AY SECURITY VUNERABILITIES RESULTING IN DISABLING CSP)
 * 
 * This is meant to act as an example of how to enable new features in wapi.js. You should implement this outside of the WA WEB browser context.
 * 
 * Please use google to find out how to disable CSP. You can also use this extension: https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden/related?hl=en
 */
/*window.WAPI.addLicenseKey = async function (key) {
    const pkgR = await fetch('https://raw.githubusercontent.com/open-wa/wa-automate-nodejs/master/package.json');
    const pkg = await pkgR.json();
    const body = JSON.stringify({
        number: Store.Me.me._serialized,
        key
    });
    const r = await fetch(pkg.licenseCheckUrl, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body
    })
    const x = await r.text()
    return eval(x);
}*/

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