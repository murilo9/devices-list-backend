# Devices List API

by Murilo Henrique Matias

## What features does this API have?

- Authentication (using JWT)
- Persistent cart (unsing MongoDB)
- Can be started with a single docker-compose up command

## How do I init the API?

You may start the API locally with `npm run dev`, or inside a docker container with `docker-compose up`. The container is meant to run a development (not production) environment.

## How was this API structured?

This application has a simple two-layer architecture. It's layers are as follows:
- Database (db): functions responsible for interacting with the database.
- Controllers: classes responsible for handling domain flows. Every controller has at least a handle method, which executes a domain flow. An 'assertive' controller has a **validator** method, that validates requests' body form data. A 'restrict access' controller has an **authorizator** method, that verifies if the requesting user has authorization access to the resource. Controllers' validators and authorizators have separate folders for them.

There's also some **utils** functions which prove a lot of useful methods (for getting a database client, getting a bcrypt password hash, etc).
