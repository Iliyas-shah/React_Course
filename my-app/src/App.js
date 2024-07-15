import React, { useContext, useReducer } from 'react'
import './App.css'
import videoDB from './data/data';
import { useState } from 'react';
import AddVideo from './components/addVideo';
import VideoList from './components/videoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import Counter from './components/counter';
export default function App() {

  const [editableVideo,setEditableVideo]=useState(null);
  const [videos,dispatch]=useReducer(videoReducer,videoDB);

  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        return [...videos,
          {...action.payload,id:videos.length+1}
          ]
      case 'DEL':
        return videos.filter(video=>video.id!==action.payload)
      case 'UPDATE':
        const index=videos.findIndex(v=>v.id===action.payload.id);
        const newVideos=[...videos]
        newVideos.splice(index,1,action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }
  

  // const themeContext=useContext(ThemeContext);
  // console.log({themeContext});
  const [mode,setMode]=useState('darkMode')
  // const [videos,setVideos]=useState(videoDB);
  
  // console.log("hello");
  // let listitem=videos.map(video=>
  //   <Video {...video}
  //   />
  // );
  // function addVideos(video){
    
  //   in Reducer = action:{type:'ADD, payload:video}
  //   setVideos(
  //     [...videos,
  //     {...video,id:videos.length+1}
  //     ]
  //   );
  // }
  // function deleteVideo(id){

  //   //in Reducer = action:{type:'ADD, payload:video}
  //   dispatch({type:'DEL',payload:id});
  //   // setVideos(videos.filter(video=>video.id!==id))
      
  //   console.log("delete function");
  // }
  function editVideo(video){
    setEditableVideo(video);
  }
  // function updateVideo(video){
    
  //   // setVideos(newVideos);
  // }
  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
    <div className={`App ${mode}`}>
      <div>Videos</div>
      <Counter></Counter>
      <button onClick={()=>setMode(mode=='darkMode'?'lightMode':'darkMode')}
      >Mode</button>
      <AddVideo editableVideo={editableVideo} />
      <VideoList editVideo={editVideo} ></VideoList>
      {/* <Video
      id="2"
      topic="java"
      views={2000}
      channel="Iliyas"
      likes={200}
      verified={true}
      /> */}
      {/* <Counter></Counter> */}
    </div>
    </VideoDispatchContext.Provider>
    </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}