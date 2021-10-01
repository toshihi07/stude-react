import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Headline } from "./Headline";
import { Links } from "./Links";

export function Main(props) {
  console.log(props);
  return (
    <main className={styles.main}>
      <Headline title={props.title}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
