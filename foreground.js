/*let interval = setInterval(() => {

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
    div.id = "download-all-contacts";
    //div.addEventListener("click", downloadAllContactsOfGroup, false)
    var button = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX-" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="currentColor" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path></svg></span></div><span></span>`;
    div.innerHTML = button;
    buttonsGroup.insertBefore(div, buttonsGroup.children[0]);
},2000);

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
                var button = `<div aria-disabled="false" role="button" tabindex="0" class="_1XaX-" data-tab="9" title="Download All Contacts" aria-label="Download All Contacts"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path fill="currentColor" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path></svg></span></div><span></span>`;
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
*/