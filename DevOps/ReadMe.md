# DevOps Training by Phaniraj @9945205684
### Subtopics:
1. What is DevOps
2. Docker
3. Jenkins
4. Microservices.
5. Kubernetes.

## What is DevOps?
There are 2 teams who collaborate in the Project LifyCycle. Developer Team and the Operations Team. 
- What is development?
    - Development means the following things:
        1. Requirement Gathering -> The team gets all the inputs required for the Application development. 
        2. Design -> Based on the inputs given by the Customer, the team will design a Doc that tells about the Application, its features, i1ts limitations and if required a POC(Proof of Concept). If required, any additional training would also be provided. 
        3. Unit Tests-> Unit tests are created to provide the testing as per the requirement of the Application, in this case the App is yet to be developed and programmers develop the Application later to pass the test cases.
        4. Coding-> The time where the Application building process happens. The code is developed to satisfy the Test cases created. 
        5. Integration Process-> Final build with release mode will be created, all bugs are fixed, all configs are set and all the dependencies are fixed.
        6. Deployment -> The Deployment will be in collaboration with the IT Team which takes care of the Operations of the Users in the client location.
    - The Project manager, Team leads, Tech leads, Senior Programers, Programmers and Testers will be the part of the Development team.

- What is Operations?
    - The Operations team will do the following things:
        1. Automation Testing : This testing is not Unit Testing, it is E2E Testing that is done to see the application flow in the executing Environment. These tests are triggered using some commands and tools like Jenkins that will automate the testing and integregration process.
        2. App Evaluation: This involves Quality Testing of the Application including its performance, Threshold points and other technical aspects of the Application. 
        3. Integrations:  Includes the plumbing work of various servers like Databases, Business Units, Application Servers and Cloud servers that are combined to make UR Application as one unit.
        4. Final Deployment: The hands shake of various stake holders will happen and the Application is finally tested by the END USERS of the Application.
    - The Application evauation happens with one UAT(User Acceptance Tests) member from the Customer side who acknowledges the process and the Application execution. He/She will ensure that the Application meets their requirments in an expected manner. 
    - Automation Testers, Product evaluators, UAT Engineers and Customer users will be the part of the Operations teams. 
- Challenges in this setup:
    - Many a time, the Operations team are not aware of the Technical parts required for the Application, if any minor issues like config changes are to be involved, they dont have the expertise to solve those problems. 
    - The integration config files will be huge and it might take days to resolve any bugs.

- The solution for all the above problems is Developement + Operations to go together.
- Dev + Ops is what is called as DevOps. With this the developer team and the Operations team work together from the begining during the Sprint Cycles and do colaborative work on resolving many deployment issues and helping each other in understanding both the sides of the Project execution. 

## Why Devops?
Before DevOps, the Development and Operations were working in complete Isolation. Here Testing and Deployment were isolcated activities done after the development. With this, it consumed more time than the regular short build cycles. Unexpected challenges used to pop up with no clue from the development team. Manual Code Deployement used have some human errors in the production environment that used to take days to resolve. 
With DevOps, Software delivery is fast and easy. It also increases the deployment easiness. With the devOps history, it has been found that the deployment process has increased by over 20% of the Total Application Delivery. Most of the processes are automated with high end tools to do major works. These tools like Git, Docker, Jenkins, Kubernetes, helps in fastening up the activities during the development and deployment. 

## How Applications are deployed in Real Time?
With the Agile Development methodology, U can plan the Sprints. Sprints are short span targets that are supposed to be met with the scope of development to be minor. Sprint is a duration of implementing a certain feature or a task. There will be Sprint planning that includes what task has to be given priority, who the developers are in the Sprint cycles, and which Sprint should take the priority. 
Each Sprint is scheduled to be independent of the other. The participants of a Sprint might include 1 Lead, 2 Sr. Engineers, 3 Jr. Engineers and a Tester. Each sprint will span for 2 to 3 weeks. 
Tasks will be allocated to the developers in the Sprint plan and the execution of the Sprint happens. During this time, the development and the tester will complete the Sprint. Execution starts on a precise date and ends on the pre determined date. The Operations team will start collaborating with the developer team initially itself. The Dev Team will work with the Ops team to provide the setup required for the Application deployment. Tools like Git, Jenkins and Kubernetes will be scoped to hold the Applications. 

