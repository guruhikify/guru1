import React from "react";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
};

const SearchBar = () => {
  return (
    <div className="container">
      <header className="header">
        <img src="logo.png" alt="Justdial Logo" className="logo" />
        <div className="header-links">
          <a href="#">EN</a>
          <a href="#">We are Hiring</a>
          <a href="#">Investor Relations</a>
          <a href="#">Leads</a>
          <a href="#">Advertise</a>
          <a href="#">Free Listing</a>
          <button className="login-btn">Login / Sign Up</button>
        </div>
      </header>
      <div className="search-section">
        <h1>Search across ‘4.7 Crore+’ Businesses</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Betkuli, Karwar"
            className="search-input location"
          />
          <input
            type="text"
            placeholder="Search in Karwar"
            className="search-input query"
          />
          <button className="search-btn">
            <i className="microphone-icon"></i>
            <i className="search-icon"></i>
          </button>
        </div>
        <button className="download-app-btn">Download App</button>
      </div>
    </div>
  );
};

export const Default = () => <SearchBar />;
