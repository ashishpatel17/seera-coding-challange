# Setup on localhost

  - Git clone https://github.com/ashishpatel17/seera-coding-challange.git
  - go to seera-coding-challange directory
  - install packages -  npm install
  - npm run build-dev
  - npm start
  - access using http://localhost:8080

# run unit test case
 - For unit test Mocha and Enzyme was used
 - All of the test case are in test folder
 - to run test case npm run test

# Continuous Integration
 - Travis had been used for Continuous Integration
 - GIT repository (https://github.com/ashishpatel17/seera-coding-challange.git) of this project was linked with the Travis
 - .travis.yml file contain the configuration of number of job which should be executed once it was triggered after git push
 - once git push has been done the job has been triggered 
 - after sucessfull completion of job the application be accessible through this URL "mpatelashish.surge.sh"