import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Featured, List } from "../../components";
import { FeatureType, FeatureListType } from "../../types";
import "./home.scss";
export default function Home({ type, genre }: FeatureType): JSX.Element {
  const [lists, setLists] = useState<Array<object>>([]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `/lists${type ? `?type=${type}` : ""}${
            genre ? `&genre=${genre}` : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2FlZWE5ZjBkZGU1YzFiYzVmYTM2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTUxOTE4MSwiZXhwIjoxNjM1OTUxMTgxfQ.h20Js-aoLBHCfS9XzFB1c6jAAWoilGR3wHasYLZo__0",
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list: any, index: number) => (
        <List list={list} key={index} index={index} />
      ))}
    </div>
  );
}
