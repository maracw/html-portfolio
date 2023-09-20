//import getProject from './getProject.js'; 

class DetailPage {
    constructor(){
        this.currentProject = 
            {title: "Weather App",
            subtitle:"Weather forecast app made in React",
            techArr:[],
            image:"react-weather.jpg",
            linkText:"Visit",
            link: "http://citstudent.lanecc.net/~williamsm312/react-class/weather/",
            github: "https://github.com/maracw/react-weather",
            githubLinkText: "View Source Code on Github",
            description:["This is one of the first React pages I made. A user can enter a 5-digit US zipcode and see weather data in that location for the next 4 days.",
            "The styling is a combination of bootstrap and custom CSS"]
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
            const projectheaderString=`
            <h1 id="project-title">${project.title}</h1>
            <h3 id="project-subtitle">${project.subtitle}</h3>
            <div>
                <div id="visit-btn">
                    <a class="my-button" href="${project.link}" target="_blank">${project.linkText}</a></li>
                </div>
                <div id="visit-btn">
                    <a class="my-button" href="${project.github}" target="_blank">${project.githubLinkText}</a></li>
                </div>
            <div>`
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