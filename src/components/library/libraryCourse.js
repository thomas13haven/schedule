import React, { Component } from "react";

import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">Problem solving</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>
        <Arrow className="library-course__arrow" />
        <Action className="library-course__action"/>
        <div className="library-course__description">
          <label>Course Description</label>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices hendrerit urna, ac pellentesque nunc pharetra id. Donec
            scelerisque sapien est, ac gravida mauris eleifend at.
          </p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
