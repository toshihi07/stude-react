import Image from "next/image";
import classes from "./Main.module.css";
import { Headline } from "./Headline";
import { Links } from "./Links";

export function Main(props) {
  console.log(props);
  return (
    <main className={classes.main}>
      <Headline title={props.title}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
