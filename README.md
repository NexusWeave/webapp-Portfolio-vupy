# krigjo25 | Home
The project was inteded to create as a personal home page, show my what i have done so far
and not as a CS50x assignment, but it killed two birds with one stone.
[Future Projects](https://github.com/users/krigjo25/projects/17)


## Tree map
In [directory-tree.md](./model/directoryTree.md) shows an overview of the directory architecture.

## Installation and run

1. Clone the repository:
```sh
#   Using HTTPS
git clone https://github.com/krigjo25/webapp-home-flask.git

#   Using SSH
ssh git@github.com:krigjo25/webapp-home-flask.git

#   Using Github CLI
gh repo clone krigjo25/webapp-home-flask
```

2. Navigate to the project directory
```sh
cd webapp-home-flask
```

3. Install the projects dependencies using pip:
```sh
pip install -r requirements.txt
```
4. Run the project
```sh
flask run --debug  # Running flask in developer and debug mode
```
*** Configuration ***
To configure access to Github create a '.env' file in the project's root directory and add your github token

```env
#   Github Access Token
GITHUB_TOKEN = "Bearer <Your Github Token>"
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run start

# pnpm
pnpm start

# yarn
yarn start

# bun
bun run start
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


##   Credits
**Libraries:**

* Flask and Flask-Session:
    * Developed by: The Pallets Project
    * URL: [https://pypi.org/project/](https://pypi.org/project/)
    * Purpose: Web framework and session management

* python-dotenv:
    * Developed by: Saurabh Kumar
    * URL: [https://pypi.org/user/theskumar/](https://pypi.org/user/theskumar/)
    * Purpose: Library for loading environment variables

**Built-in Python Modules:**

* sqlite: Database management
* os: Operating system interactions

**Testing:**

* pytest: Python testing framework

###   License
The project's licensing information can be found in the separate [LICENSE](./license) file.


##  Summary
During the project i some challanges were faced to solve.

###   Model Implementation
During the implementation of the data model, i had to learn how to create a model, 
- I wanted to describe a class and describe its relationship between its subclasses and its functionallity
- 
###   GitHub API Integration
during the implementation of the API Itegration, it was observed that every GET request returned the complete data. 
In order to optimize this process, a scheduling mechanism was implemented to limit data fetching to once per day or when changes in the repository are detected.

the ideal possibility is to create a database

###   Testing
The testing phase provided valuable learning experiences in utilizing Python's built-in `pytest` framework for unit testing.

Key skills acquired during testing include exception handling, API testing using `requests` and `pytest`, and basic database testing.

####   GitHub API Testing
* **Automated API Function Testing:**
    * Challenge: Securely storing expected test results without exposing sensitive account information.
    * Solution: Utilizing the API request itself to retrieve and validate sensitive information, ensuring its presence in successful test cases.
  
* **API Connection Testing:**
    * Challenge: Testing API connectivity without revealing sensitive information associated with the test account.

####   SQLite3 Database Management System Testing
* **Database Connection Testing:**
    * Objective: Validate the ability to establish database connections as required.
* **Exception Testing:**
    * Objective: Verify that appropriate exceptions are raised to inform users of operation failures.


have a glorious rest of your day,
[@krigjo25](https://github.com/krigjo25)

