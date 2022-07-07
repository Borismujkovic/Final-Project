import React, { useContext, useEffect } from "react";
import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CandidateCard from "../../Components/CandidateCard/CandidateCard";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const searchCandidate = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredCandidates = props.candidates.filter((c) =>
    c.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  

  return (
    <div id="homePage">
      <Header setToken={props.setToken} changeTheme={props.changeTheme}/>
      <div className="wrap">
        <Link to="/admin/admin-page" className="myCandidates">
          My candidates
        </Link>
        <div className="search-image">
          <input onChange={searchCandidate} type="text" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/151/151773.png"
            alt=""
          />
        </div>
      </div>
      <main>
        <div className="cardWrapper">
          {filteredCandidates.map((e) => (
            <CandidateCard
              candidate={e}
              selectCandidate={props.selectCandidate}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
