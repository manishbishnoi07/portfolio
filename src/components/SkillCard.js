import { Avatar } from "@material-ui/core";
import "./skillCard.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const SkillCard = ({ skillName, skillUrl, className }) => {
  const classes = useStyles();
  return (
    <div className={`skillCard ${className}`}>
      <Avatar src={skillUrl} alt="skill" className={classes.large} />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillCard;
