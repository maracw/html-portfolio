//import getProject from './getProject.js'; 

class DetailPage {
    constructor(){
        this.currentProject = 
            {title: "Butter Mountain",
            subtitle:"Dynamic ASP.NET Core Webpage on Azure",
            techArr:[],
            image:"butterMtn.png",
            linkText:"Visit",
            link: "https://buttermountain.azurewebsites.net/",
            description:["My project for CS 295 and CS 296 (both on Web Development). The site used the Model View Controller pattern and runs on .Net 6.0. The backend has a MySql database hosted on Azure Cloud Services. This past term introduced Identity and Entity Framework Core.",
            "The idea for this site comes from my baking habits. I tend to not follow recipes exactly, which means when something goes well I usually don't have a record of it. This site lets you upload a recipe and then add log entries. That way, I can remember that it wasn't very good when I left out half the eggs.",   
            "When you visit, give the site a few extra seconds to load. It's hosted on a free Azure Student account (i.e. not very speedy)."]
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