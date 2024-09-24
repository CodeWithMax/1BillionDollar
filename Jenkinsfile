pipeline {
    agent any

    environment {
        NODE_VERSION = '20.x'   // Set the Node.js version you need
    }

    stages {

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }



        stage('Run Application') {
            steps {
                script {
                    // Run the server
                    sh 'npm install'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
