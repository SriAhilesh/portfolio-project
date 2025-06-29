pipeline {
    agent any

    stages {
        stage('Run Ansible Playbook') {
            steps {
                dir('ansible') {
                    sh 'ansible-playbook deploy.yml -i inventory'
                }
            }
        }
    }
}
