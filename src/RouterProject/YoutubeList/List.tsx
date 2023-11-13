import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TVedio } from "./ListHome";
// import { youtubeAPI } from "../../Const";

const List: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [vedioList, setVedioList] = useState<TVedio[]>([]);

  // useEffect(() => {
  //   fetch(youtubeAPI)
  //     .then((res) => res.json())
  //     .then((res) => setVedioList(res?.items?.map((item) => item?.snippet)));
  // }, []);

  const onCickVedio = (vedioData: TVedio) => {
    navigate(`/youtubeList/${vedioData.channelTitle}`, {
      state: { ...vedioData },
    });
  };

  return (
    <div>
      {vedioList.length > 0 ? (
        vedioList.map((data, idx) => (
          <Vedio key={idx} onClick={() => onCickVedio(data)}>
            <div>
              <img
                alt={data.title}
                src={data.thumbnails.medium.url}
                width={data.thumbnails.medium.width}
                height={data.thumbnails.medium.height}
              />
            </div>
            <div>
              <VedioTitle>{data.title}</VedioTitle>
              <VedioDescription>{data.description}</VedioDescription>
            </div>
          </Vedio>
        ))
      ) : (
        <>list not found</>
      )}
    </div>
  );
};

const Vedio = styled.div`
  margin-top: 20px;
  width: 50%;
  margin-left: 50px;
  display: flex;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const VedioTitle = styled.div`
  font-size: 20px;
  width: 400px;
  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 5px;
`;

const VedioDescription = styled.div`
  font-size: 15px;
  width: 400px;
  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default List;
