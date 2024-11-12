import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Card.css'; // Add custom CSS styling

function Card({ title, description, imageUrl, facebook, twitter, instagram }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="social-media-links">
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa fa-facebook"></i>
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa fa-twitter"></i>
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa fa-instagram"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
