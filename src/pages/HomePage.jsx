import React from "react";
import { allJobs } from "../data";

function HomePage() {
  return (
    <div>
      {allJobs.map((jobsData, key) => {
        return <div key={key}>{jobsData.title}</div>;
      })}
    </div>
  );
}

export default HomePage;

