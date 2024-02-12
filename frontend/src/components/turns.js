// import { useState } from 'react'
import './turns.css'
import { useNavigate, useParams } from 'react-router-dom';
export default function Turns(){
    const id=useParams().id
    var path;
    console.log(id)
    const nav=useNavigate()
    function handleClick(count){
        if(id){
            path='/game/'+id+'/'+count
        }
        else{
            path='/game/'+count
        }
        nav(path)
    }
    return(
        <>
        <div className=" container-fluid body2"  style={{minHeight: "100vh",position:'fixed'}}>
            <div className="row pt-1">
                <div className="col-md-4 offset-md-4 mt-5 select" style={{color:"white"}}>
                    Select the Number of Turns
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <button className="turn10" onClick={()=>{
                        handleClick(10)}}>10 Turns</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <button className="turn15" onClick={()=>{
                        handleClick(15)}}>15 Turns</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <button className="turn20"onClick={()=>{
                        handleClick(20)}}>20 Turns</button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <button className="turns_back"onClick={()=>{
                        nav('/')}}>Back</button>
                </div>
            </div>
        </div>
        </>
    )
}