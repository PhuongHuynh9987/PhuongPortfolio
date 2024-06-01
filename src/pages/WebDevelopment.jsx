import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"
library.add(faGithub)
import diagram from "../assets/diagram.png"
import hosthub from "../assets/hosthub.png"

export default function WebDevelopment(){
    return (
        <div className="mb-20 grid gap-5 mx-16">
            {/* Project 1 */}
           <div className="flex flex-col gap-2 project">
                <h3>HostHub</h3>
                <h4>Tools: Python Flask, ReactJS, Redis NoSQL Database, TailwindCSS, NodeJS</h4>
               
                <div className="flex gap-4">
                    <div className="project-item">
                        <img src={hosthub} alt="" />
                    </div>
                    <p className="h-24 overflow-scroll">HostHub functions similarly to the Airbnb platform, providing a solution that connects incoming students with local hosts in San Jose. This service facilitates accommodations and support for students.</p>
                </div>
                <div className="flex items-center gap-2 justify-end">
                    <Link to={'https://github.com/PhuongHuynh9987/CS157C-Team11'} target="_blank"><h2><FontAwesomeIcon icon="fa-brands fa-github" /></h2></Link>
                    <h5><a href="Project-report.pdf" target="_blank">Report</a></h5>
                </div>
           </div>

            {/* Project 2 */}
            <div className="flex flex-col gap-2 project">
                    <h3>E-commerce Shopaholic</h3>
                    <h4>Tools: Java, Tomcat Servlet, SQL, MySQL</h4>
                
                    <div className="flex gap-4">
                        <div className="project-item">
                            <img src={diagram} alt="" />
                        </div>
                        <p className="h-24 overflow-scroll">In this introductory Database Management class project, 
                            we focused on the design of relational tables, utilized Java for web programming,
                            and employed queries using MySQL to implement an e-commercial webpage.</p>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                        <Link to={'https://github.com/PhuongHuynh9987/Shopaholic-Ecommerce'} target="_blank"><h2><FontAwesomeIcon icon="fa-brands fa-github" /></h2></Link>
                        <h5><a href="Final-report-CS-157A.pdf" target="_blank">Report</a></h5>
                    </div>
            </div>
        </div>
    )
}