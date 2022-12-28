# Express Framework
- Express a 3rd party Node Framework for building rich internet applications in an express manner. 
- The Framework provides APIs to create Web Apps in simple and yet effective manner. 
- Basically used for creating REST API. 
- REST API allows to create Functions that can be accessible in a platform independent manner using HTTP. 
- HTTP verbs like GET(Read), PUT(Update), POST(Create/Add), DELETE(Delete) will determine the flow of data from the server to the Client and vice versa.
- Express is faster and is used by large scale Applications. 
- U need to install the Express package using a tool called npm.
- npm stands for NODE PACKAGE MANAGER. 

# What is NPM?
- It is very similar to Github that allows to publish nodejs packages for the developer community.
- It is open source and once the developer creates a package or developes something that he wishes to publish for the developer Community, then he will push the package to this large repository of Node packages that are available for distributed Environment.

# How to install EXPRESS
1. Create a new Folder for UR Project
2. Optionally create a package.json file that works like Config settings to UR project. 
3. Install the express in ur folder using the command: npm install express
4. The Express will be available under a folder called as node_modules.
5. Along with itself, it will also install all the dependencies of express which are available as additional packages.  

# Example of Express Application.
1. When the HTML form POST the data to the Application, it will post it as BODY. The term "body of the form" implies the inputs that User gives for the form submit. 
2. In express, we need a body-parser to parse(process) the body. If no parser is provided, then the body will not be created in Express. In this case, the body if refered, it will be undefined. 