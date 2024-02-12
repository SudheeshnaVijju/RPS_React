import {  useNavigate } from 'react-router-dom'
import './turns.css'
export default function About(){
    const nav=useNavigate()
    return(
        <>
        <div className="container-fluid about-main">
        <div className='row m-md-5 m-4' style={{minHeight:"80vh"}}>
            <div className='col-md-10 offset-md-1 pop col-12'>
                <center><h2 style={{color:'rgb(252, 77, 238)'}} className='mt-3'>ABOUT THE GAME</h2></center>
                <div className='row' style={{textAlign:'left',color:'rgb(202, 202, 202)'}}>
                    <p>
                    <b style={{fontSize:'20px',color:'rgb(14, 255, 163)'}}>Game Rules:</b><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <b style={{color:'rgb(186, 248, 224)'}}> Rock beats Scissors:</b> The rock crushes the scissors.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <b  style={{color:'rgb(186, 248, 224)'}}> Scissors beats Paper:</b> The scissors cut the paper.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <b  style={{color:'rgb(186, 248, 224)'}}> Paper beats Rock:</b> The paper covers the rock. 
                    </p>
                    <p>
                    <b style={{fontSize:'20px',color:'rgb(14, 255, 163)'}}>How to Play:</b>
                    <ol type='1'>
                        <li>Click the "Start" button to initiate the game.</li>
                        <li>Select the number of turns.</li>
                        <li>After that Game page will be opened.</li>
                        <li>You have to choose "ROCK/SCISSOR/PAPER" option.</li>
                        <li>AI will automatically generate it's option.</li>
                        <li>For every turn win status will be displayed.</li>
                        <li>After completing all the turns, the player having the high scare will be winner.</li>
                    </ol>
                    </p>
                    <div className='row'>
                        <center>
                            <button className='back' onClick={()=>nav('/')}>Back</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}