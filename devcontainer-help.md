# Environment Setup

[Dev Containers overview](https://code.visualstudio.com/docs/devcontainers/containers) covers everything we need to setup the environment. In short, you need to install the following:
- VS Code
- Docker Desktop
- Dev Containers Extension in VS Code

# Create an environment

## Structure
To utilize dev containers, you need to create a folder called `.devcontainer` and it will contain a `devcontainer.json` file. 
You can *also* define `docker-compose.yml` and/or `Dockerfile` if you need to.

You specify many things in `devcontainer.json`. And a detailed explanation regarding this is [here](https://containers.dev/implementors/json_reference/). Here are two things I find important:
- `customizations.vscode.extensions`: Define VS Code extension when you open the project inside a container
- `postCreateCommand`: Run commands after the container is created.

## .devcontainer creation

While there are various ways to generate it, I suggest modifying a template which Microsoft provides would be easiest. Here's how to do so:

- When Dev Container is installed, you should have a status bar button at the bottom left. Click on it and select `New Dev Container`. Then, you can pick one template to work with. 

- COSC 404 lab 7 utilizes the `Node.js & Mongo DB` template.