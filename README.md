# backgroundJobsNode
Information that usually takes a while to be processed will be taking place on the background and sent to the user. 

1# - You'll need to install all the dependencies, they are: the bull library for the queue administration, bull-board for the UI, dotenv for configuring the authentications variables for the connection with the database and the email server, express for the server and nodemailer for the email. As devDependencies, you'll need nodemon for the restarting of the server on every code save, npm-run-all(optional) if you wanna run scripts for the server ignition as I did and sucrase for the better coding and easier imports. Don't forget to install the Redis database for the queues, you can use with docker or if you want, download from the internet.
    
    yarn add bull bull-board dotenv express nodemailer ---- npm install bull bull-board dotenv express nodemailer --save.
    yarn add nodemon npm-run-all sucrase -D ---- npm install nodemon npm-run-all sucrase -D
    
#2 - Now that the dependencies are installed, you'll need to create your variables for the email and database config, for that, create a file with the name .env and place all your variables inside of it. e.g EMAIL_HOST=smtp.live.com. After that, you'll need to import dotenv on your server (don't forget to do this in your queue server too.), e.g. import 'dotenv/config';

3# - To create a new job you just have to create the file in the jobs folder, then in the index.js in the same folder, you have to initialize it as I did in the other two jobs.

Done, you create new jobs and learned about queueing, thanks for the support, any feedback is welcome, special thanks to rocketseat for sharing their knowledge with us. See ya.
