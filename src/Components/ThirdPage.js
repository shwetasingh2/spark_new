import React, { useEffect, useState } from "react";
import RenderData from "./RenderData";
const sortByOptions = [
    { value: "", label: "Chhose an option" },
    { value: "likes", label: "Likes" },
    { value: "views", label: "Views" },
    { value: "shares", label: "Shares" },
    { value: "event_date", label: "Event Date" },
  ];

const ThirdPage = () => {
  const [data, setData] = useState([]);

  const [isSort, setIsSort] = useState(false);
  const [sorted, setSorted] = useState([]);


  useEffect(() => {
    fetch("http://www.mocky.io/v2/59ac293b100000d60bf9c239")
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
  },[]);

  const sortFunction = (e) => {
    setIsSort(!isSort)
    setSorted(data)

   data.sort((a, b) => a[e.target.value] - b[e.target.value]);
   console.log(data);
};
  return (
    <div>
      <nav className="header">
      <div className="App">
    <select onChange={sortFunction}>
      {sortByOptions.map((el) => (
        <option value={el.value}>{el.label}</option>
      ))}
    </select>
    </div>
    </nav>
      {isSort
        ? sorted.map((elem, index) => (
            <RenderData
              key={elem.id + index}
              img_src={elem.thumbnail_image}
              event_name={elem.event_name}
              event_date={new Date(elem.event_date).toString()}
              views={elem.views}
              likes={elem.likes}
              shares={elem.shares}
              index={index}
            />
          ))
        : data.map((elem, index) => (
            <RenderData
              key={elem.id + index}
              img_src={elem.thumbnail_image}
              event_name={elem.event_name}
              event_date={new Date(elem.event_date).toString()}
              views={elem.views}
              likes={elem.likes}
              shares={elem.shares}
              index={index}
            />
          ))}
    </div>
  );
};

export default ThirdPage;