### Practical Scenairo
1. The Task: Get the Employees from a Database. 
2. Requirement: Mock a Database 
3. Implementation: U should call the object's function on the database. U should assert the results and Ensure that the expected no of Employees are matching to the Employees of the mocked database. 
4. The ops team will use tools like JENKINS to keep a watch on the Pushes made to the Code Repo. For every push that is recieves, the CITTool will build the Code, automate the tests and gives the report to the all the stake holders of the project. The Cycle will continue for every push that is made to the Code Repo. once the code is built successfully, the Code is pushed to a POST BUILD process, the code will be set up in a container like Docker and will be managed by Containerization tool calle Kubernetes and once the product is ready will be pushed to the Main Location(Cloud Environment) for the Usage by the Customers.  
5. If the code build fails, the tol will generate the Emails to all the stake holders and will wait for the other builds to continue. At this time, the developer and his team has to rework to ensure that the build does not fail. 
6. The build process inside JENKINS will not only be the building of UR App code, it also involves all the rules and regulations defined by the organization. If any of the rules are broken in the code, the build fails. 

### Benifits of DevOps?
1. Productivity: The Dev Team and the Ops Team will work in collaboration at all levels. Any Software that is created will go thru the cycle of events under the supervison of the DevOps Engineer. Building, Testing and Integration will be the part of the Cycle. Any failures at any level will be known in the short span of time and all the team members will put their efforts to quickly resolve the issues as early as possible. With this, the teams are aware of the issues and quickly resolve them and make the Deployment smoother. With this, it gives low Failure rates compared to any other Deployment methodologies.  
2. Reproducability: As we version everything before it is deployed to the Production machine, it is easy to revert back to the most stable version since the Application is deployed. So any unwanted issues are resolved in much faster manner.  Here old successfull Application is reproduced back if the new build fails. 
3. Maintainability: With large no of tools avaialable with DevOps and most of these tools are opensourced and free licensed, it is easy to maintain. To store the CODE, we use Git, to build the Application cycle we use JENKINS, to place the code in the Production Like Environment, we use containers like Dockers, manage multiple dockers using containerization tool like Kubernetes(K8s) and finally push to the Closed Curcuit Environment like CLoud managed by reliable Organizations like Amazon, MS and Oracle. 

### What kind of Apps use DevOps?
DevOps should be used by large Distributed Computing Apps like E-Comm Sites and Apps hosted in Clound based Environment are suited to be worked on DevOps. It is also well suited for Agile Dev methodologies where the larger app is cut into small, but rich in feature tasks and subtasks and the builds are expected to be frequent. In such cases, the changes are expected to be more and frequent(2 to 3 weeks)  and the build process is good if automated so that the build handling will be internally done by the System rather than one resource(QAT Engineer) managing it. 

### DevOps Automation Tools:
After the Development is completed, most of the operations related to build, test, integration and deployment and maintainability is done using tools that are available in the Industry, For these things, we dont need support from the developer team. These workds are done by Non developers with a fair knowledge of Development if not expertise. Many of these tasks are routine in nature so we dont need a real time resource to monitor it again and again. U dont need any human intervention for most of the tasks. 
Deployment Automation tools: JENKINS is used for Continuous Integration and Testing. 
Logging Tools: Log4J and Splunk that solves issues like Storing, Analytics and logging of the Application procedure to a common stand point. 
Containerization Tools: With large no of Docker apps(microservices) running, we can group the docker containers into a cluster node inside K8s and allow it to handle the monitoring of the Application including failures and providing alternate backups.

# Docker 
Docker is a centralized platform for packaging, deploying and running of the Applications in a closed environment that is created like the Development environment. It is very similar to VMs but architecturally they are different. It is a software platform that makes UR App building process smoother which includes building, running, managing and distributing Apps in a simple manner. It can virtualize the OS of a Computer or any Application/Sofware that U want to use in ur Application.
A Containers are blocks within the Docker Environment that holds an EXE File inside it. It also contains the infrastructure required for the Application.

### How Docker Works?
- Dockers use the concept of Containers on the HOST Machine. It will create a LINUX Kernel on the existing OS and make the Applications run on this virtualized Environment. Each container contains only the required infrastructure for a given Application, It cannot hold multiple apps on a single container. Docker allows developers to pack the Application and ship it into a single package.  All other things required(Hardware and its resources) will be taken from the host OS or the Cloud Environment and it will generate the required storage and space for the application to run. 

### How VMs work?
It works similar to docker but it shares the Memory of the host and also the kernel of the Host machine. it creates a virtual environment on which a OS will be installed and on which the Application that U want to execute can be installed. Its like OS inside another OS. 

