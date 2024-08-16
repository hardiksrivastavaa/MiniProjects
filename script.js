// Array of projects with projectCount number, project name, and link
const projects = [
    {
        projectCount: "1",
        name: "Random Fact Generator",
        location: "01 - Random Fact Generator",
    },
    {
        projectCount: "2",
        name: "Random Joke Generator",
        location: "02 - Random Joke Generator",
    },
    {
        projectCount: "3",
        name: "Random Pic Generator",
        location: "03 - Random Pic Generator",
    },
    {
        projectCount: "4",
        name: "Simple Landing Page",
        location: "04 - Simple Landing Page",
    },
    {
        projectCount: "5",
        name: "Simple Text Editor",
        location: "05 - Simple Text Editor",
    },
    {
        projectCount: "6",
        name: "ToDo App",
        location: "06 - ToDo App",
    },

    // Add more projects as needed
];

// Function to generate and display project cards
function displayProjects() {
    const container = document.querySelector(".cards");
    projects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h2");
        title.textContent = `Mini Project - ${project.projectCount}`;
        card.appendChild(title);

        const projectName = document.createElement("h3");
        projectName.textContent = project.name;
        card.appendChild(projectName);

        const viewProjectLink = document.createElement("a");
        viewProjectLink.href = `${project.location}/index.html`;
        viewProjectLink.textContent = "View Live Preview";
        card.appendChild(viewProjectLink);

        container.appendChild(card);
    });
}

// Initialize the project display when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayProjects);
