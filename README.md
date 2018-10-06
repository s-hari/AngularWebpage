# AngularWebpage
This is made in Angular5 with sever in Nodejs . Database in Mongodb.
Web page contains the curd opertion too . 

My Environment:

C:\Users\Developer>npm list -g --depth=0
+-- @angular/cli@6.2.4
+-- nodemon@1.18.4
+-- npm@6.4.1



002 Setting up and Installing Dependencies

 # npm install -g nodemon

$ cd server/
$ npm init -y

$ npm install --save express body-parser morgan mongoose

npm install --save cors

npm install --save bcrypt-nodejs

npm install --save jsonwebtoken

Setting up Configuration file for database port number and secret key

# To run this project clone it .
go to *Server dir run npm install, So all the modules will get installed .
Then run the server file by  nodemon server.js.

# Now the *front-end know as client side
go to this dir and do the same npm install .
After the modules are installed run the file by ng serve or ng serve --host 0.0.0.0 --port 4200.
