import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./List";
import Video from "./Video";

const ListHome: React.FC<{}> = () => {
  return (
    <>
      <div>Youtube List Home</div>
      <Router>
        <Routes>
          <Route path="/youtubeList" element={<List />}></Route>
          <Route path="/youtubeList/:videoId" element={<Video />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default ListHome;

export interface TVedio {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: { [key in TThumbnailKey]: TThumbnail };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface TThumbnail {
  url: string;
  width: number;
  height: number;
}

export type TThumbnailKey =
  | "default"
  | "medium"
  | "high"
  | "standard"
  | "maxres";
