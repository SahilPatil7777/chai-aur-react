import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

// followers are take using api call and when component is load the api will call
function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState({});
  //   when component is load useEffect will call.
  //   useEffect(() => {
  // fetch("https://api.github.com/users/hiteshchoudhary")
  //   .then((response) => response.json())
  //   .then((data) => {
  // setData(data);
  //   });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      GitHub followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