### Differences:
1. Containers use the same kernel of the Host Environment but VMs use independent OS Kernels.
2. Containers have only the bare minimal infrastructure of an App to run whereas a VM will host a complete OS in it where U can not only run UR application but also run other apps that may or may not be required for UR Application. 
3. Docker Containers are common platforms for all kinds of OS as it uses the Common Linux kernel which other OS can/will install. They are hense more adaptable compared to VMs. 

### Installing Docker in UR machine:
1. Install the WSL(Windows SubSystem For Linux), which is the prerequisite for installing Docker in Windows Machine. U run a command: wsl --install U should be running the terminal as an Adminstrator.
2. After restarting the machine, U can install the Docker App thru the setup that U can download from the Docker Website. It can be downloaded from https://www.docker.com/products/docker-desktop/
3. Docker immediately starts at the bootup and wait for the Docker to start.The green ribbon at the left bottom side will indicate that the Docker is running successfully. 
4. The purpose of the WSL is only for Windows OS. As Docker needs Linux Kernel for its execution, we need to install this package. 

### Download the MongoDb and use it.
Create a volume to store UR mongodb data. 
'''
docker volume create --name= MyContainer
'''
Run the following command to download the Mongodb container in our Docker
'''
docker run -it --rm --name mongoContainer mongo:latest mongod
'''
Open a new terminal and run the command to interact with Mongodb:
'''
docker exec -it mongoContainer mongosh
'''

### Creating Docker Images:
#### Docker image on a Java Application:
1. Create a new Folder and give a name to it as per UR Application Requirement.
2. Create the required Java Files inside it. 
3. Build the application locally and test it.  
4. After the Application is tested locally, U can ship it to the Docker
5. Create a file called Dockerfile, a Text file with no extension. Provide all the instructions required for the Application to build in it. (File is shared). 
6. Build the Docker Image by using the following command:
```
docker build -t java-app . 
``` 
7. After the docker builds UR Image, its time to run the Application:
```
docker run java-app
```
#### options :
1. -t =>Flag to tell the docker to allocate the Virtual Terminal within the container to start UR Program.
2. -i =>Flag to tell the Docker to execute the Application in interactive mode, usefull when U have to take inputs from the user.  

### How realtime apps work?
1. Developer develops the required Task in his Environment and get it approved with PRTI(Personal Review and Team Inspection). 
2. The Developer pushes the code to the Code Repository(Git, Bitbucket or TFS).
3. Once the Code is pushed, a CIT will come into picture which pulls the code from the Repo and builds in a containerized environment or production environment and once it is built successfully, it will push the Application to a container like Docker or a Cloud Production Environment. 
------------------------------------------------------------------------------------------------
# JENKINS:
### What is continuous Integration?
An Orchestration of a Chain of activities to be performed when a code is pushed to the Repo and rest of the operations are taken up automatically that helps in pipelineing the application build, test and deployement and also do some operational sequences all done without an exclusive resource to monitor it. The CIT is responsible to keep track on any code change that has happened in the Repo, triggering a series of tasks and finally does a post build task before terminating the Execution. These series of tasks could be pulling the code, setting the environment, build the code, run the test cases, run the E2E Test cases, and finally push the completed Application into a designated storage place which could be a Container or a Clound AWS Environment. <br/>
The Most popular CIT is Jenkins. 
### How does this work?
It is basically a server side web app that runs on a Web server like Apache TomCat. It can run on multiple platforms like Windows, Mac or Linux. To use the Jenkins we need to create pipelines or a group of tasks which work like a chain of operations. This is a continous process which will monitor the Environment all the time. Jenkins will internally use 3rd party tools to build, test, monitor, raise reports, enforce coding rules and regulations, update changes and even trigger emails to all the stake holders of the product.  
### How to install and run Jenkins to build a simple Java Application. 
1. U should have JDK 8.0 or later. Set the Environment variables like JAVA_HOME, JRE_HOME and Path. 
2. Download the Jenkins from the Website. 
3. During the Installation, the Wizard will ask for the JRE Location. 
4. U can set the port no for the jenkins, default is 8080. 
5. U will login to the jenkins Application. Initially U will provide a Preset password that is available in the location of C:\ProgramData\Jenkins\.jenkins\secrets\initialAdminPassword. After logging in, U can reset the password as per UR needs. 
6. For the very first time, Jenkins will ask UR permission to install plugins required for UR Environment. For real time apps, there are lot of tools that must be installed, but for our Application git would be enough. 
7. After the installation is done, the browser opens with the dashboard of the Jenkins where Users can add new Jobs or Tasks for the Jenkins to perform. 

