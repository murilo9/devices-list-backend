## How the Docker image works

The Dockerfile simply copy some files to the container, installs the dependencies (as well as typescript), then copies source files to the container and runs the build command.

Running the ```docker-compose up``` command (with --build flag if first time) will start the API and the database container.