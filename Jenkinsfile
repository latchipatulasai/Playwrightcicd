pipeline {
    agent any

    tools {
        nodejs 'NodeJS_24'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }

    post {
        always {
            emailext(
                subject: "Playwright Test Results - Build #${BUILD_NUMBER}",
                body: """
                Hello Team,<br><br>

                Playwright execution completed.<br><br>

                Build Number: ${BUILD_NUMBER}<br>
                Job Name: ${JOB_NAME}<br>
                Status: ${currentBuild.currentResult}<br><br>

                Report:<br>
                ${BUILD_URL}artifact/playwright-report/index.html<br><br>

                Regards,<br>
                Jenkins CI/CD
                """,
                to: "latchipatulasai@gmail.com"
            )
        }
    }
}
