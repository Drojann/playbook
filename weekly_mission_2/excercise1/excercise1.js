const repo = {
    name: "week2 Launch X",
    author: "alejandro_lima",
    language: "JavaScript",
    numberOfCommits: 20,
    stars: 2,
    forks: 2,
    issues_open: 1,
    issues_close: 1,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   
const issue = {
    title: "week 2",
    repositoryNameAssociated: "week2 X",
    status: "active",
    numberOfComments: 5,
    labels: "issue2",
    author: "alejandro",
    dateCreated: new Date(),
    lastUpdated: Date.now (),
    getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del issue:" + issue.title)
   console.log("Comentarios totales: " + issue.numberOfComments)
   console.log(issue.getGeneralInfo())

const pull = {
    titles: "pullRequest1",
    branchName: "main",
    dateCreated: "fecha",
    status: "active",
    repositoryNameAssociated: "week2 Launch X",
    getTitleAndAuthor: function(){
      return this.titles + this.author
    },
    getStatus: function(){
      return `This pullrequest ${this.titles} is ${this.status}`
    }
   }
   
   console.log("Nombre del pullrequest:" + pull.titles)
   console.log("branch: " + pull.branchName)
   console.log(pull.getStatus())
      