import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchApi, Get_Data_Base_Catogery } from "../apiFn/fetchApi";
import { ErrorPage, Loading, StreamCard } from "../components";

import "../css/Stream.css";
function StreamPage() {
  const { catogery } = useParams();
  let [data, setdata] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    FetchApi(SetLoading, setError).then((data) => {
      setdata(Get_Data_Base_Catogery(data, catogery, SetLoading, setError));
    });
  }, [catogery]);
  return (
    <div className='stream' key={catogery && catogery}>
      {error && <ErrorPage />}
      {loading && <Loading />}
      {data && data.length > 0 && (
        <div
        
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              padding: ".5rem 1rem",
              fontWeight: "bolder",
              letterSpacing: ".2rem",
            }}
          >
            <p>Popular {catogery}</p>
          </div>
          <div className='card-display' key={catogery && catogery}>
            {data &&
              data.length > 0 &&
              data.map((stream,index) => <StreamCard data={stream} index={index} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default StreamPage;
