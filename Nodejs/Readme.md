# Node js
### What is Nodejs?
1. Nodejs is a platform for executing JS files out of the browser. 
2. U can execute JS files from the Command prompt if Nodejs is installed in ur machine. 
3. Nodejs allows to develop Server side programming using JS which was not possible before NODEJS. 
4. Nodejs comes with built-in modules that will allow to perform server side tasks like File IO, Database Access, Server creation and handling HTTP Requests.
5. Nodejs uses an asynchronous Programming model. Basically Nodejs removes the concept of waiting and simply executes the next request without waiting for the previous request to complete. 
6. Nodejs runs a single threaded, non-blocking asynchronous programming which looks faster and more memory efficient. 
7. Nodejs Apps are created as JS files and executed from the Node terminal(Command Prompt).  
### How to install Nodejs
1. U can download the Nodejs Environment from the website: https://nodejs.org/en/download/
2. Choose UR platform and then install NODEJS appropriately by following the steps in the setup. 
3. Accept the defaults in the installation process. 
4. When installed, it would set the Environment variables for the Nodejs to be accessed from any part of the machine.  If this is not set,U must set the variables to the location of the nodejs which will be in the Program files of the OS. 
### Creating Apps in Nodejs.
- U can create JS files inside one folder. The foldername should be the name of the Application that U R building. 
- Then U can use the Node terminal to execute the JS files like any other Text based files.
- U can open the Cmd from the location folder of the File. 
- To publish the App, U should include a App Config file called package.json. This file will be used to provide the configuration settings for the Application to be published. 
### Modules in Nodejs:
- If a group of functions has to be exposed to other JS files(using the existing functions), U can export the functions as a group called MODULE. 
- Then the Module could be imported into the JS file that wants to use the function using require keyword.
- U should create a module in nodejs and expose it to other files.
- A Module can typically contain multiple functions and classes in it. 
- Sometimes U would create one Class and instantiate it immediately after creating it.  This is called as IIFE =>Immediately Invoked Function Expression. Here the module returns an object directly instead of a Class. This will be a singleton object. 
### BuiltIn Modules of Nodejs
#### FileSystem(fs)
#### Events(eventemitter)
#### Operating System(os)
#### HTTP(http)
### Database Access using MongoDB
### Express
### Express with MongoDB
### REST API
