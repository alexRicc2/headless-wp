import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import axios from "axios";
import zac from "../../images/zac.png";

import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";

export const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, setPost]);
  return (
    <section className={styles.PostPage}>
      <Container>
        <div className={styles.Container}>
          <div className={styles.Post}>
            <h1 className={styles.Post__title}>{post?.acf?.title}</h1>
            <div className={styles.Post__author}>
              <img src={zac} alt="author" />
              <p className={styles.Post__name}>by zac almeida</p>
              <p>{post?.acf?.data}</p>
            </div>
            <img src={post?.acf?.capa?.url} alt="capa do post" />
          </div>
          <div className={styles.subscribe}>
            <div className={styles.form}>
              <h3>Subscribe to TSH</h3>
              <p>
                Subscribe to our daily newsletter to get the latest industry
                news.
              </p>
              <input placeholder="Name"></input>
              <input placeholder="Email"></input>
              <button>Subscribe!</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
