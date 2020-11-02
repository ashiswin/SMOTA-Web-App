import React, { useEffect, useState } from "react";
import axios from 'axios';

interface Props {
  video_id: string
}

const API_KEY = "AIzaSyDB_Si74fLKZrCMFnQfuNlcOq-ejn0xIwo";

function handleClick(url: string) {
  window.open(url);
}

const VideoListItem: React.FC<Props> = ({ video_id }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const requestURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${video_id}&key=${API_KEY}`;
    axios.get(requestURL)
      .then(res => {
        const response = res.data.items[0].snippet;
        const titleParts = response.title.split(" - ");

        setTitle(titleParts[1]);
        setDate(titleParts[2]);
        setDescription(response.description);
        setThumbnail(response.thumbnails.medium.url);
      })
  });

  return(
    <div className="col s12">
      <div className="card waves-effect" onClick={() => handleClick("https://youtube.com/watch?v=" + video_id)}>
        <div className="card-image">
          <img src={thumbnail} alt="Video thumbnail" />
          <span 
            className="card-title" 
            style={{background: "rgba(0,0,0,0.15)", width: '100%', height: '100%'}}>
          </span>
          <a
            href="#!"
            className="btn-floating btn-large halfway-fab waves-effect waves-light red" 
            onClick={() => handleClick("https://youtube.com/watch?v=" + video_id)}>
            <i className="material-icons">play_arrow</i>
          </a>
        </div>
        <div className="card-content">
          <h5 style={{marginTop: -8}}>{title}</h5>
          <p style={{fontSize: '18px', marginTop: -8, marginBottom: 8, fontFamily: 'Montserrat'}}>{date}</p>
          <p>{description.split("\n\n")[0].split('\n').map(str => <p>{str}</p>)}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;