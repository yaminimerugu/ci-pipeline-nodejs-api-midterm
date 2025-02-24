# ci-pipeline-nodejs-api-midterm

GitHub Link - https://github.com/yaminimerugu/ci-pipeline-nodejs-api-midterm.git


#1 Repository Structure -

/ (root directory)
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI Pipeline definition
├── node_modules/               # Installed dependencies (auto-generated)
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Lock file for dependencies
├── .gitignore                  # Gitignore file to exclude unnecessary files
├── Dockerfile                  # Dockerfile to build the app image
├── README.md                   # Project documentation
├── server.js                   # Sample application (Node.js)
├── tests/
│   └── server.test.js          # Test cases for the application
└── .git/                        # Git configuration directory (auto-generated)

#2 Instructions to Build and Run the Application

# Building the Application

To build and run the application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yaminimerugu/ci-pipeline-nodejs-api-midterm.git
    cd ci-pipeline-nodejs-api-midterm.git
    ```

2. Install dependencies (from `package.json`):
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    node server.js
    ```

4. Access the application at:
    ```text
    http://localhost:3000
    ```

# Running Docker

If you prefer running the application inside a Docker container:

1. Build the Docker image:
    ```bash
    docker build -t your-image-name .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 your-image-name
    ```

3. Access the application at:
    ```text
    http://localhost:3000
    ```

#3 Steps to Test the CI Pipeline

# To test the CI pipeline:
1. Push a new commit to the GitHub repository.
2. The GitHub Actions workflow will automatically trigger.
   -GitHub Actions will automatically trigger the CI pipeline as defined in the `.github/workflows/ci.yml`.
3. Monitor the "Actions" tab on GitHub to view the pipeline execution.
4. Ensure that all stages (Build, Test, Upload) run successfully.

If there is an issue, GitHub Actions will show an error and logs to help you debug.


#4 Instructions on Pulling the Docker Image from the Registry

# To pull the Docker image from Docker Hub:
docker pull your-username/your-image-name:latest


#5 Instructions on Running the Jenkins Pipeline

# Running the Jenkins Pipeline:

1. Make sure Jenkins is set up with your GitHub repository and the Jenkinsfile is added to the repo.

2. Trigger the Jenkins pipeline manually or push a commit to trigger it automatically.

3. Monitor the pipeline execution in Jenkins and view logs for each stage (Build, Test, Upload).

4. Ensure the pipeline runs successfully with all stages.
