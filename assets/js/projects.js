document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "StockSense",
            link: "stocksense/stocksense.html",
            description: "An inventory management mobile application built for Android. Originally created for CS360 as a basic inventory management tracker, with local room implementation of SQLite. Multiple enhancements UI, cloud database, user authentication, and CSV import and export.",
            tools: "Java, Android Studio, Supabase"
        },
        {
            title: "MEAN Stack Application",
            link: "https://github.com/Maiar0/cs465-fullstack/tree/module7",
            description: "Developed in CS465, MEAN stack application for a mock-up website for Travlr website.",
            tools: "JS, TypeScript, MongoDB, Express, Angular, Node.js"
        }
    ];

    const projectContainer = document.getElementById("project-grid");

    projects.forEach(project => {
        const projectBox = document.createElement("div");
        projectBox.classList.add("project-box");

        projectBox.innerHTML = `
            <h3><a href="${project.link}">${project.title}</a></h3>
            <p>${project.description}</p>
            <p class="align-right-bottom">${project.tools}</p>
        `;

        projectContainer.appendChild(projectBox);
    });
});
