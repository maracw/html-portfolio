//import getProject from './getProject.js'; 

class DetailPage {
    constructor(){
       this.currentProject = 
            
        {
            title:"Welsh Siri",
            subtitle:"API Call To Welsh Text to Speech Service",
            techArr:[],
            image:"js233-final-lg.png",
            linkText:"Try it!",
            link:"http://citstudent.lanecc.net/~williamsm312/cs233js/project/audio.html",
            description:["My final project for CS 233JS (Intermediate Javascript) involved researching and using API calls.",
            "The University of Wales at Bangor has an amazing set of resources for developing Welsh websites at <a href='https://techiaith.cymru/?lang=en'>Tech Iaith</a>. One tool is a text-to-speech generator.",
            "I used this generator with a simple form that the user enters a word or sentence in Welsh. After sending the request, the site loads a wav file of an AI voice pronouncing it in Welsh.",
            "existent"]
        }
        ;
 
        //this.currentProject=getProject("woodchipper");
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
                <div id="visit-btn">
                    <a class="my-button" href="${project.link}" target="_blank">${project.linkText}</a></li>
                 </div>`
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