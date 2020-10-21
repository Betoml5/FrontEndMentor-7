import React from "react";
import '../assets/components/JobPositionItem.css';
const JobPositionitem = (props) => {
  return (
    <div className="jobPositionItem">
      <img src={props.item.logo} alt="logoCompany" />
      <div className="jobPositionItem-section-2">
        <div className="jobPositionItem-section-2-bubbles">
          <p>{props.item.company}</p>
          {props.item.new ? <p>NEW!</p> : null}
          {props.item.featured ? <p>FEATURED</p> : null}
        </div>
        <h4>{props.item.position}</h4>
        <ul>
          <li>{props.item.postedAt}</li>
          <li>{props.item.contract}</li>
          <li>{props.item.location}</li>
        </ul>
      </div>
      <div className="jobPositionItem-section-3">
        <ul>
          <li>{props.item.role}</li>
          <li>{props.item.level}</li>
          {props.item.languages.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default JobPositionitem;
