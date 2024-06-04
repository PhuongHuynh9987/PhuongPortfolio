import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"
library.add(faGithub)
import K12 from "../assets/Transformation_y_residual_plot.png"
import ethererum from "../assets/camcos.png"
import Ethereum from "./Ethereum"
import simulation from "../assets/simulation-1.png"

export default function DataAnalysis(){
    const [click, setClick ] = useState(false);

    function clickingItem(e){
        e.preventDefault();
        if(click === false)
            setClick(true);
        else
            setClick(false)
    }
    return (
        <div className="mb-20 grid gap-5 mx-16">
            {/* Project 1 */}
           <div className="flex flex-col gap-2 project">
                <h3>Which factors affect K-12 academic performance?</h3>
                <h4>Tools: R programming</h4>
               
                <div className="flex gap-4">
                    <div className="project-item">
                        <img src={K12} alt="" />
                    </div>
                    <p className="h-24 overflow-scroll">In our Regression Theory course project, we delved into the examination of influences on K-12 students' academic performance in CAASPP tests using Regression Analysis. We employed data aggregation techniques to enhance our analysis. Furthermore, we validated regression model assumptions and identified multicollinearity issues.</p>
                </div>
                <div className="flex items-center gap-2 justify-end">
                    <Link to={'/'}><h2><FontAwesomeIcon icon="fa-brands fa-github" /></h2></Link>
                    <h5><a href="Project_Report.pdf" target="_blank">Report</a></h5>
                </div>
           </div>

            {/* Project 2 */}
           <div className="flex flex-col gap-2 project">
                {/* <h3 onClick={clickingItem} className="link-title"><Link to={'/ethereum'}>Ethereum Blockchain - CAMCOS project</Link></h3> */}
                <h3 onClick={clickingItem} className="link-title">Ethereum Blockchain Research - CAMCOS project</h3>

                {click && <Ethereum />}
                {!click && (
                    <div>
                         <h4>Tools: Pandas, Matplotlib, NumPy</h4>
                        <div className="flex gap-4">
                            <div className="project-item">
                                <img src={ethererum} alt="" />
                            </div>
                            <p className="h-24 overflow-scroll">A real-life project sponsored by the Ethereum blockchain researchers, with a specific emphasis on achieving censorship resistance.</p>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <Link to={'/'}><h2><FontAwesomeIcon icon="fa-brands fa-github" /></h2></Link>
                            <h5><a href="https://hackmd.io/JuCR32GLTKK8I75FbYO04g" target="_blank">Report</a></h5>
                        </div>
                    </div>
                )}
           </div>
           
            {/* Project 3 */}
            <div className="flex flex-col gap-2 project">
                    <h3>Simulation - Probability Theory</h3>
                    <h4>Tools: Python, Matplotlib, NumPy</h4>
                
                    <div className="flex gap-4">
                        <div className="project-item">
                            <img src={simulation} alt="" />
                        </div>
                        <p className="h-24 overflow-scroll">This simple project involves a fundamental simulation that integrates principles from a Probability Theory course</p>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                        <Link to={'https://github.com/PhuongHuynh9987/Simulation-project'} target="_blank"><h2><FontAwesomeIcon icon="fa-brands fa-github" /></h2></Link>
                        <h5><a href="https://github.com/PhuongHuynh9987/Simulation-project" target="_blank">Report</a></h5>
                    </div>
            </div>
        </div>
    )
}
