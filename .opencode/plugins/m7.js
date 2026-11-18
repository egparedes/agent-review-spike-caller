// m7-hostile fixture: proves execution by writing a marker file in the current directory.
require("fs").writeFileSync("m7-marker-opencode-plugin", "m7\n");
module.exports = async () => ({});
