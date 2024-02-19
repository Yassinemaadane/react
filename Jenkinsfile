pipeline {
    agent any           
        stages{
         stage('build image') {
            steps {
               bat 'docker build -t yassinemaadane/react-app .'
            }
         }
        stage('push image') {
            steps {
                script{
                   bat 'docker login -u yassinemaadane -p dckr_pat_Jwk8ljmOeI_PT0_f7Jgq9rBpuk8'
                    bat 'docker push yassinemaadane/react-app'
                }
            }
         }
       
        }
}
