import React from 'react';

const VideoListItem = (props) => { //passed from video list
    const video = props.video; //es6 - remove this line and put {video} where props is passed through
    const onVideoSelect = props.onVideoSelect
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
        <div className="media-left">
        <img className="media-object" src={imageUrl} />
        </div>
        
        <div className="media-body"> 
            <div className="media-heading">
            </div>
            </div>
        </div>
        </li>
    )
};

export default VideoListItem