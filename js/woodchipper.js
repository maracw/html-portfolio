//import getProject from './getProject.js'; 

class DetailPage {
    constructor(){
        this.currentProject=
        {title: "How to Build a Woodchipper in Excel",
            subtitle:"(Not Really a Woodchipper)",
            techArr:[],
            image:"woodchipper-slide.png",
            linkText: "Download the handout",
            link: "assets/pdfs/Woodchipper-Handout-opt_Redacted.pdf",
            description:["When I worked at the City of Eugene in the Equity in Contracting program my job included a lot of forms. Form fillable pdfs, that is. After a few months of being frustrated that I couldn't *do* anything with the data and knowing that The forms themselves were not going to change. I researched ways to speed up getting the information into a spreadsheet. Thus, the woodchipper! ",
            "After I presented this method to other City employees, I got an unsolicited catalog for home gardening power tools in the mail."]
        }
 
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