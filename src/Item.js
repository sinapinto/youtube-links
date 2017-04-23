import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

export default function Item({ url, title, tags, hidden }) {
  return (
    <div className="item" style={hidden ? {display: 'none'} : {}}>
      <iframe
        className="item-video"
        width={560}
        height={315}
        src={url}
        frameBorder="0"
        allowFullScreen
      />
      <div>
        <h1 className="item-title">{title}</h1>
        <div>
          {tags.map((tag, i) =>
            <span key={i} className="item-tag">{tag} </span>
          )}
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  hidden: PropTypes.bool,
};
