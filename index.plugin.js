//META{"name":"ExampleLibraryPlugin"}*//

class ExampleLibraryPlugin {
    getName() {return "Index";}
    getDescription() {return "Index";}
    getVersion() {return "1.0.0";}
    getAuthor() {return "Amukh1";}

    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/amukh1/plugin01/main/index.plugin.js");
    }

    stop() {

	}
}        
