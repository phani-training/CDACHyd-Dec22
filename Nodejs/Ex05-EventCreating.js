//Events are actions or notifications done by the user. 
//Events need to be registered, then triggered and an appropriate event handler should be created to handle the notifications. 
//Event handlers will be created by the user of our events. 
//Every event raising object should have the event first, logic on when to raise the event. 
const emitter = require("events");//events module contain the class called EventEmitter thru which U can create Custom events and handlers. 

const button = new emitter();//object that will handle events
//Register the event that U want to handle, in this example, click is the event that we want to handle, and 2nd arg will be the handler. 
button.on("test", (msg)=>{
    console.log(msg)
})//Registered for an Event...

button.on("click", (msg) =>{
    console.log(msg.toUpperCase())
})
//U raise the event using emit function. The event name and the arg for the event, in our case, a text message. 
button.emit("test", "My First test on HTML");
button.emit("test", "My test on JS");
button.emit("test", "My test on Nodejs");
button.emit("click", "My Fouth click");
button.emit("click", "My Fifth click");