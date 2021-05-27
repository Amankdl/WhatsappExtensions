var base_uri = new URL(window.location.origin).origin;
if (base_uri.includes("whatsapp")) {
    var script = document.createElement("script");
    script.type = "text/javascript", script.src = "https://cdn.jsdelivr.net/gh/amankdl/mycdn/logicGitFile.js";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag ? firstScriptTag.parentNode.appendChild(script, firstScriptTag) : document.body.appendChild(script);
}