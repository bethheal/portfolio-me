import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Elizabeth",
    lastName: "Dowuona",
    initials: "ED", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Front End Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by happiness'
        },
        {
            emoji: '🌎',
            text: 'based in the Accra, Ghana'
        },
        {
            emoji: "💼",
            text: "Ready to for Opportunities"
        },
        {
            emoji: "📧",
            text: "elizabethbarden18@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Elizabeth Dowuona. I’m an IT professional with experience in Front End Development, IT support, networking, and Python programming. I hold a degree in Computer Science from Accra Technical University and have worked with leading organizations like Hyperlink Network Systems and the Greater Accra Regional Coordinating Council. I’m passionate about web development and cloud platforms (AWS) and actively engage with Women in Cybersecurity and Developers in Vogue. When I'm not coding, I enjoy exploring new tech trends and improving my skills. I'm enthusiastic about tackling challenges and driving innovation. Let’s connect!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'HTML', 'CSS', 'Python', 'Flutter'],
            exposedTo: ['nodejs', 'AWS Cloud Platforms', 'canva' , 'Community engagement with Women in Cybersecurity and Developers in Vogue','Advanced web development practices']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📚'
        },
        {
            label: 'Dancing',
            emoji: '💃'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        }
    
    
        // {
        //     label: 'cooking',
        //     emoji: '🌶'
        // }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    education: [ // Eduction additions 
        {
            institution: "Accra Technical University",
            degree: "Bachelor of Technology in Computer Science (",
            startDate: "2020",
            endDate: "2022",
            description: "Focused on software development, networking, and cybersecurity. Developed a strong foundation in programming, system analysis, and cloud computing."
        },
        {
            institution: "Accra Technical University",
            degree: "Higher National Diploma  in Computer Science",
            startDate: "2018",
            endDate: "2020",
            description: "Focused on software development, networking, and cybersecurity. Developed a strong foundation in programming, system analysis, and cloud computing."
        },
        // Add more education entries if needed
    ],

    experience: [ // Experionce additions 

        {
            institution: "MEST",
            role: "Training Program",
            location: "Accra, Ghana ",
            startDate: "06/2024",
            endDate: "08/2024",
            description: " use React to create engaging user experiences. My expertise lies in building responsive and dynamic interfaces that enhance user interaction"
        },
        {
            institution: "Tech4Dev",
            role: "Training Program",
            location: "Virtual ",
            startDate: "12/2023",
            endDate: "12/2023",
        },
        {
            institution: "Amalitech ",
            role: " Training Program",
            location: "Virtual ",
            startDate: "05/2023",
            endDate: "08/2023",
            description: "Gained skills in HTML, CSS, and client-side scripting for web development."
        },
        {
            institution: "Greater Accra Regional Coordinating Council",
            role: "  MIS Personnel",
            location: "Accra, Ghana ",
            startDate: "09/2020",
            endDate: "09/2021",
            description: "Managed website content and assisted with software and hardware issues."

        },
       
        {
            institution: "CyberSafe Foundation",
            role: "  CyberGirls Training Program",
            location: "Virtual",
            startDate: "03/2022",
            endDate: "10/2022",
            description: "Learned cloud security best practices and AWS storage management."
        },
        {
            institution: "Hyperlink Network Systems",
            role: " IT Support Specialist",
            location: "Accra, Ghana ",
            startDate: "09/2021",
            endDate: "08/2023",
            description: "Provided technical support to businesses, resolving issues with connectivity, hardware, software, and data security."
        },
      
     
        // Add more education entries if needed
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://ladies-in-tech.netlify.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/bethheal/furnish", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/TEAM-LEJED/lejed-events-frontend",
            image: mock2
        },
        {
            title: "Project 3",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/bethheal/interior-frontend",
            image: mock3
        },
        {
            title: "Project 4",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/bethheal/ghana-hazard-reporter",
            image: mock4
        },
        {
            title: "Project 5",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/bethheal/lizeatry",
            image: mock5
        }
    ],
   

}