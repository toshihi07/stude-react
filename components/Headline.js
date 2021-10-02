import Image from "next/image";
import styles from "../styles/Home.module.css";
import classes from "./Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>Hello {props.title}</h1>
      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
}
