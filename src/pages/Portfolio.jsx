import React from "react";
import Card from "../components/Card";
import { portfolioProjects } from "../utilities/portfolioprojects";

function Portfolio() {
  return (
    <main className="grid px-10 py-12 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {portfolioProjects.map((p, i) => (
        <Card key={i} data={p} />
      ))}
    </main>
  );
}

export default Portfolio;
