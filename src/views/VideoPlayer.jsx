import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({ id }) => (
        <iframe 
            width="800" 
            height="500" 
            src={id} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
);

VideoPlayer.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoPlayer;