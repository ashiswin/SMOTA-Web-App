import React from "react";

interface Props {
  id: string,
  title: string,
  date: string,
  description: string,
  thumbnail: string,
}

function handleClick(url: string) {
  window.open(url);
}

const VideoListItem: React.FC<Props> = ({ id, title, date, description, thumbnail }) => {
  return(
    <div className="col s12">
      <div className="card waves-effect" onClick={() => handleClick("https://youtube.com/watch?v=" + id)}>
        <div className="card-image">
          <img src={thumbnail} alt="Video thumbnail" />
          <span 
            className="card-title" 
            style={{background: "rgba(0,0,0,0.15)", width: '100%', height: '100%'}}>
          </span>
          <a
            href="#!"
            className="btn-floating btn-large halfway-fab waves-effect waves-light red" 
            onClick={() => handleClick("https://youtube.com/watch?v=" + id)}>
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