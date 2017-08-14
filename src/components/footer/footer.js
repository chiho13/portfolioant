import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
   render() {
    return (
      <footer className="footer">
        <div>
          &copy; {new Date().getFullYear()} Anthony Ho
        </div>
      </footer>
    )
  }
}


