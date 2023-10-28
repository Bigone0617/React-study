import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TVedio } from "./ListHome";

const Video: React.FC<{}> = () => {
  const { state } = useLocation();
  const vedioData: TVedio = { ...state };
  const navigate = useNavigate();

  return (
    <>
      <div>title : {vedioData.title}</div>
      <div>{vedioData.description}</div>
      <div>
        <img
          alt={vedioData.title}
          src={vedioData.thumbnails.maxres.url}
          width={vedioData.thumbnails.maxres.width}
          height={vedioData.thumbnails.maxres.height}
        />
      </div>
      <button onClick={() => navigate("/youtubeList")}>리스트로 가기</button>
    </>
  );
};

export default Video;
