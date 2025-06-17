document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "StockSense",
            link: "stocksense/stocksense.html",
            description: "An inventory management mobile application built for Android. Originally created for CS360 as a basic inventory management tracker, with local room implementation of SQLite. Multiple enhancements UI, cloud database, user authentication, and CSV import and export.",
            tools: "Java, Android Studio, Supabase"
        },
        {
            title: "Chess Web Frontend",
            link: "//dwarddevs.com",
            description: "Created a website to play a little chess!",
            tools: "JS, SQLite, Node, Express, Vue.js"
        },
        {
            title: "Chess Web Backend",
            link: "https://github.com/Maiar0/chess-web-backend",
            description: "Backend logic for chess website!",
            tools: "JS, SQLite, Node, Express, Vue.js"
        },
        {
            title: "SEVN Stack Application",
            link: "https://github.com/Maiar0/stocksense-admin",
            description: "Developed for StockSense Applicaiton as an Admin panel. The application is built with the SEVN stack, with a focus on the Vue.js framework.",
            tools: "JS, Supabase, Express, Vue.js, Node.js"
        },
        {
            title: "MEAN Stack Application",
            link: "https://github.com/Maiar0/cs465-fullstack/tree/module7",
            description: "Developed in CS465, MEAN stack application for a mock-up website for Travlr website.",
            tools: "JS, TypeScript, MongoDB, Express, Angular, Node.js"
        },
        {
            title: "CS320-junit-tests",
            link: "https://github.com/Maiar0/CS320-junit-tests",
            description: "Project created to show working knowledge of junit testing, stubs, and assertEquals within Java.",
            tools: "Java, JUnit"
        },
        {
            title: "CS230",
            link: "https://github.com/Maiar0/CS230",
            description: "Small server-client application, with documentation and performance metrics. Built for course CS230.",
            tools: "Java, Networking"
        },
        {
            title: "CS370-Cartpole-Problem",
            link: "https://github.com/Maiar0/CS370-Cartpole-Problem",
            description: "Using Keras to solve the Cartpole Problem. Demonstrates reinforcement learning techniques.",
            tools: "Python, Keras, Machine Learning"
        },
        {
            title: "CS370-Treasure-Hunter",
            link: "https://github.com/Maiar0/CS370-Treasure-Hunter",
            description: "Using AI via Keras to play a maze game autonomously. Developed for CS370.",
            tools: "Python, Keras, Game AI"
        },
        {
            title: "CS360-Mobile-Application",
            link: "https://github.com/Maiar0/CS360-Mobile-Application",
            description: "Original Inventory Application created for CS360",
            tools: "Java, Android Studio"
        },
        {
            title: "CS350-Embedded-System",
            link: "https://github.com/Maiar0/CS350-Embedded-System",
            description: "Create a couple projects on TI CC3220S LaunchPad",
            tools: "C, TI-RTOS, Embedded Systems"
        },
        {
            title: "CS340-CRUD",
            link: "https://github.com/Maiar0/CS340-CRUD",
            description: "Create simple CRUD instructions for MongoDB",
            tools: "JavaScript, Python, MongoDB, Node.js"
        },
        {
            title: "CS300-Efficiency",
            link: "https://github.com/Maiar0/CS300-Efficiency",
            description: "Test and analyze the efficiency of different lists.",
            tools: "C++, Data Structures"
        },
        {
            title: "CS210-Project-Three",
            link: "https://github.com/Maiar0/CS210-Project-Three",
            description: "Small Console Application to read and write data.",
            tools: "C++, File I/O"
        },
        {
            title: "CS330-OpenGL-Brick-Game",
            link: "https://github.com/Maiar0/CS330-OpenGL-Brick-Game",
            description: "Small console application using OpenGL",
            tools: "C++, OpenGL"
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
