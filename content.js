let interval = setInterval(() => {

    header = document.querySelector("._1-qgF");
    console.log("looking for a chat header...");

    if (header) {
        console.log("chat header found my app...");
        displayButton();
    }
}, 2000);

setTimeout(() => {
    var buttonsGroup = document.getElementsByClassName("_1ljzS pnYZD")[0];
    var div = document.createElement("div");
    div.classList = "_2n-zq";
    div.id = "upload-all-contacts";
    div.addEventListener("click", openBulkSenderPopup, false)
    var button = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX-" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30" height="30"><path fill="currentColor" d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path></svg></span></div><span></span>`;
    div.innerHTML = button;
    buttonsGroup.insertBefore(div, buttonsGroup.children[0]);
},20000);

function openBulkSenderPopup(){
    loadingDiv();
}

function displayButton() {

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
}

function downloadAllContactsOfGroup() {
    var tableData = "";
    var tableToExcel;
    var finalNumberArray = document.getElementsByClassName(" fKfSX")[0].innerText.split(",");

    function createExcelTemplate() {
        finalNumberArray.forEach((number) => {
            tableData += "<tr><td>" + number + "</tr></td>"
        });

        tableToExcel = (function () {
            var uri = 'data:application/vnd.ms-excel;base64,'
                , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>' + tableData + '</table></body></html>'
                , base64 = function (s) {
                    return window.btoa(unescape(encodeURIComponent(s)))
                }
                , format = function (s, c) {
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
}


var closeBtn;
function loadingDiv () {
    
    var strVar="";
    strVar += "    <div class=\"outer-box\">";
    strVar += "      <div class=\"top\">";
    strVar += "          <button class=\"cancle-btn\">x<\/button>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"upper-box\">";
    strVar += "          <span class=\"heading\">";
    strVar += "              <h4>Please enter your number<\/h4>";
    strVar += "          <\/span>";
    strVar += "         <textarea autofocus><\/textarea>";
    strVar += "         <hr>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"lower-box\">";
    strVar += "        <span class=\"lower-box-span\">";
    strVar += "            <h4 style=\"margin-top: 5px;\">OR Upload an excel sheet<\/h4>";
    strVar += "            <input type=\"file\" id=\"myfile\" name=\"myfile\">";
    strVar += "            <button class=\"send-btn\">Send<\/button>";
    strVar += "        <\/span>";
    strVar += "      <\/div>";
    strVar += "      <div class=\"lowest\"><\/div>";
    strVar += "    <\/div>";
    

    const loadingDiv = document.createElement("div");
    loadingDiv.innerHTML = strVar;
    loadingDiv.setAttribute("id", "loadingDiv");
    document.body.appendChild(loadingDiv);

    closeBtn = document.querySelector(".cancle-btn");
    closeBtn.addEventListener("click", cancelClose, false);
}

function cancelClose () {
    const loadingDiv = document.getElementById("loadingDiv");
    loadingDiv.remove();
}

