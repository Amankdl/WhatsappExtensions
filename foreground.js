/*const timer = setInterval(general, 1e3);

function general() {
    console.log("Script running");
    (getBySelector("div.app") || getBySelector("div.two") || getBySelector("div.three") || getBySelector("div.pane-side")) && (loadModule(), clearInterval(timer))
}

function loadModule() {
    if (!window.Store || !window.Store.Msg) {
        (function() {
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
                    { id: "WapQuery", conditions: (module) => (module.queryExist) ? module : ((module.default && module.default.queryExist) ? module.default : null) },
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
                window.Store.Chat.modelClass.prototype.sendMessage = function(e) {
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
                function(o, e, t) {
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
}))*/

//var main_timer

/*
e = "918696181616@c.us"
t = document.getElementById("getImgs").files[0]
n = "Hello"*/

//window.sendImage("918696181616@c.us", document.getElementById("media-file").files[0])