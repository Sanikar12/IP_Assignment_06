import React from 'react';
import "../components/styles/prof1.css";
import Profile from "../components/assets/Profile.mp4";
import a1 from "../components/assets/a1.mp3";
import sa from "../components/assets/sa.jpg";

const Profile1 = () => {
  return (
    <div className="profile-container">
      <header>
        <h1 >#Sanika Rane</h1>
      </header>
      <div className="center-content">
        <section id="heading">
          <p >
            <i id="webd">Web Developer | Tech Enthusiast</i>
          </p>
        </section>

        <video width="500" height="240" controls>
          <source src={Profile} type="video/mp4" />
         
        </video>
        <br /><br />

        <audio controls>
          <source src={a1} type="audio/mpeg" />
        </audio>
        <br /><br />

        <section className="about">
          <h2 className="one">About Me</h2>
          <p id="para">
            Hello, I'm Sanika Rane, a passionate web developer.
            I have a strong interest in creating <span>visually appealing</span> and <span>user-friendly websites</span>.
          </p>
        </section>

        <section id="a" className="prof">
          <h2 className="dot">Skill Sets</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MongoDB</li>
          </ul>
        </section>

        <h2 className="dot">Projects</h2>
        <br />
        {/* <iframe
          src="https://sanikar12.github.io/TshirtWeb/assigntask.html"
          title="Customized Tshirt Website"
        ></iframe> */}

        <section className="prof" id="personal">
          <img src={sa} height="150" width="150" alt="Sanika Rane" />
          <br /><br />
          <h2 className="dot">Personal Details</h2>
          <table>
            <tr>
              <td>Name:</td>
              <td>Sanika Rane</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>April 12, 2003</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>2021.sanika.rane@ves.ac.in</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>9359478945</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Profile1;
