import React, { Component } from "react";

import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer" fixed="bottom">
          <div className="background_color py-3">
            <p className="text-center">
              Copyright @2019 | Designed With by{" "}
              <a href="http://capminds.in/" target="blank">
                CapMindstechlogics
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