### Create a new Job in Jenkins:
1. Create the Application that U want to build in Jenkins
2. Create a new job in the dashboard by clicking new Item.
3. Define a Desc about UR Task. 
4. Select the location of the source code of UR Application which can be either a git repo or a local folder. Select Custom Workspace by clicking Advanced Button in the General section. 
5. In the Build Steps, select the Windows Command bat file and provide the required commands to execute:
```
javac ./FileName.java
java FileName
```
6. Additional Settings like POST BUILD could be set to run certain test cases or create the App in a docker container. 
7. U could also make the App build periodically by setting the H, M, D W. Refer the HELP Window.
-----------------------------------------------------------------------------------------------
# Microservices
1. They are dividing UR large scale Application into small units which are independent of another. In our current scenario, we might develop very large and complex apps that take a lot of time to build and deploy. The Code building process would take time and deployment will be difficult. To reduce these complexities companies are moving towards microservices where UR App is cut into small but independent executable Services that can be easily contained inside a Container like Docker and published. 
This is easy to develop as U will be creating smaller modules and services are small so that it is easy to maintain. Any issue with one service will not affect the main Application. 
2. Microservices can be created using various technologies like Java, .NET and Open source. 
3. We will use Microservices using .NET CORE and Docker to publish the Application.

# Key Questions?
### What is the software required?
1. Windows 10 or later
2. Visual Studio 2017 or later where Docker is supported. 
3. .NET CORE SDK for platform independence. 
4. Docker for Windows. 
5. Docker Tools from Visual Studio. 
### Why should we use Microservices instead of Monolithic Apps?
1. MS is to develop smaller but effective services that each service will run on its own process. We develop small scale services than big apps.
2. Because of their small size it is easy to maintain. 
3. It can be scaled quickly and can be reused in multiple projects. 
4. With smaller size, it can be easily placed in Containers like Dockers.
5. Each MS is an independent App service, if one of them fails, it will have very little or less risk on the Full Application, it will not be a show stopper. 
### Why .NET CORE?
It is open source and has lots of APIs to develop high performance Internet and Web Apps along Service oriented Apps. With VS, it is fast in development and UI support for DIs and Cloud based Configurations are very handy. 
### Why should we contain it in Docker?
Docker helps in containerization of the services, light weight, low cost and unlike VMs, we dont need to pre allocate RAM for the Containers. 
### How to create this service in Visual Studio
1. VS 2017 or later should be selected. Create a Project of the type ASP.NET CORE WEB API. 
2. Create the required Data classes
3. Create the Controllers requried for the Application. 
4. Create the requried docker files. 
5. If connecting to SQL server, create the image of the SQL server in docker
6. Using YAML, U provide the network b/w the Application Container and SQL server container. This feature is called as Orchestration feature. 
--------------------------------------------------------------------------------------------------
# Kubernetes(K8s)
- It is a container management system developed on Google platform. It's main purpose is helping in managing the Containerized Apps on various platforms like cloud, Virtual Servers and local servers. It is said to be one of the most popular Container management Tools. 
- It is purely a cloud based environment. It comes with many automation tools that will be used to maintain the large scale containers as one Unit. 
- As DevOps Engineer, one will get skills on using these automation tools to manage the Applications and ensure that no break down of the software happen. 
- It uses a concept called CLUSTERS where each cluster is a repository of 100s of containers grouped into Worker nodes or PODs. Each POD might be an Application that has multiple containers in it. Each container can have one or more Microservices in it. 
- K8s maintain multiple clusters for the management of the nodes. The Application will be available to user thru Primary Cluster. If the primary cluster fails for maintainence or any other reason, a secondary cluster will be made available for the Application to continue its services to the Customer. Once the Primary Cluster is back to work, a cached state of the secondary cluster is pushed into the Primary one and the Application continues to provide the services. 

### How K8s work?
- It is linux based Environment that shares lots of resources required to manage UR Complex Apps. It is primarily used for Distributed Computing Applications where the K8s abstract the underlying hardware resources and offers std and consistant UI that one can monitor from a common place. This UI will be used by the Dev Ops Engineer who will be responsible for the maintainence of the Application. The UI looks similar to a Dashboard of JENKINS, where he/she can monitor multiple applications, clusters and allocate the resources required for each of the Applications. The DevOps Engineer also determines the amount of resources that each App may require and allocate the resources accordingly. 

### Issues:
It needs a heavy infrastructure to showcase the Application. The Complete pipeline is done by a team of testers, DevOps Engineers and QAT teams. Its a collaborative work to make UR services hosted in a K8s server. Its not so user friendly. Ofcourse, there are many UI tools to manage these infrastructure. 

https://youtube.com/watch?v=X48VuDVv0do&feature=shares
U can view this tutorial for further reference. 