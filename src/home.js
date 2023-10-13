
import { useState } from 'react';
import './home.css';
import './blog.css';
import './resume.css';
import './about.css';

function Home() {
    const [ showBlog , setBlog] = useState(false);
    let page_name = "Home";
    const handleBlog= () => {
        setBlog(true);
        setHome(false);
        setabout(false);
        setresume(false);
        page_name = "Blog";
    };
    const [about, setabout] = useState(false);
    const handleAbout=() => {
        setabout(true);
        setHome(false);
        setBlog(false);
        setresume(false);
        page_name = "About";
    }
    const [Resume, setresume] = useState(false);
    const handleResume=() => {
        setresume(true);
        setBlog(false);
        setHome(false);
        setabout(false);
        page_name = "Resume";
    }

    const handleHome = ()=>{
        setresume(true);
        setBlog(false);
        setHome(true);
        setabout(false);
    }

    const [home, setHome]= useState(true);
    if(home){
        return (
           
            <div className="homepage">
              <header className="App-header">
                <div class="Title">
                  Rohin Khanapure
                </div>
                <div class = "button-container">
                <button class="homepage-button" onClick={handleBlog}>
                    Blog
                </button>
                <button class="homepage-button" onClick={handleAbout}>
                    About
                </button>
                <button class="homepage-button" onClick={handleResume}>
                    Resume
                </button>

                </div>
                
              </header>
              <div class="contact-info-container">
                <div class="one-media">
                    Phone: (447) 902 1017
                </div>
                <div class="one-media">
                <a class="contact-link" href="mailto:rohink27@gmail.com" >Email: rohink27@gmail.com</a>
                </div>
                <div class="one-media">
                <a class="contact-link" href="https://www.linkedin.com/in/rohinkhanapure/" target='_blank'>LinkedIn</a>
                </div>
                <div class="one-media">
                <a class="contact-link" href="https://github.com/rohink27" target='_blank'> Github</a>
                </div>
              </div>
            </div>
          );
    }
    else if(showBlog){
        const blogStyles = {
            color: 'white',
        };
        return(
        <div>
        <div class = "pageheader">
            <button onClick={handleHome} class="back-button">Home</button>
        <div class = "page-name">Blog</div>
        </div>
        <div  class="blogpage">
        This is a blog. This page has not been written yet, will be written later as part of my BADM 261 assignment
        </div>
        </div>
      );
    }
    else if(Resume){
        return(
            <div class = "resume-container">
                        <div class = "pageheader">
                        <button onClick={handleHome} class="back-button">Home</button>
                        <div class = "page-name">Resume</div>
                        </div>
            <div class="resume">
                <div class = "resume-header">
                    <div class="resume-name">Rohin Khanapure</div>
                    <div class = "phone-number">(447)902 1017</div>
                    <a class="resume-link" href="mailto:rohink27@gmail.com" >rohink27@gmail.com</a>
                    <a class="resume-link" href="https://www.linkedin.com/in/rohinkhanapure/" target='_blank'>LinkedIn</a>
                    <a class="resume-link" href="https://github.com/rohink27" target='_blank'> Github</a>
                </div>
            <div class="resume-heading">Education</div>
            <div class ='education-container'>
                <div class = "split-line">
                    <div class = "bolded-name">
                        University of Illinois - Urbana Champaign
                    </div>
                    <div class = "italics">
                        May 2026
                    </div>
                </div>
                <div class = "split-line">
                    <div class = "italics">
                        Bachelor of Science in Computer Engineering
                    </div>
                    <div class = "bolded-name">
                        GPA:4.0/4.0
                    </div>
                </div>
                <div class = "normal"><span class="inline-bold">Coursework:</span> Data Structures, Computer Systems & Programming (Honors), Analog Signal Processing, Linear Algebra, Statistics
                and Probability I</div>
            </div>
            <div class="resume-heading">Work Experience</div>
            <div class = "experience-container">
            <div class = "experience-heading">
            <div class = "split-line">
                    <div class = "bolded-name">
                    Illinois Department of Electrical and Computer Engineering
                    </div>
                    <div class = "italics">
                    Champaign, IL
                    </div>
                </div>
                <div class = "split-line">
                    <div class = "italics">
                    Undergraduate Teaching Assistant - ECE 120, ECE 220 
                    </div>
                    <div class = "bolded-name">
                    August 2023 - Present
                    </div>
                </div>
            </div>
            <ul class = "resume-list">
                <li class = "normal">Provided comprehensive support to students during office hours, addressing questions and concerns related to course lectures,
                homework assignments, and laboratory exercises for ECE 120</li>
                <li class = "normal">Offered personalized assistance to individual students, tailoring explanations to match their learning styles and levels of
                comprehension, resulting in improved understanding and academic performance</li>

            </ul>

            </div>

            <div class = "experience-container">
            <div class = "experience-heading">
            <div class = "split-line">
                    <div class = "bolded-name">
                    Icertis
                    </div>
                    <div class = "italics">
                    Pune, India
                    </div>
                </div>
                <div class = "split-line">
                    <div class = "italics">
                    Software Engineering Intern 
                    </div>
                    <div class = "bolded-name">
                    June 2023 – August 2023

                    </div>
                </div>
            </div>
            <ul class = "resume-list">
                <li class = "normal">Developed a <b>Web API</b>, using <b>.NET Core 6</b>, compliant with <b>OData standards</b>, providing seamless access to data on operational
                pods, their locations, tenant usage, and scheduled upgrades in our <b>Kubernetes cluster</b></li>
                <li class = "normal">Conducted comprehensive testing of the API to ensure functionality and reliability</li>
                <li class = "normal">Packaged the API into a <b>Docker</b> image, ensuring consistent deployment across diverse environments</li>
                <li class = "normal">Deployed the Docker image onto a Kubernetes cluster and monitored API performance through ,<b>Datadog</b>, analyzing key
                metrics for optimization opportunities</li>
                
            </ul>

            </div>

            <div class = "experience-container">
            <div class = "experience-heading">
            <div class = "split-line">
                    <div class = "bolded-name">
                    Byld Innovations
                    </div>
                    <div class = "italics">
                    Champaign, IL
                    </div>
                </div>
                <div class = "split-line">
                    <div class = "italics">
                    Electronics and Hardware Intern (Cozad NVC SP 2023)
                    </div>
                    <div class = "bolded-name">
                    January 2023 – April 2023

                    </div>
                </div>
            </div>
            <ul class = "resume-list">
                <li class = "normal">Utilized programming skills to configure stepper motors, successfully integrating the y-z axes into a 3D printer’s functionality</li>
                <li class = "normal">Collaborated with hardware components including <b>Arduino, SKR mini, and Marlin Firmware</b>, enhancing control over the
                3D printer’s motorized mechanisms</li>
                <li class = "normal">Employed Octoprint to further optimize motor control and coordination</li>                
            </ul>

            </div>
            <div class="resume-heading">Projects</div>

            <div class = "experience-container">
            <div class = "experience-heading">
            <div class = "split-line">
                    <div class = "bolded-name">
                    Dining Hall API
                    </div>
                    <div class = "bolded-name">
                    May 2023
                    </div>
                </div>
            </div>
            <ul class = "resume-list">
                <li class = "normal">Constructed a <b>Rest API</b> designed to interface with and effectively store dining hall wait time data within a <b>MySQL</b> database</li>
                <li class = "normal">Employed <b>Java </b>in conjunction with <b>Jersey</b> to create the API framework, seamlessly facilitating data interaction</li>
                <li class = "normal">Established database connectivity using <b>JDBC</b>, ensuring smooth communication between the API and the MySQL database</li>    
                <li class = "normal">Methodically verified API functionality and reliability through rigorous testing procedures conducted with <b>Postman</b></li>             
            </ul>

            </div>

            <div class = "experience-container">
            <div class = "experience-heading">
            <div class = "split-line">
                    <div class = "bolded-name">
                    Front End Web development Projects 
                    </div>
                    <div class = "bolded-name">
                    May 2023 - August 2023
                    </div>
                </div>
            </div>
            <ul class = "resume-list">
                <li class = "normal">Developed proficiency in web design fundamentals utilizing <b>HTML and CSS</b></li>
                <li class = "normal">Explored the implementation of interactive elements on websites through <b>JavaScript</b></li>   
                <li class = "normal">Strengthened skills by successfully completing projects such as a YouTube UI Clone, Amazon Clone, Calculator App, and To-do
                    List</li>             
            </ul>

            </div>

            <div class = "experience-container">
            <div class = "experience-heading">
            <div class = "split-line">
                    <div class = "bolded-name">
                    Secure Login Page 
                    </div>
                    <div class = "bolded-name">
                    June 2022 - August 2022
                    </div>
                </div>
            </div>
            <ul class = "resume-list">
                <li class = "normal">Gained proficiency in web development techniques utilizing <b>Java</b> in conjunction with the <b>Apache Tomcat Server</b></li>
                <li class = "normal">Acquired knowledge of <b>Spring MVC and Spring Security frameworks</b>, expanding understanding of robust web application
                development</li>  
                <li class = "normal">Designed and implemented a secure Login Page utilizing Spring Security measures</li>  
                <li class = "normal">Designed and implemented a secure Login Page utilizing Spring Security measures</li> 
                <li>Employed <b>Bcrypt</b> encryption for password security and effectively managed data using <b>MySQL</b> </li>            
            </ul>

            </div>

            <div class="resume-heading">Skills</div>
            <div class = "normal"><span class="inline-bold">Languages:</span> C++, C, Python, JavaScript, Java, C#, SQL</div>
                <div class = "normal"><span class="inline-bold">Tools:</span>NET Core, Azure Kubernetes Service(aks), Azure CLI, Spring MVC, Spring Security, Git, Arduino, Eagle PCB, Raspberry
Pi, Node MCU, Jersey, Postman, xUnit, KiCad</div>
                <div class = "normal"><span class="inline-bold">Design:</span> HTML, CSS</div>

            </div>
            </div>
            
            

        );
    }

    else if(about){
        return(
            <div class="about-page">
            <div class = "pageheader">
                <button onClick={handleHome} class="back-button">Home</button>
            <div class = "page-name">About</div>
            </div>
            <div class= "page-section-container">
                //<img src={require("./Profession_pic.jpg")} class="profile-pic" alt="Error"></img>
            </div>
            <div class= "page-section-container">
                <div class="para">
                Greetings! I'm Rohin Khanapure, a sophomore majoring in Computer Engineering at the University of Illinois Urbana-Champaign (UIUC). 
                Growing up in India has fostered a global perspective and granting me the privilege to collaborate with a diverse range of individuals.
                </div>
            </div>

            <div class= "page-section-container">
                <div class="para">
                During this past summer, I had the privilege of interning at Icertis, delving into the realms of software development and DevOps. 
                The pinnacle of this experience was creating and deploying a robust API using .NET Core on a Kubernetes Cluster, 
                sparking a keen interest in further exploring the vast landscape of software development.
                </div>
            </div>

            <div class= "page-section-container">
                <div class="para">
                Beyond academia, I'm deeply passionate about web development. Crafting various projects including UI clones, ToDoLists,
                 calculator apps, and even a secure login page using Java and Spring, has not only honed my skills but also broadened my horizons. 
                 This very website you're on was crafted using React, a testament to my enthusiasm for mastering modern web frameworks and exploring the art of web development.  
                  </div>
            </div>

            <div class= "page-section-container">
                <div class="para">
                In addition to web development, I am captivated by the realms of machine learning and cybersecurity. 
                The opportunity to safeguard digital landscapes and unlock new horizons in AI is something I find incredibly exciting. 
                  </div>
            </div>

            <div class= "page-section-container">
                <div class="para">
                Currently, my academic voyage has me immersed in courses like Data Structures and Analog Signal Processing, 
                fuelling my hunger for knowledge and propelling me towards exciting prospects in technology.
                Join me on this exhilarating voyage as I embrace innovation, strive for excellence, and continue to evolve in the world of technology!
                </div>
            </div>

            </div>
          );
    }

}

export default Home;
