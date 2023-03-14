import React from 'react';

function MoreInfo() {
  return (
    <>
      <div className="sticky-top d-flex flex-column p-3">
        {/* What's happening */}
        <div className="d-flex flex-column">
          <div style={{backgroundColor: "#ededed"}} className="rounded-3 p-3 mb-3">
            <h3 className="fs-5 fw-bold">What's happening</h3>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-column">
                <small style={{fontSize: "0.7rem", color: "#969696", fontWeight: 500}}>
                  Programming · Trending
                </small>
                <h4 className="fs-6 mb-0">#MongoVsSequelize</h4>
                <small style={{fontSize: "0.7rem", color: "#969696", fontWeight: 500}}>
                  97.5K Tweets
                </small>
              </div>
              <div className="d-flex flex-column">
                <small style={{fontSize: "0.7rem", color: "#969696", fontWeight: 500}}>
                  IA · Trending
                </small>
                <h4 className="fs-6 mb-0">#BingVsBard</h4>
                <small style={{fontSize: "0.7rem", color: "#969696", fontWeight: 500}}>
                  34.2K Tweets
                </small>
              </div>
              <div className="d-flex flex-column">
                <small style={{fontSize: "0.7rem", color: "#969696", fontWeight: 500}}>
                  Cash · Trending
                </small>
                <h4 className="fs-6 mb-0">#ElonMuskUnPoroto</h4>
                <small style={{fontSize: "0.7rem", color: "#969696", fontWeight: 500}}>
                  45.8K Tweets
                </small>
              </div>
            </div>
          </div>

          {/* Who to Follow */}
          <div style={{backgroundColor: "#ededed"}} className="rounded-3">
            <div className="pt-3 px-3">
              <h3 className="fs-5 fw-bold">Who to follow</h3>
            </div>

            {/* */}
            {/* {usersInfo.map((smallUser) => (
              <%- include("../partials/smallUser", { smallUser, globalUser }) %>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreInfo;
