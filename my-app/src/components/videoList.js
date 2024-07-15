import Video from './Video'
import useVideo from '../hooks/Videos';
export default function VideoList({editVideo}){
    const videos=useVideo();
    return(
        <>
        {videos.map(video=>
            <Video editVideo={editVideo} key={video.id} {...video}/>
          )}
        </>
    );
}