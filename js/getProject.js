export function getProject(string){
const projects = [
    {title: "Butter Mountain",
    subtitle:"Dynamic ASP.NET Core Webpage on Azure",
    techArr:[],
    image:"butterMtn.png",
    linkText:"Visit",
    link: "https://buttermountain.azurewebsites.net/",
    description:["My project for CS 295 and CS 296 (both on Web Development). The site used the Model View Controller pattern and runs on .Net 6.0. The backend has a MySql database hosted on Azure Cloud Services. This past term introduced Identity and Entity Framework Core.",
    "The idea for this site comes from my baking habits. I tend to not follow recipes exactly, which means when something goes well I usually don't have a record of it. This site lets you upload a recipe and then add log entries. That way, I can remember that it wasn't very good when I left out half the eggs.",   
    "When you visit, give the site a few extra seconds to load. It's hosted on a free Azure Student account (i.e. not very speedy)."]
},
{title: "How to Build a Woodchipper in Excel",
    subtitle:"(Not Really a Woodchipper)",
    techArr:[],
    image:"woodchipper-slide.png",
    linkText: "Download the handout",
    link: "assets/pdfs/Woodchipper-Handout-opt.pdf",
    description:["When I worked at the City of Eugene in the Equity in Contracting program my job included a lot of forms. Form fillable pdfs, that is. After a few months of being frustrated that I couldn't *do* anything with the data and knowing that The forms themselves were not going to change. I researched ways to speed up getting the information into a spreadsheet. Thus, the woodchipper! ",
    "After I presented this method to other City employees, I got an unsolicited catalog for home gardening power tools in the mail."]
},
{
    title:"Welsh Siri",
    subtitle:"API Call To Welsh Text to Speech Service",
    techArr:[],
    image:"js233-final-lg.png",
    linkTest:"Try it!",
    link:"http://citstudent.lanecc.net/~williamsm312/cs233js/project/audio.html",
    description:["My final project for CS 233JS (Intermediate Javascript) involved researching and using API calls.",
    "The University of Wales at Bangor has an amazing set of resources for developing Welsh websites at <a href='https://techiaith.cymru/?lang=en'>Tech Iaith</a>. One tool is a text-to-speech generator.",
    "I used this generator with a simple form that the user enters a word or sentence in Welsh. After sending the request, the site loads a wav file of an AI voice pronouncing it in Welsh.",
    "existent"]
},
{
    title:"Procurement Roadmap",
    subtitle:"Contracting Rules Infographic",
    techArr:[],
    image:"js233-final-lg.png",
    linkTest:"",
    link:"",
    description:[""]
}
];
let currentProject;
switch(string){
    case "buttermountain":
        currentProject=projects[0];
        break;
    case "woodchipper":
        currentProject=projects[1];
        break;
    case "roadmap":
        currentProject=projects[2];
        break;
    case "welsh-api":
        currentProject=projects[3]
        break;
}

return currentProject;

}