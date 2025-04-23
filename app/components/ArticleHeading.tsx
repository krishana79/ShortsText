import React from "react";

const ArticleHeading = (props) => {
  return (
    <>
      <div className="NstCrd_ttl-lk">
        <a
          className="NstCrd_ttl" // href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {props.title}
        </a>
      </div>
      <div className="NstCrd_by">
        <ul className="NstCrd_by-ul">
          <li className="NstCrd_by-li">
            <a
              className="NstCrd_by-lnk" // href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {props.category}
            </a>
          </li>
          <li className="NstCrd_by-li">
            <div className="NstCrd_by-lnk">{props.pubDate}</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ArticleHeading;
