import React from "react";
import '../assets/components/JobPositionContainer.css'
import JobPositionItem from "./JobPositionItem";

const JobPositionContainer = (props) => (
  <div className="jobPositionContainer">
    {
      props.items.map( item => <JobPositionItem key={item.id} item={item} />)
    }
  </div>
);

export default JobPositionContainer;
