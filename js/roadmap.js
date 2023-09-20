//import getProject from './getProject.js'; 

class DetailPage {
    constructor(){
       this.currentProject = 
            {
            title:"Procurement Roadmap",
            subtitle:"Contracting Rules Infographic",
            techArr:[],
            image:"final-roadmap-orig.png",
            //linkText:"",
            //link:"",
            description:[""]
        };
       
        this.fillProject();

    }
//end of constructor

        fillProject() {
            document.getElementById("project-header").innerHTML=this.createProjectHeaderInnerHtml(this.currentProject);
            document.getElementById("project-img").innerHTML=this.createProjectImageInnerHtml(this.currentProject);
            document.getElementById("project-desc").innerHTML=this.createDescription(this.currentProject.description);
        }
        createProjectHeaderInnerHtml(project){
            const projectheaderString=`<h1 id="project-title">${project.title}</h1>
            <h3 id="project-subtitle">${project.subtitle}</h3>
             `
            return projectheaderString;
        }
        createProjectImageInnerHtml (project) {
            const projectImageString = `<img src="assets/images/${project.image}" alt="" class="img-fluid">`
            return projectImageString;
        }

        createDescription(description) {
            let projectDescString=``; 
            for(let i = 0; i<description.length; i++){
                projectDescString+=`<p>${description[i]}</p>`;
            }
            return projectDescString;
        }
        


    }
//end of class
let projectDetail;
window.onload = ()=>{projectDetail = new DetailPage();};