# Fake-News-Detector-Browser-Extension
This is the fake news browser extension project for CTP hackathon 2025.

#Setup Pre-reqs:
  -An IDE
  -Node.js
  -Python

  
#Setup Guide:
1. In terminal go to src/client run "npm install".
2. In terminal go to src/server run "npm install".
3. In terminal go to src/python microservice run "pip install flask godot google-generativeai".
4. If using a Chrome based browser, go to browser extension enable developer mode. Click load unpacked, find the project in directory.
5. In the project directory go to src/client/public, this is the path to the manifest file(will not work with other paths).
6. Make sure to pin the extension aswell.

#Running Guide:
1. In terminal go to src/client run "npm run build".
     This command will compiles the changes and make them avaliable for the extension to use.
     To see changes as a traditional website run "npm start".
     Alternavitly running "serve -s build" works for viewing as extension.
3. In terminal go to src/server run "node index.js" to start the server(if it does not start don't worry).
4. In terminal go to src/python microservice run "python routes.py".

#User Guide:
Now that the front and backend's are running
Go to a news site of your choice, click on the extension click the power button, and wait for the results.
If not working after first click, do it once more until it works.
