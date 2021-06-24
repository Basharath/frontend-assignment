import React from 'react';
import moment from 'moment';
import closeIcon from '../images/close-icon.svg';

export default function Modal({movie, onClose}) {
  const { title, image_path, release_date, overview, vote_average, vote_count} = movie;

  const handleClick = (e) => {
    if(e.target.classList.contains('modal-screen')) onClose();
  }

  return (
    <div className="modal-screen" onClick={handleClick}>
      <div className="modal">
        <div onClick={() => onClose()} className='close'><img src={closeIcon} alt="closeIcon" /></div>
        <h3 className="h3">{title}</h3>
        <div className="container">
          <img src={image_path} alt={title} />
          <div className="details">
            <p><span className="bold">Release date:</span> {moment(release_date).format('MMMM DD, YYYY')}</p>
            <p>{overview}</p>
            <p><span className="bold">{vote_average}</span> / 10 ({vote_count} total votes)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
