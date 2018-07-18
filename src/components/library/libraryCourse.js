import React, { Component } from 'react';

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem solving</label>
        {/* icon component*/}
        {/* arrow component*/}
        {/* action button component*/} 
        <div className="library-course__description">
            <label>Course Description</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices hendrerit urna, ac pellentesque nunc pharetra id. Donec scelerisque sapien est, ac gravida mauris eleifend at.</p>
        </div>     
      </div>
    );
  }
}

export default LibraryCourse;