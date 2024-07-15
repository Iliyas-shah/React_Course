import useVideoDispatch from '../hooks/VideoDispatch';
import './addVideo.css'
import {useRef,useEffect, useState } from 'react';
const initialState={
    channel:"Coder Bhai",
    verified:true,
    topic:'',
    views:'',
    likes:''
};
export default function AddVideo({editableVideo,updateVideo}){
    const dispatch=useVideoDispatch();
    const [video,setVideo]=useState(initialState);
    const inputRef=useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        if(editableVideo)
        dispatch({type:'UPDATE',payload:video});
        else
        dispatch({type:'ADD',payload:video})
        setVideo(initialState);
    }
    function handleChange(e){
        // console.log(e.target.name,e.target.value);
        setVideo({...video,
            [e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        if(editableVideo)
        setVideo(editableVideo);
        inputRef.current.value="demo";
        inputRef.current.focus();

    },[editableVideo])

    return(
        <form>
            <input ref={inputRef} type="text" name="topic" onChange={handleChange} placeholder='title' value={video.topic}/>
            <input type="text" name="views" onChange={handleChange} placeholder='views' value={video.views}/>
            <input type="text" name="likes" onChange={handleChange} placeholder='likes' value={video.likes} />

            <button 
            onClick={handleSubmit}
            // onClick={()=>{
            // setVideos(
            //     [...videos,
            //     {
            //         id:videos.length+1,
            //         topic:"Angular Tutorial",
            //         views:1400,
            //         channel:"CodPack",
            //         likes:125,
            //         verified:false
            //         }
            // ]);
            // }}
            >
            {editableVideo? 'Edit':'Add'} Video</button>
        </form>
    );
}