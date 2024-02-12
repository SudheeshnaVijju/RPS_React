import './turns.css'
import { useNavigate } from 'react-router-dom'
export default function Contact(){
    const nav=useNavigate()
    return(
        <>
        <div className="container-fluid about-main">
        <div className='row m-md-5 m-4' style={{minHeight:"80vh"}}>
            <div className='col-md-10 offset-md-1 pop col-12'>
                <center><h2 style={{color:'rgb(252, 77, 238)'}} className='mt-4'>CONTACT US</h2></center>
                <div className='row mt-5' style={{color:'rgb(202, 202, 202)',textAlign:'left'}}>
                    
                    <div className='col-md-6'>
                    <h3><b style={{fontSize:'20px',color:'rgb(14, 255, 163)'}}>Send us Mail:</b></h3>

                        <form>
                            <table>
                                <tr>
                                    <td>Name:</td>
                                    <td><input type='text' /></td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td><input type='email' /></td>
                                </tr>
                                <tr>
                                    <td>Number:</td>
                                    <td><input type='number' /></td>
                                </tr>
                                <tr>
                                    <td>Suggestions:</td>
                                    <td><textarea type='text' ></textarea></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className='col-md-6'>
                    <h3><b style={{fontSize:'20px',color:'rgb(14, 255, 163)'}}>Address:</b></h3>
                    <table>
                        <tr>
                            <th >Location:</th>
                            <td>&nbsp;&nbsp;Aditya Engineering College, AP, India</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td><a href='https://gmail.com/' style={{textDecoration:'none',color:'rgb(202, 202, 202)' }}>&nbsp;&nbsp;21a91a05f6@aec.edu.in</a></td>
                        </tr>
                        <tr>
                            <th>LinkedIn:</th>
                            <td><a href="https://www.linkedin.com/in/sudheeshna-vijju-232973228/" style={{textDecoration:'none',color:'rgb(202, 202, 202)' }}>&nbsp;&nbsp;21A91A05F6_LinkedIn</a></td>
                        </tr>
                        <tr>
                            <th>GitHub:</th>
                            <td><a href="https://github.com/SudheeshnaVijju" style={{textDecoration:'none',color:'rgb(202, 202, 202)' }}>&nbsp;&nbsp;21A91A05F6_GitHub</a></td>
                        </tr>
                        <tr>
                            <th>Feedback:</th>
                            <td>&nbsp;&nbsp;<textarea type='text'></textarea></td>
                        </tr>
                    </table>
                    </div>
                    
                </div>
                <div className='row mt-5'>
                        <center>
                            <button className='back' onClick={()=>nav('/')}>Back</button>
                        </center>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}