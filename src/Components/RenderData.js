//import { faCoffee } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsEye } from "react-icons/bs";
import { FcShare } from "react-icons/fc";
import React, { Fragment } from "react";
import { FiThumbsUp } from "react-icons/fi";
const RenderData = (props) => {
  const { img_src, event_name, event_date, views, likes, shares, index } =
    props;
  return (
    <div className="container">
      <h1>{event_name}</h1>
     
      <img alt={`Image ${index + 1}`} src={img_src} className="image" />
      <div className="conatiner_like_view_share">
        <p className="like container_para">
        <FiThumbsUp size="20px" color="blue" 
        className="font_awesome font_awesome_first"
        />
          {likes}
        </p>
        <p className="view container_para">
          <BsEye size="20px" 
            
            className="font_awesome font_awesome_second"
          />
          {views}
        </p>
        <p className="share container_para">
          <FcShare size="20px" 
            
            className="font_awesome font_awesome_third"
          />
          {shares}
        </p>
      </div>
      <p className="date">{event_date}</p>
    </div>
  );
};

export default RenderData;