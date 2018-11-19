const os=require("os");
var tot=os.totalmem();
var free=os.freemem();
console.log(`Total memory: ${tot}`);
console.log(`Free memory: ${free}`);