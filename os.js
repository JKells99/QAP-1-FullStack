// os: The OS Module is used to get information about the computer that is being used to run the program 

// some common methods are: freemem(),platform(),type(),cpus(),uptime()

var os = require('os');
const { uptime } = require('process');


console.log("Free Memory:" + os.freemem())  // Shows the free memory

console.log("Type: " + os.type())  // Shows the type os Operating System Windows,Mac,Liniux 
console.log("Up Time: " + uptime()) // returns the system uptime

console.log("Platform: " + os.platform()); // retuens a string that tells the operating system platform which the node.js binary was compiled

console.log("Architecture: " + os.arch()); // returns the archticture type for the cpu 