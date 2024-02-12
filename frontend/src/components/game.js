import'./home.css'
import { FaRedditAlien, FaHandFist, FaUser, FaHandPeace, FaHand,  FaArrowDown } from "react-icons/fa6";
import { useParams } from 'react-router-dom'
import axios from 'axios';
export default function Game(){
    const count=useParams().count
    const id=useParams().id  
    var turn=0;
    let [computer,user]=[0,0];
    let choices_object ={
        'rock' : {
            'rock' : 'draw',
            'scissor' : 'win',
            'paper' : 'lose'
        },
        'scissor' : {
            'rock' : 'lose',
            'scissor' : 'draw',
            'paper' : 'win'
        },
        'paper' : {
            'rock' : 'win',
            'scissor' : 'lose',
            'paper' : 'draw'
        }
    };

    function checker(input){

        let result_ref = document.getElementsByClassName("result_ref")[0];
    // let exit=document.getElementById("exit");

        let icon1=document.getElementsByClassName("uicon-1")[0];
        let icon2=document.getElementsByClassName("uicon-2")[0];
        let icon3=document.getElementsByClassName("uicon-3")[0];
        
        let icon_1=document.getElementsByClassName("cicon-1")[0];
        let icon_2=document.getElementsByClassName("cicon-2")[0];
        let icon_3=document.getElementsByClassName("cicon-3")[0];
        turn++;
       
        var choices =["rock" , "scissor" ,"paper"];
        var num=Math.floor(Math.random()*3);

        document.getElementsByClassName("comp_choice")[0].innerHTML=`Computer choose : <span> ${choices[num].toUpperCase()} </span>`;
    
        document.getElementsByClassName("user_choice")[0].innerHTML =`You choose : <span> ${input.toUpperCase()} </span>`;
    
        document.getElementsByClassName("starts")[0].innerHTML = ` `;

        if(input==="rock"){
            icon1.style.transition="transform 0.5s ease";
            icon1.style.transform="scale(1.09)";
            /*icon1.style.height="100px";
            icon1.style.width="100px";*/
            icon1.style.borderColor="white";
            icon1.style.borderWidth="3px";
            icon1.style.boxShadow="0 0px 15px rgb(249, 3, 204) inset, 0 0px 15px rgb(249, 3, 204),0 0px 15px rgb(249, 3, 204) inset, 0 0px 15px rgb(249, 3, 204)";
    
            icon2.style.transition="transform 0.3s ease";
            icon2.style.transform="scale(1)";
            icon2.style.borderColor="rgb(241, 249, 3)";
            icon2.style.borderWidth="1px";
            icon2.style.boxShadow="0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3),0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3)";
    
            icon3.style.transition="transform 0.3s ease";
            icon3.style.transform="scale(1)";
            icon3.style.borderColor="rgb(3, 138, 249)";
            icon3.style.borderWidth="1px";
            icon3.style.boxShadow="0 0px 10px rgb(3, 130, 249) inset, 0 0px 10px rgb(3, 138, 249),0 0px 10px rgb(3, 138, 249) inset, 0 0px 10px rgb(3, 138, 249)";
        }
        if(input==="scissor"){
            icon2.style.transition="transform 0.5s ease";
            icon2.style.transform="scale(1.09)";
            icon2.style.borderColor="white";
            icon2.style.borderWidth="3px";
            icon2.style.boxShadow="0 0px 15px rgb(241, 249, 3) inset, 0 0px 15px rgb(241, 249, 3),0 0px 15px rgb(241, 249, 3) inset, 0 0px 15px rgb(241, 249, 3)";
    
            
            icon3.style.transition="transform 0.3s ease";
            icon3.style.transform="scale(1)";
            icon3.style.borderColor="rgb(3, 138, 249)";
            icon3.style.borderWidth="1px";
            icon3.style.boxShadow="0 0px 10px rgb(3, 130, 249) inset, 0 0px 10px rgb(3, 138, 249),0 0px 10px rgb(3, 138, 249) inset, 0 0px 10px rgb(3, 138, 249)";
            
            icon1.style.transition="transform 0.3s ease";
            icon1.style.transform="scale(1)";
            icon1.style.borderColor="rgb(249, 3, 204)";
            icon1.style.borderWidth="1px";
            icon1.style.boxShadow="0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204),0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204)";
    
    
        }
        if(input==="paper"){
            icon3.style.transition="transform 0.5s ease";
            icon3.style.transform="scale(1.09)";
            icon3.style.borderColor="white";
            icon3.style.borderWidth="3px";
            icon3.style.boxShadow="0 0px 15px rgb(3, 130, 249) inset, 0 0px 15px rgb(3, 138, 249),0 0px 15px rgb(3, 138, 249) inset, 0 0px 15px rgb(3, 138, 249)";
    
            icon2.style.transition="transform 0.3s ease";
            icon2.style.transform="scale(1)";
            icon2.style.borderColor="rgb(241, 249, 3)";
            icon2.style.borderWidth="1px";
            icon2.style.boxShadow="0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3),0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3)";
    
    
            icon1.style.transition="transform 0.3s ease";
            icon1.style.transform="scale(1)";
            icon1.style.borderColor="rgb(249, 3, 204)";
            icon1.style.top="100px";
            icon1.style.left="636px";
            icon1.style.borderWidth="1px";
            icon1.style.boxShadow="0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204),0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204)";
        }
        if(choices[num]==="rock"){
            icon_1.style.transition="transform 0.5s ease";
            icon_1.style.transform="scale(1.09)";
            icon_1.style.borderColor="white";
            icon_1.style.borderWidth="3px";
            icon_1.style.boxShadow="0 0px 15px rgb(249, 3, 204) inset, 0 0px 15px rgb(249, 3, 204),0 0px 15px rgb(249, 3, 204) inset, 0 0px 15px rgb(249, 3, 204)";
    
            icon_2.style.transition="transform 0.3s ease";
            icon_2.style.transform="scale(1)";
            icon_2.style.borderColor="rgb(241, 249, 3)";
            icon_2.style.borderWidth="1px";
            icon_2.style.boxShadow="0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3),0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3)";
    
            icon_3.style.transition="transform 0.3s ease";
            icon_3.style.transform="scale(1)";
            icon_3.style.borderColor="rgb(3, 138, 249)";
            icon_3.style.borderWidth="1px";
            icon_3.style.boxShadow="0 0px 10px rgb(3, 130, 249) inset, 0 0px 10px rgb(3, 138, 249),0 0px 10px rgb(3, 138, 249) inset, 0 0px 10px rgb(3, 138, 249)";
        }
        if(choices[num]==="scissor"){
            icon_2.style.transition="transform 0.5s ease";
            icon_2.style.transform="scale(1.09)";
            icon_2.style.borderColor="white";
            icon_2.style.borderWidth="3px";
            icon_2.style.boxShadow="0 0px 15px rgb(241, 249, 3) inset, 0 0px 15px rgb(241, 249, 3),0 0px 15px rgb(241, 249, 3) inset, 0 0px 15px rgb(241, 249, 3)";
    
            
            icon_3.style.transition="transform 0.4s ease";
            icon_3.style.transform="scale(1)";
            icon_3.style.borderColor="rgb(3, 138, 249)";
            icon_3.style.borderWidth="1px";
            icon_3.style.boxShadow="0 0px 10px rgb(3, 130, 249) inset, 0 0px 10px rgb(3, 138, 249),0 0px 10px rgb(3, 138, 249) inset, 0 0px 10px rgb(3, 138, 249)";
    
            icon_1.style.transition="transform 0.4s ease";
            icon_1.style.transform="scale(1)";
            icon_1.style.borderColor="rgb(249, 3, 204)";
            icon_1.style.borderWidth="1px";
            icon_1.style.boxShadow="0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204),0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204)";
    
    
        }
        if(choices[num]==="paper"){
            icon_3.style.transition="transform 0.5s ease";
            icon_3.style.transform="scale(1.09)";
            icon_3.style.borderColor="white";
            icon_3.style.borderWidth="3px";
            icon_3.style.boxShadow="0 0px 15px rgb(3, 130, 249) inset, 0 0px 15px rgb(3, 138, 249),0 0px 15px rgb(3, 138, 249) inset, 0 0px 15px rgb(3, 138, 249)";
    
            icon_2.style.transition="transform 0.4s ease";
            icon_2.style.transform="scale(1)";
            icon_2.style.borderColor="rgb(241, 249, 3)";
            icon_2.style.borderWidth="1px";
            icon_2.style.boxShadow="0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3),0 0px 10px rgb(241, 249, 3) inset, 0 0px 10px rgb(241, 249, 3)";
    
    
            icon_1.style.transition="transform 0.4s ease";
            icon_1.style.transform="scale(1)";
            icon_1.style.borderColor="rgb(249, 3, 204)";
            icon_1.style.borderWidth="1px";
            icon_1.style.boxShadow="0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204),0 0px 10px rgb(249, 3, 204) inset, 0 0px 10px rgb(249, 3, 204)";
        }
    
        let com_choice=choices[num];
        switch(choices_object[input][com_choice]){
            case 'win':
                result_ref.style.cssText =
                "color:rgb(250, 250, 250); text-shadow: 2px 2px 3px rgb(73, 214, 51),-2px 2px 3px rgb(73, 214, 51),-2px -2px 3px rgb(73, 214, 51),2px -2px 3px rgb(373, 214, 51);";
                result_ref.innerHTML = 'YOU WIN';
                user++;
                break;
            case 'lose':
                result_ref.style.cssText =
                "color:rgb(250, 250, 250); text-shadow: 2px 2px 3px rgb(253, 4, 4),-2px 2px 3px rgb(253, 4, 4),-2px -2px 3px rgb(253, 4, 4),2px -2px 3px rgb(253, 4, 4); ";
                result_ref.innerHTML = 'YOU LOSE'; 
                computer++;
                break;
            case 'draw':
                result_ref.style.cssText =
                "color:rgb(250, 250, 250); text-shadow: 2px 2px 3px rgb(190, 4, 252),-2px 2px 3px rgb(190, 4, 252),-2px -2px 3px rgb(190, 4, 252),2px -2px 3px rgb(190, 4, 252);";
                result_ref.innerHTML = 'DRAW';
                break;
            default: console.log()
        }
    
        
    //    document.getElementById("CS").innerHTML = computer;
    //    document.getElementById("YS").innerHTML = user;
    // eslint-disable-next-line
    if (turn==count) {
        
            
            // document.getElementsByClassName("comp_choice")[0].innerHTML=`Your score: <span> ${user} </span>`;
    
            // document.getElementsByClassName("user_choice")[0].innerHTML =`Computer score : <span> ${computer} </span>`;
    
            if(computer<user){
                result_ref.style.cssText =
                "color:rgb(250, 250, 250); font-size:30px; text-shadow: 2px 2px 3px rgb(73, 214, 51),-2px 2px 3px rgb(73, 214, 51),-2px -2px 3px rgb(73, 214, 51),2px -2px 3px rgb(373, 214, 51);";
                result_ref.innerHTML = 'YOU WON THE GAME';
                incwin(id)
            }
            else{
                result_ref.style.cssText =
                "color:rgb(250, 250, 250); font-size:30px; text-shadow: 2px 2px 3px rgb(253, 4, 4),-2px 2px 3px rgb(253, 4, 4),-2px -2px 3px rgb(253, 4, 4),2px -2px 3px rgb(253, 4, 4); ";
                result_ref.innerHTML = 'YOU LOST THE GAME';
                inclose(id)
            }
    
            // exit.style.cssText="color: red; background-color:black; font-family:cursive; font-size:21px;";
            // exit.style.borderWidth='2px';
            // exit.style.borderColor='rgb(253, 84, 75)';
            // exit.style.borderRadius='20px';
            // exit.style.pointerEvents='visible';
            // exit.style.cursor='pointer';
            // exit.style.boxShadow='0 0px 10px rgb(252, 62, 62) inset, 0 0px 10px rgb(252, 62, 62),0 0px 10px rgb(252, 62, 62) inset, 0 0px 10px rgb(252, 62, 62)';
            // exit.innerHTML = 'Exit';
    
            icon1.style.pointerEvents="none";
    
            icon2.style.pointerEvents="none";
    
            icon3.style.pointerEvents="none";
    
    
            // let rs=document.getElementById("restart");
            // rs.style.color="black";
            // rs.style.border="none";
            // rs.style.boxShadow="none";
            // rs.style.pointerEvents="none";
    
            // let bb=document.getElementById("backtohome");
            // bb.style.color="black";
            // bb.style.border="none";
            // bb.style.boxShadow="none";
            // bb.style.pointerEvents="none";

            IncTotal(id);
       }

    }

    function IncTotal(id){
        // const id=useParams().id
        if(id){
            axios.post("http://localhost:5001/inctotal/"+id).then((res)=>{
        })
        }
    }
    function incwin(id){
        // const id=useParams().id
        if(id){
            axios.post("http://localhost:5001/incwin/"+id).then((res)=>{
        })
        }
    }
    function inclose(id){
        // const id=useParams().id
        if(id){
            axios.post("http://localhost:5001/inclose/"+id).then((res)=>{
        })
        }
    }
    return(
        <>      
        <div className="container-fluid game"  style={{minHeight: "100vh",position:'fixed'}}>
        
            <div className='row '>
                <div className='col-10 offset-1 col-md-6 offset-md-3'>
                    <div className='row mt-4' >
                    <div className='col-md-3 col-3 p-md-2 p-1' >
                        <div className='computer_icon pb-3 pt-0'>
                            <FaRedditAlien />
                        </div>
                    </div>
                    <div className='col-md-3 col-3 p-md-2 p-1' ><div className='computer_icon cicon-1 pb-3 pt-0'><FaHandFist /></div></div>
                    <div className='col-md-3 col-3 p-md-2 p-1' ><div className='computer_icon cicon-2 pb-3 pt-0'><FaHandPeace /></div></div>
                    <div className='col-md-3 col-3 p-md-2 p-1' ><div className='computer_icon cicon-3 pb-3 pt-0'><FaHand /></div></div>
                </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className='col-10 offset-1 col-md-6 main offset-md-3 '>
                    <div className='mt-5 pt-3'>
                    <div className='starts mt-3'>START THE GAME<br></br><br></br><FaArrowDown /> </div>
                    <div className='comp_choice mt-2'></div>
                    <div className='user_choice mt-2'></div>
                    <div className='result_ref mt-3'></div>
                    </div>
                </div>
                <div className='col-1 offset-1'></div>
                
            </div>
            <div className='row mt-3'>
                <div className='col-10 offset-1 col-md-6 offset-md-3'>
                    <div className='row' >
                    <div className='col-md-3 col-3 p-md-2 p-1' >
                        <div className='computer_icon pb-3 pt-0'>
                            <FaUser />
                        </div>
                    </div>
                    <div className='col-md-3 col-3 p-md-2 p-1' ><div className='computer_icon icon-1 uicon-1 pb-3 pt-0' onClick={()=>{checker('rock')}}><FaHandFist /></div></div>
                    <div className='col-md-3 col-3 p-md-2 p-1' ><div className='computer_icon icon-2 uicon-2 pb-3 pt-0' onClick={()=>{checker('scissor')}}><FaHandPeace /></div></div>
                    <div className='col-md-3 col-3 p-md-2 p-1' ><div className='computer_icon icon-3 uicon-3 pb-3 pt-0' onClick={()=>{checker('paper')}}><FaHand /></div></div>
                </div>
                </div>
            </div>
            <div className='mt-3 row'>&nbsp;</div>
        </div>
        </>
    )
}