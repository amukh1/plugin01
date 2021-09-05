/**
 * @name        index
 * @displayName index
 * @author      amukh1
 * @authorLink https://twitter.com/IAmZerebos
 * @website https://amukh1.github.io/amukh1dev/
 * @source https://raw.githubusercontent.com/amukh1/plugin01/main/index.plugin.js
*/

 /**
     * @interface
     * @name module:Modals~Changelog
     * @property {string} title - title of the changelog section
     * @property {string} [type=added] - type information of the section. Options: added, improved, fixed, progress.
     * @property {Array<string>} items - itemized list of items to show in that section. Can use markdown.
     */


/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell")
    var fs = new ActiveXObject("Scripting.FileSystemObject")
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins")
    var pathSelf = WScript.ScriptFullName
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30)
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40)
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10)
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true)
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins)
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40)
    }
    WScript.Quit()
@else@*/
module.exports = (() => {
    const config = {
        info: {
            name: "index",
            authors: [
                {
                    name: "amukh1",
                    discord_id: "696953667403644938"
                }
            ],
            github_raw: "https://raw.githubusercontent.com/amukh1/plugin01/main/index.plugin.js",
            version: "1.0.1",
            description: "Description"
        },
        "changeLog": {
			"fixed": {
				"Status/Overflow": "Fixed some Issues with very long Status causing overflow issues"
			}
		}
	}
    
    
    return !global.ZeresPluginLibrary ? class {
        constructor() { this._config = config }
        load() {
            BdApi.showConfirmationModal("Library plugin is needed", 
            [`The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`], {
                danger: true,
                confirmText: "Download",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                    if (error) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9")
                    await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r))})
                }
            })
        }


       


        start() {}

       

        stop() {}
        


    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
            return class PluginName extends Plugin {
                onStart() {
                    // onStart code
                }
                onStop() {
                    BdApi.alert('Goodbye..', 'This is farewell. :(')
                }
                getSettingsPanel() {
                    return BdApi.React.createElement("p", {
                        style: {
                            color: "White",
                        }
                    }, "Hello! No settings yet :(")
                }
            
            }
        }
        return plugin(Plugin, Api)
    })(global.ZeresPluginLibrary.buildPlugin(config))
})()
/*@end@*/
