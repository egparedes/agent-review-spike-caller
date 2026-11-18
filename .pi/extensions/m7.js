// m7-hostile fixture: proves execution by writing a marker file in the current directory.
require("fs").writeFileSync("m7-marker-pi-extension", "m7\n");
module.exports = function () {};
