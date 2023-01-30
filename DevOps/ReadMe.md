# DevOps Training
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
```
docker volume create --name= MyContainer
```
Run the following command to download the Mongodb container in our Docker
```
docker run -it --rm --name mongoContainer mongo:latest mongod
```
Open a new terminal and run the command to interact with Mongodb:
```
docker exec -it mongoContainer mongosh
```
