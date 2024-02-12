import { Link, useNavigate } from 'react-router-dom'
import './home.css'
import { FaGamepad} from 'react-icons/fa6'
import { useState } from 'react'
import axios from 'axios'
export default function Home(){
    const [log_visibility,setlog]=useState(false)
    const [sign_visibility,setsign]=useState(false)
    const nav=useNavigate()
    const [sign_data,setsign_data] = useState({
        'name':'',
        'email':'',
        'pwd':''
    })
    const [sign_status,set_Sstatus]=useState('')

    const [log_data,setlog_data] = useState({
        'email':'',
        'pwd':''
    })
    // const [log_status,set_Lstatus]=useState('')

    function handle_sign(e){
        e.preventDefault();
        setsign(false)
        axios.post("http://localhost:5001/handle_sign",sign_data).then((res)=>{
        set_Sstatus(res.data.msg)
        // if(res.data.msg=='submitted') nav('/hod')
    })
    }

    function handle_log(e){
        e.preventDefault();
        setlog(false)
        axios.post("http://localhost:5001/handle_log",log_data).then((res)=>{
        set_Sstatus(res.data.msg)
        if(res.data.msg==='Login Successfull...'){ 
            nav('/turns/'+res.data.id);
        }
    })
    }
    return(
        <>
        <div className="container-fluid body1 bg-md" style={{minHeight: "100vh",position:'fixed'}}>
        <div className='row mt-2' >
                <div className='col-md-2 offset-md-10  col-8 offset-6'>
                    <div className='' style={{color:'white'}}>

                    <Link to='/about' style={{color:'white'}}>About</Link> |&nbsp;
                    <Link to='/contact' style={{color:'white'}}>Contact</Link>
                    </div>
                </div>
            </div>
            
            <div className='row' style={{marginTop:"25vh"}}>
                
                <div className='col-md-7 offset-md-6 mt-5'>
                    <div className='row'>
                        <div className='col'>
                            <p style={{color:(sign_status==='Submitted Successfully...')?'rgb(2, 196, 2)':(sign_status==='Login Successfull...')?'rgb(2, 196, 2)':'red'}}>{sign_status}</p>
                        </div>
                    </div>
                    { (log_visibility===false && sign_visibility===false)?(
                        <>
                    <button className='login_button mt-1' onClick={()=>setlog(true)}>LogIn</button>
                    <button className='signin_button mx-2' onClick={()=>setsign(true)}>SignIn</button>
                    </>):
                    (log_visibility===true)?
                        (
                            
                            <div className='col-md-7 offset-md-3'>
                            <div className='card login' >
                                <div className='card-header'>LogIn</div>
                                <div className='card-body'>
                                    <div className='card-text'>
                                        <form onSubmit={handle_log}>
                                            <div className='row'>
                                                <div className='col-md-4'>Email:</div>
                                                <div className='col-md-5'><input type='email'   value={log_data.email} onChange={(e)=>setlog_data({...log_data,email:e.target.value})} /></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-4'>Password:</div>
                                                <div className='col-md-5 mt-1'><input type='password'  value={log_data.pwd} onChange={(e)=>setlog_data({...log_data,pwd:e.target.value})} /></div>
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='col-md-12'> 
                                                    <button className='signin_button'>Login</button>
                                                    <button className='back m-1' onClick={()=>{setlog(false)}}>Back</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <div className='card-footer'>
                                <button className='signin_button' onClick={()=>{setlog(false)}}>Login</button>
                                <button className='back m-1' onClick={()=>{setlog(false)}}>Back</button>
                                </div> */}
                            </div>
                            
                            </div>
                        )
                        :
                        (<div className='col-md-7 offset-md-3'>
                        <div className='card login' >
                            <div className='card-header'>SignIn</div>
                            <div className='card-body'>
                                <div className='card-text'>
                                    <form onSubmit={handle_sign}>
                                        <div className='row'>
                                            <div className='col-md-4'>UserName:</div>
                                            <div className='col-md-5'><input type='text' value={sign_data.name} onChange={(e)=>setsign_data({...sign_data,name:e.target.value})} /></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4'>Email:</div>
                                            <div className='col-md-5 mt-1'><input type='text' value={sign_data.email} onChange={(e)=>setsign_data({...sign_data,email:e.target.value})} /></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4'>Password:</div>
                                            <div className='col-md-5 mt-1'><input type='text' value={sign_data.pwd} onChange={(e)=>setsign_data({...sign_data,pwd:e.target.value})} /></div>
                                        </div>
                                        <div className='row mt-3'>
                                        <div className='col-md-12'> <button className='signin_button'>Signin</button>
                                        <button className='back m-1' onClick={()=>{setsign(false)}}>Back</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className='card-footer'>
                            <button className='signin_button' onClick={()=>{
                                setsign(false)
                                handle_sign()}}>Signin</button>
                            <button className='back m-1' onClick={()=>{setsign(false)}}>Back</button>
                            </div> */}
                        </div>
                        </div>)
                    }
                </div>
        
            </div>
            <div className="row">
                <div className="col-md-3 offset-md-8" >
                    <div className='col-md-12'><button className="m-4 start " onClick={()=>nav('/turns')}><FaGamepad/> Play as a Guest</button></div>
                </div>
            </div>
            
        </div>
        </>
    )
}