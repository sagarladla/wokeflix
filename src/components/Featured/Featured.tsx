import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { FeatureType } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Featured({ type }: FeatureType): JSX.Element {
  const [content, setContent] = useState<any>({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2FlZWE5ZjBkZGU1YzFiYzVmYTM2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTUxOTE4MSwiZXhwIjoxNjM1OTUxMTgxfQ.h20Js-aoLBHCfS9XzFB1c6jAAWoilGR3wHasYLZo__0",
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>{"Play"}</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
