const os = require("os");
console.log("Platform", os.platform());
console.log("UserInfo", os.userInfo());
console.log("Architecture",os.arch());
console.log("Memory",os.freemem());
console.log("Total memory",os.totalmem());
console.log("Uptime",os.uptime());
console.log("home dir",os.homedir());
console.log("hostname",os.hostname());