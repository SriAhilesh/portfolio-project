# Use official Java 21 base image
FROM openjdk:21

# Copy the compiled jar to the container
COPY target/*.jar app.jar

# Run the jar file
ENTRYPOINT ["java", "-jar", "/app.jar"]

