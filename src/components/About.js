import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./About.css";
import profileImage from "../assets/profile.jpeg";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className="about" id="about">
      <Header title="ABOUT" subHeading="Get to know more about me" />

      <div className="about__body">
        <div className="about__bodyInfo">
          <h3>Hello!</h3>
          <br />
          <p>
            My name is Manish Bishnoi. I am a final year student pursuing my
            Bachelor's degree in Computer Science and Engineering from Amity
            University, Noida with an aggregate CGPA of <span>9.03</span>. I am
            also a <span>scholarship holder</span> from last 3 years for my
            academic performance.
          </p>
          <br />
          <p>
            I am passionate about <span>Web Development</span> with a keen
            interest in new technologies and enjoy working outside of my comfort
            zone.
            <br />
            <br />I have a passion for <span>problem solving</span> and software
            development. I am also very good at{" "}
            <span>Data Structures and Algorithms</span>. Find me on following
            coding platforms.
          </p>
          <a
            href="https://leetcode.com/manishbishnoi897/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", marginTop: "10px" }}
          >
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/manishbishnoi897/profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            <Avatar src="https://img.icons8.com/color/452/GeeksforGeeks.png" />
          </a>
        </div>
        <div className="about__bodyImage">
          <Avatar
            alt="Profile Image"
            src={profileImage}
            className={classes.large}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
