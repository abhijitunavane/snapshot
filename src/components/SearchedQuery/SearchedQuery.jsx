import React from "react";
import { Gallary } from "../";
import { useParams } from "react-router-dom";

function SearchedQuery() {
  const { q } = useParams();

  return (
    <div className="pb-5">
      <h1 className="text-center pb-5">{q} Images</h1>

      <Gallary q={q} />
    </div>
  );
}

export default SearchedQuery;
