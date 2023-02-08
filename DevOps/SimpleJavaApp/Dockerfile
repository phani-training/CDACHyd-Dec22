# Contains instructors to the Docker Environment to load the required dependencies like SDKs, Frameworks and other dependencies requried for UR code to execute. Except the OS, U must provide all the requried dependencies that has to be loaded into UR container. 
FROM openjdk:11
WORKDIR /var/www/java
COPY . /var/www/java/
RUN javac SimpleFile.java
CMD exec java SimpleFile