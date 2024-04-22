// In index.js
const projects = {
    'project1': {
        title: 'DHS Baggage Classification',
        subtitle: 'Identifying dangerous objects in airport screening images with machine learning.',
        organization: 'Center for Accelerated Operational Efficiency at Arizona State University',
        dates: 'August 2021 - July 2022',
        summary: 'A team of graduate students from ASU and UT El Paso applied computer vision techniques to identify potentially dangerous items in airport baggage based on security scans. My role in this project was to gather testing data by developing a survey which asked people to identify certain images within our artificially generated baggage scans. I also analyzed the data received from these surveys to identify trends in human identification of dangerous objects, including implementing a mouse tracker and creating attention maps (see image to the left).',
        skills: ['Python', 'Data Visualization', 'Data Analysis', 'Data Processing', 'Computer Vision'],
        link: 'https://github.com/ibarwey/DHSProject',
        linktext: "Github",
        image: 'img/imgmap-1_none.png'
    },
    'project2': {
        title: 'Medical Query Generation',
        subtitle: 'Using BERT to convert English questions to SQL queries for use by medical professionals.',
        organization: 'Geogria Tech Research Institute',
        dates: 'May 2023 - July 2023',
        summary: 'This project involved a Streamlit application which took natural language questions as input, and would translate them to SQL queries and query a medical database, then provide the user with the database entires. I Created dataset of SQL Queries and their corresponding natural language questions in a medical context. I then used this data to validate our modified BERT model for translation of natural language questions into SQL queries. I also assisted in developing the Python application.',
        skills: ['BERT Model', 'NLP', 'Model Validation Testing','Streamlit', 'Database Querying', 'SQL'],
    },
    'project3': {
        title: 'Machine Learning for Clarifying Patent Inventor',
        subtitle: 'Using NLP and deep learning to classify patents by inventors on a world scale.',
        organization: 'Master of Engineering Capstone Project',
        dates: 'September 2023 - May 2024',
        summary: 'Our team, working closely with Professor Lee Fleming and Emma Scharfmann, aims to use ML tools to identify when patents in the world patent database are by the same inventor. I serve as the team\'s Point of Contact as well as a technical lead. This involves firstly processing our data, to use in models then putting patents through a Patent2Vec model which employs BERT, then putting patents through a deep learning model which computes similarity scores between patents. Our next goal is to employ a clustering model to form clusters of patents with the same inventors. We hope to run this on the PatStat database this Spring and provide the disambiguated dataset as data for further patent research.',
        skills: ['Data Processing', 'Deep Learning', 'Fine Tuning', 'Clustering'],
    },
    'project4': {
        title: 'Fake/Real News Classifier Analysis',
        subtitle: 'Assessing the performance of four classifiers in classifying news articles as fake or real news.',
        organization: 'Arizona State University',
        dates: 'Fall 2022',
        summary: 'As a graduate project for my Data Mining class at ASU, a teammate and I used the “Fake and real news dataset” by Clément Bisaillon to create a Pandas dataframe and assess four classifiers on varying ground truth percentages for performance. The classifiers we assessed were the Passive Aggressive Classifier (a linear model algorithm), Logistic Regression (a linear model algorithm), Multinomial Naive Bayes Model, and Support Vector Classifier (a support vector machine algorithm). We evaluated the models based on accuracy, recall, precision, and F1 score.',
        skills: ['Classification', 'Model Evaluation', 'Pandas', 'Scikit-learn'],
        link: 'https://docs.google.com/document/d/1Pa0RQ7jn1by1hDTqMDWJsjpLLldqhY_G/edit?usp=sharing&ouid=108524975782435284501&rtpof=true&sd=true',
        linktext: "Read Report",
        image: 'img/project4.png'
    },
    'project5': {
        title: 'Twitter COVID Vaccine Data Scraping',
        subtitle: 'Scraping tweets about the COVID Vaccine and creating a world cloud to identify sentiments.',
        organization: 'Arizona State University',
        dates: 'Fall 2022',
        summary: 'I used the snscrape Python library to scrape Twitter data with the keyword \'COVID Vaccine\' from years 2020 and 2022 to see if sentiments had changed over time. I then used the networkx, matplotlib, and numpy libraries to visualize the data in word clouds based on common words used in these tweets, ensuring to account for noise such as \'the\' or \'an\'. I also analyzed the data by closeness and degree distribution.',
        skills: ['Data Scraping', 'Data Mining', 'Data Visualizatoin'],
        image: 'img/word_cloud.png'
    },
    'project6': {
        title: 'Parrot.ai - Language Practice Made Fun',
        subtitle: 'ChatBot iOS app for practicing languages with live feedback and scoring system.',
        organization: 'Scale\'s Generative AI Hackathon for Womxn',
        dates: 'April 2024',
        summary: 'Teammate Kasey Lee and I worked to create an iOS app with Swift which intends to make language practice more accessible for those without people to practice with. We use GPT 3.5 API to facilitate easy conversation with the bot. On top of this, we use Sapling\'s API to check the grammar of the sender\'s messages, providing real-time feedback in the conversation to help the user learn. This is a work-in-progress, and we intend to add a game element in which the user recieves a score on their performance after each conversation.',
        skills: ['GPT 3.5', 'Swift', 'API Integration', 'Generative AI'],
        link: 'https://github.com/ibarwey/ParrotChat',
        linktext: "Github",
        image: 'img/parrot_demo.png'
    }
};

// Get all tabs
var tabs = document.querySelectorAll('.tab');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById('navbar'); // Corrected ID reference
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.top = "0";
        navbar.style.padding = "1rem";
    } else {
        navbar.style.top = "-100px";
        navbar.style.padding = "1rem";
    }
}

tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });
        
        // Add active class to clicked tab
        tab.classList.add('active');

        // Hide all content items
        var contentItems = document.querySelectorAll('.content-item');
        contentItems.forEach(function(item) {
            item.classList.remove('active');
        });

        // Show the active content item
        var activeContent = document.getElementById(tab.getAttribute('data-target'));
        activeContent.classList.add('active');
    });
});

// Assuming projects object is defined as in your question

document.querySelectorAll('.portfolio__item').forEach(item => {
    item.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project-id');
        const project = projects[projectId];
        
        if (project) {
            document.querySelector('.modal-title').textContent = project.title;
            document.querySelector('.modal-subtitle').textContent = project.subtitle;
            document.querySelector('.modal-org').textContent = project.organization;
            document.querySelector('.modal-dates').textContent = project.dates;
            document.querySelector('.modal-summary').textContent = project.summary;
            
            // Handling skills list
            const skillsList = document.querySelector('.modal-skills');
            skillsList.innerHTML = ''; // Clear existing skills
            project.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
            
            document.querySelector('.modal-link').href = project.link;
            document.querySelector('.modal-link').textContent = project.linktext;
            const modalImg = document.querySelector('.modal-img');
            if (project.image) {
                modalImg.src = project.image;
                modalImg.style.display = 'block'; // Show the image
            } else {
                modalImg.style.display = 'none'; // Hide the image if no source provided
                document.querySelector('.text-content').style.width = "100%";
            }

            // Show the modal
            document.getElementById('projectModal').style.display = 'block';
        }
    });
});

// Assuming you have a modal close functionality
document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('projectModal').style.display = "none";
});

