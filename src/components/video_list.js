import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => { //props is an object passed from App 
    console.log('props', props); 
    const videoItems = props.videos.map((video) => {  //props.videos is an array of videos assigned to the Object's property, .map iterates over props.videos
                                                     //(video) is a single element in the array.
        return <VideoListItem key={video.etag} video={video} /> //key is property of video that is different for each video
    })
    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    );
};

export default VideoList