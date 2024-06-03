import { Link } from "react-router-dom"
import camcos4 from "../assets/camcos-4.png"
import camcos1 from "../assets/camcos-1.png"
import camcos2 from "../assets/camcos-2.png"

export default function Ethereum() {    
    const q1 = [
        "How does the fluctuation in peak hours impact the base fee and mempool traffic? ",
        "Over the course of these three days, what is:"]

    const q2 = [
        "The average gas included in each block throughout a 24-hour period?",
        "The base fee over a 24-hour duration?",
        "The amount of includable gas over the course of 24 hours?",
    ]

    const obs = [
        "the base fee reaches the highest at between 3-9 pm and hits its lowest point around 1-9 am,",      
        "the block sizes (total gas included in each block) are largest from 1 to 9 pm,",
        "the includable gas in the mempool decreases over time, along with a reduction in the number of transactions in the mempool."
    ]
    return (
        <div>
            <section class="Ethereum" id = "Ethereum">
                <div class="Ethereum-body">
                    {/* <h1> Ethereum Blockchain Research </h1> */}
            
                    {/* Introduction  */}
                    <section>
                        <h3>I. Introduction</h3>
                        <p> <span class = 'span'> </span> As part of the CAMCOS (Center for Applied Mathematics, 
                            Computation, and Statistics) course, this project is conducted by the Department 
                            of Mathematics and Statistics at San Jose State University, with sponsorship from 
                            Ethereum researchers. The primary objective is to attain censorship resistance.<br />
            
                            <span class = 'span'> </span> Within this project, we are organized into two teams: a data team and a theory team. The data team is 
                            responsible for collecting data from BlockNative, conducting data analysis, and performing data 
                            manipulation. Meanwhile, the theory team utilizes this information, along with comprehensive research 
                            on the Ethereum blockchain system, to analyze a potential solution—specifically, a forward inclusion 
                            list (FIL) design intended to enhance censorship resistance. While the primary project details can be accessed  
                            <a href="https://github.com/krzhang/camcos/tree/main/CAMCOS_2023F/Data_Exploration" target="_blank">here</a>, 
                            I have independently conducted a supplementary analysis to uncover crucial insights that may contribute to the overall 
                            research effort as a theory team member.
                        </p>
            
                    </section>
            
            
                    {/* Data Aggregating*/}
                    <section>
                        <h3> II. Data Aggregating and Processing</h3>
                        <p><span class = 'span'> </span>Firstly, I used the data files provided by the data team
                        to include the data from September 4th to September 7th for my analysis.</p>
                        <img src="images/camcos-1.png" alt="" />
                        <p><span class = 'span'> </span>After that, I combined the data into one csv file. 
                            The data information and data cleaning process detail can be found
                            <a className="text-blue-600" href="https://github.com/PhuongHuynh9987/Ethereum-Blockchain-CAMCOS-project/blob/main/Code/Data-info-and-cleaning.ipynb" target="_blank"> here. </a>
                            There were data entry errors, and some unnecessary columns were removed from the data frame. 
                            This produced a complete table that includes only confirmed and failed transactions in the US region. 
                            Here is the complete table. 
                        </p>
                        <div className="flex justify-center m-4">
                            <img src={camcos1} alt="" />
                        </div>
            
                    </section>
            
                    {/* Data Analyzing */}
                    <section>
                        <h3>III. Data Analyzing</h3>
                        <p><span class = 'span'> </span>To explore the memory pool data, I gave myself some questions 
                            that could be answered through the data. </p>

                        <ul>
                            {q1.map((q) =>
                                <li>{q}</li>
                            )}
                        </ul>
                        <ol>
                            {q2.map((qq) =>
                            <li>{qq}</li>
                            )}
                        </ol>
                            
                        <p><span class = 'span'> </span>To focus on a 24-hour timeframe, I created an "hour" column to facilitate data 
                            grouping on an hourly basis. In the data processing phase, I utilized the confirmed transaction gas 
                            information to compute includable gas. This represents the gas available in the mempool that can be 
                            included into the current block. The algorithm involves deducting the block number at which a 
                            confirmed transaction is finalized ('curblocknumber') from the number of blocks the transaction 
                            had been waiting for inclusion. The gas from the transaction is then added to these waiting blocks, 
                            contributing to the includable gas.
                        </p>
            
                        <p><span class = 'span'> </span>After data processing, I used the information to create a dataframe that contains
                        average base fee, average includable gas per block, average blocksize (included gas in each block),
                        and average number of transaction in each block over 24 hours in those four days.</p>
                        
                        <div className="flex justify-center m-4">
                            <img src={camcos2} alt="" />
                        </div>
                        
                        <p>Looking at the graphs, I notice that,  </p>
                            <ol>
                                {obs.map((ob)=>
                                    <li>{ob}</li>
                                )}
                            </ol>
                    
            
                        <p><span class = 'span'> </span>The odd thing is, the block sizes are still high even though the includable gas decreases.
                            One possiblility is because of the private transaction. Private transactions are the transactions
                            that go directly to the validators without going through the mempool. I decided to seperate the
                            transactions that have the pending is zero (private transactions) and 
                            transactions that have the pending is greater than zero.  
                        </p>
            
                        <div className="flex justify-center m-4">
                            <img src={camcos4} alt="" />
                        </div>
            
                        <p><span class = 'span'> </span>The private transactions seem to stay consistent between the peaked hours and the slow hours.
                            This explains why the block sizes are high even though there is little includable gas in the mempool.
                        </p>
            
                    </section>
            
                    {/* Conclusion */}
                    <section>
                        <h3>IV. Conclusion</h3>
                        <p><span class = 'span'> </span>This finding is personally meaningful to me. Private transactions uncover a hidden market working 
                        in parallel with mempool activities. This advantage gives blockchain workers the ability to create 
                        a secondary market, allowing them to bypass transactions susceptible to censorship. 
                        This presents a challenge to the censorship resistance of the Ethereum blockchain system (through topping-off market
                        and abusing the spirit of the FIL sections).
                        </p>
                
                        <p>Our team has created a comprehensive report featuring in-depth analysis supported by statistical
                            and mathematical evidence, along with effective documentation and research.
                            This <a href="https://hackmd.io/JuCR32GLTKK8I75FbYO04g">report</a> will guide readers from a brief introduction about blockchain and censorship to the FIL mechanism.
                        </p>
                    </section>
                </div>
            </section>
        </div>

    )
}