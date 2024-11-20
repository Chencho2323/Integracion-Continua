import jenkins.model.*
import jenkins.branch.*
import hudson.plugins.git.*

// Variables
def jenkinsInstance = Jenkins.instance
def jobName = "IntegracionContinua"
def repoUrl = "https://github.com/Chencho2323/integracion-continua.git"
def branch = "main"

// Verifica si el trabajo ya existe
if (jenkinsInstance.getItem(jobName) == null) {
    println("Creando Pipeline: ${jobName}")
    
    // Crear el pipeline
    def scm = new GitSCM(repoUrl)
    scm.branches = [new BranchSpec(branch)]
    
    def flowDefinition = new org.jenkinsci.plugins.workflow.cps.CpsScmFlowDefinition(scm, "ci/Jenkinsfile")  // Ruta personalizada del Jenkinsfile
    def job = new org.jenkinsci.plugins.workflow.job.WorkflowJob(jenkinsInstance, jobName)
    job.definition = flowDefinition
    jenkinsInstance.add(job, jobName)
    jenkinsInstance.reload()
    println("Pipeline creado exitosamente")
} else {
    println("El Pipeline ya existe: ${jobName}")
}

