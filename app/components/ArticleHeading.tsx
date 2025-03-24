import React from "react";

const ArticleHeading = () => {
  return (
    <>
      <div className="NstCrd_ttl-lk">
        <a
          className="NstCrd_ttl" // href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Modi Government Plans To Induct 25 Private Sector Specialists In Key
          Posts
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
              World News
            </a>
          </li>
          <li className="NstCrd_by-li">
            <div className="NstCrd_by-lnk">Updated: Mar 01, 2024</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ArticleHeading;
