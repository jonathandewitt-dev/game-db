#!/bin/bash

# Run `chmod u+x initvscode.sh`, `./initvscode.sh` to create files for VSCode

mkdir -p .devcontainer
touch .devcontainer/devcontainer.json
cat > .devcontainer/devcontainer.json << EOM
{
    "name": "Game-DB Dev Container",
    "dockerFile": "../dev.Dockerfile",

    // Use 'appPort' to create a container with published ports. If the port isn't working, be sure
    // your server accepts connections from all interfaces (0.0.0.0 or '*'), not just localhost.
    // "appPort": [3000],

    // Comment out the next line to run as root instead.
    // "remoteUser": "node",

    // Docker Support
    "runArgs": [
      "--privileged",
      "-v", "/var/run/docker.sock:/var/run/docker.sock",
      "--network", "host",

      // Set VSCode as editor for Git
      "-e", "VISUAL=code --wait"
    ],

    // Use 'settings' to set *default* container specific settings.json values on container create.
    // You can edit these settings after create using File > Preferences > Settings > Remote.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",

        // Find ./node_modules/eslint, and plugins starting here
        "eslint.workingDirectories": [ "./app" ]
    },

    // Specifies a command that should be run after the container has been created.
    "postCreateCommand": "npm i --prefix ./app",

    // Add the IDs of extensions you want installed when the container is created in the array below.
    "extensions": [
        "dbaeumer.vscode-eslint",
        "editorconfig.editorconfig",
        "mhutchie.git-graph"
    ]
}
EOM

mkdir -p .vscode
touch .vscode/launch.json
cat > .vscode/launch.json << EOM
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "(App) Launch Program",
      "cwd": "\${workspaceFolder}/app",
      "program": "\${workspaceFolder}/app/bin/app.js",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "(App) Jest All",
      "cwd": "\${workspaceFolder}/app",
      "program": "\${workspaceFolder}/app/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "windows": {
        "program": "\${workspaceFolder}/app/node_modules/jest/bin/jest",
      },
      "timeout": 25000
    },
    {
      "type": "node",
      "request": "launch",
      "name": "(App) Jest Current File",
      "cwd": "\${workspaceFolder}/app",
      "program": "\${workspaceFolder}/app/node_modules/.bin/jest",
      "args": [
        "\${relativeFile}",
        "--config",
        "jest.config.js"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "windows": {
        "program": "\${workspaceFolder}/app/node_modules/jest/bin/jest",
      },
      "timeout": 25000
    }
  ]
}
EOM
