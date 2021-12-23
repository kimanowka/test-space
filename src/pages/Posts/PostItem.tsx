import { useEffect, useRef } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styles from "./PostItem.module.css";
let xmlDoc;
const DOMParse = new DOMParser();

export const PostItem = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { index } = useParams();
  const numberOfIndex = Number(index);

  useEffect(() => {
    axios.get("https://sweb.ru/export/turbojournal/").then(({ data }) => {
      xmlDoc = DOMParse.parseFromString(data, "text/xml");
      const content = xmlDoc.getElementsByTagName("turbo:content");
      const contentDom = content[numberOfIndex];
      if (!ref.current) return;
      ref.current.innerHTML = contentDom.textContent!;
    });
  }, [numberOfIndex]);

  return <div ref={ref} className={styles.wrapper}></div>;
};
// function foo() {
//   console.log(1);

//   setTimeout(() => console.log(2), 0);

//   Promise.resolve(() => {}).then(() => {
//     console.log(3);
//   });

//   console.log(4);
// }

// foo();

// function f() {
//   setTimeout(() => f(), 1)
// }

// function b() {
//   Promise.resolve(() => b())
// }

// const a ={b: 1}
// delete a.b
