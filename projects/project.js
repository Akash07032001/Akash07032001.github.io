const Projects = [

   
    {
        name : "kimaye.com",
        about: "Kimay is the frash fruit store for frash fruits and also fruit salid with in good price ",
        img : "./images/kimaya.png",
        gitrepo : "https://github.com/jagtapyogesh41/Kimaye_clone",
        tech_stackicons : [
            `<img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />`,
            `<img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>`,
            `<img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>`,
           // `<img src="https://img.icons8.com/nolan/44/api-settings.png" width="38px"/>`
            
        ],
        project_link : "https://zesty-alpaca-5eff78.netlify.app/",
        project_type : "Team Project",
        category : ["all", "frontend"],

    },
    
    {
        name : "OutLook.india",
        about : "Outlook is India  most credible current affairs and news magazine It features contents from politics, sports, cinema,stories and magazine section is the spacial station.",
        img : "https://github.com/arpitkumarsahu/DemoOutlook/raw/Arpit/screen_shots/photos.PNG",
        gitrepo : "https://github.com/arpitkumarsahu/DemoOutlook",
        tech_stackicons : [
            `<img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />`,
            `<img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>`,
            `<img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>`,
        `<img src="https://img.icons8.com/nolan/30/api-settings.png" width="38px"/>`

        ],
        project_link : "https://loquacious-kheer-13bb24.netlify.app/index.html",
        project_type : "Team Project",
        category : ["all", "frontend"]
    },

   
    {
        name : "Hey Broker",
        about : "HeyBroker.com is an Web server application which is used by admin , Broker and their Customer for Real Estate properties. We have created it's APIs.",
        img : "../images/Property.png",
        gitrepo : "https://github.com/Akash07032001/astute-tank-3790",
        // tech_stack : "JAVA | SpringBoot | SpringData-Jpa | Hibernate | MySQL | Swagger UI",
        tech_stackicons : [
            `<img src="https://img.shields.io/static/v1?label=&message=Java&color=007396&logo=java&logoColor=FFFFFF" />`,
            `<img src="https://img.shields.io/static/v1?label=&message=SpringData-Jpa&color=019733&logo=spring&logoColor=FFFFFF"/>`,
            `<img src="https://img.shields.io/static/v1?label=&message=SpringBoot&color=019733&logo=springboot&logoColor=FFFFFF"/>`,
            `<img src="https://img.shields.io/static/v1?label=&message=Hibernate&color=430098&logo=hibernate&logoColor=FFFFFF"/>`,
            `<img src="https://img.shields.io/static/v1?label=&message=MySql&color=00C2FB&logo=MySQL&logoColor=FFFFFF"/>`,

        ],
        project_link : "https://drive.google.com/file/d/175nsTmXNHvX4W8glWowhO1q6da1ztnPS/view",
        project_type : "Team Project",
        category : ["all", "backend", "other"]
    },
  
    
  
    
]




let projects__container = document.getElementById("projects--container")

let all_projects = document.querySelector(".all_projects")

let backend_projects = document.querySelector(".backend_projects");
// let other_projects = document.querySelector(".other_projects");
let frontend_projects = document.querySelector(".frontend_projects")
all_projects.classList.add("active_tech_project")

all_projects.addEventListener("click", () => {
    filterProjects("all");
    all_projects.classList.add("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    backend_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    frontend_projects.classList.remove("active_tech_project")
})
backend_projects.addEventListener("click", () => {
    filterProjects("backend");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    backend_projects.classList.add("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    frontend_projects.classList.remove("active_tech_project")
})

frontend_projects.addEventListener("click", () => {
    filterProjects("frontend");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    backend_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    frontend_projects.classList.add("active_tech_project")
})

function filterProjects(basis) {
    let filtered = Projects.filter((el) => {
        return el.category.includes(basis)
    })
    displayProjectData(filtered)
}

function displayProjectData(Projects) {
    projects__container.innerHTML = null;
Projects.reverse().forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stackicons} 
      </div>
      
    </div>
  </div>
    `
    projects__container.append(main)

})

}

displayProjectData(Projects);


