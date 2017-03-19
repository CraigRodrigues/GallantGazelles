import React from 'react';

const NavBar = (props) => (
  <div className="ui secondary menu">
    <div className="right menu">
      <a className="active item">Home</a>
      <a className="item">Star a Pitch</a>
      <a className="item">How it works</a>
      <div className="item">
        <div className="ui icon input">
          <input type="text" placeholder="Search..." />
          <i className="search link icon"></i>
        </div>
      </div>
    </div>
  </div>
)

export default NavBar;