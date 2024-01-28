// In index.js
const projects = {
    'project1': {
        title: 'DHS Baggage Classification',
        subtitle: 'Identifying dangerous objects in airport screening images with machine learning.',
        organization: 'Center for Accelerated Operational Efficiency at Arizona State University',
        dates: 'August 2021 - July 2022',
        summary: 'A team of graduate students from ASU and UT El Paso applied computer vision techniques to identify potentially dangerous items in airport baggage based on security scans. My role in this project was to gather testing data by developing a survey which asked people to identify certain images within our artificially generated baggage scans. I also analyzed the data received from these surveys to identify trends in human identificiation of dangrous objects, including implementing a mouse tracker and creating attention maps (see image to the left).',
        skills: ['Python', 'Data Visualization', 'Data Analysis', 'Data Processing', 'Computer Vision'],
        link: 'https://github.com/ibarwey/DHSProject',
        linktext: "Github",
        image: 'img/imgmap-1_none.png'
    },
    'project2': {
        title: 'Medical Query Translation',
        subtitle: 'Using BERT to convert English questions to SQL queries for use by medical professionals.',
        organization: 'Geogria Tech Research Institute',
        dates: 'May 2023 - July 2023',
        summary: 'This project involved a Streamlit application which took natural language questions as input, and would translate them to SQL queries and query a medical database, then provide the user with the database entires. I Created dataset of SQL Queries and their corresponding natural language questions in a medical context. I then used this data to validate our modified BERT model for translation of natural language questions into SQL queries. I also assisted in developing the Python application.',
        skills: ['BERT Model', 'NLP', 'Model Validation Testing','Streamlit', 'Database Querying', 'SQL'],
        image: 'img/project2.jpeg'
    },
    'project3': {
        title: 'Medical Query Translation',
        subtitle: 'Using the BERT model to convert natural language questions to SQL queries for a medical context.',
        organization: 'Geogria Tech Research Institute',
        dates: 'May 2023 - July 2023',
        summary: 'Detailed summary of project 2...',
        skills: ['BERT', 'Machine Learning', 'Image Processing'],
        image: 'img/imgmap-2_none.png'
    },
};

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
}


function loadProjectDetails() {
    const projectId = getQueryVariable('project');
    const project = projects[projectId];
    if (project) {
        document.querySelector('.project-title strong').textContent = project.title;
        document.querySelector('.section__subtitle').textContent = project.subtitle;
        document.querySelector('.project-org').textContent = project.organization;
        document.querySelector('.project-dates').textContent = project.dates;
        document.querySelector('.project-summary').textContent = project.summary;

        const skillsList = document.querySelector('.project-skills');
        skillsList.innerHTML = ''; // Clear existing list items
        
        // Dynamically create <li> elements for each skill
        project.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        document.querySelector('.project-link').href = project.link;
        document.querySelector('.project-link').textContent = project.linktext;
        document.querySelector('.project-img').src = project.image;
    } else {
        // Handle case where project ID is not found
        console.error('Project not found');
    }
}

document.addEventListener('DOMContentLoaded', loadProjectDetails);