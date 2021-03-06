# Better Sprint Learnings [Deprecated]

### Note: This project was dockerized, use flipp-sprint-learnings instead

A collection of sprint insights categorized by team, service, or system!**

![](https://i.imgur.com/cjBOGHT.png)

**Rich markdown description support through Draft-JS:**

![](https://i.imgur.com/qQOALgJ.png)

## Running a Local Environment

**Prerequisites:** 

- Ruby 2.6.3
- Rails 5.2.3
- Node v8.11.1 / npm v6.9.0
- mySQL 5.6

### Step 1) Setting up the Database

After setting up the necessary prerequisites and git cloning the repository, navigate to the repo in your Terminal window and run:

`rails db:create` 

This command creates a `development` and `test` database.
To setup a barebones system, run the following command on the project's root directory:

`mysql -u {username} -p {password} --database=better-sprint-learnings_development < development_dump.sql`

Now, you can start the application by running the following in the Terminal:

`rails start --binding=127.0.01`

Lastly, open a browser window and navigate to `http://localhost:3000` to view the application.
