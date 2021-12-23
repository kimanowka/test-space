import { useEffect, useState, useContext } from "react";
import axios from "axios";
import styles from "./Posts.module.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

let xmlDoc;
const DOMParse = new DOMParser();

export const Posts = () => {
  const [title, setTitle] = useState<string[]>([]);
  const { handleClickOnPost, visiblePost } = useContext(Context);
  useEffect(() => {
    axios.get("https://sweb.ru/export/turbojournal/").then(({ data }) => {
      const XMLParser = require("react-xml-parser");
      const xml = new XMLParser().parseFromString(data);
      const titleDom = xml.getElementsByTagName("turbo:topic");
      const title = titleDom.map((item: { value: any }) => item.value);
      setTitle(title);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>бортовой журнал</div>
      {title.map((item, index) => {
        return (
          <div
            className={
              visiblePost.includes(index)
                ? styles.wrapper_links_active
                : styles.wrapper_links
            }
            key={index}
            onClick={() => {
              handleClickOnPost(index);
            }}
          >
            <Link to={`/posts/${index}`} className={styles.link}>
              {item}
            </Link>

            <div>
              {visiblePost.includes(index) ? (
                <AiOutlineArrowUp style={{ color: "#3DBDF6" }} />
              ) : (
                <AiOutlineArrowDown style={{ color: "#3DBDF6" }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
