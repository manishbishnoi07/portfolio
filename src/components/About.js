import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./About.css";
import profileImage from "../assets/profile.jpeg";

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
      <div className="about__header">
        <h2>ABOUT</h2>
        <p>Get to know more about me</p>
      </div>
      <div className="about__body">
        <div className="about__bodyInfo">
          <h3>Hello!</h3>
          <br />
          <p>
            My name is Manish Bishnoi. I am from Haryana but currently living in
            Delhi. I am pursuing my Bachelor's degree in Computer Science and
            Engineering from Amity University, Noida. I am in pre-final year
            with an aggregate CGPA 9.03. I am also a scholarship holder from
            last 3 years for my academic performance.
          </p>
          <br />
          <p>
            I am a passionate Web Developer and loves to build amazing products.
            I am also very good at Data Structures and Algorithms. I considered
            myself as a very focused person and I always work towards my goals
            in a very efficient manner.
          </p>
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
