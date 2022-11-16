import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style.module.scss";
import Container from "../ui/Container";
import zac from '../../images/zac.png'
import { Link } from "react-router-dom";
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost/wordpress/wp-json/wp/v2/posts")
      .then((res) => {
        setIsLoaded(true);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.Posts}>
      <Container className={styles.Posts__container}>
        {posts.map((post) => (
          <Link className={styles.Post} to={`/post/${post?.id}`} key={post?.id}>
            
            <img src={post?.acf?.capa?.url} alt="ilustração do blog" />

            
            <div className={styles.texto}>
              <span>{post?.acf?.tipo}</span>
              <h4>{post?.acf?.title}</h4>
              <p>{post?.acf?.descricao}</p>
              <div className={styles.autorDate}>
                <div className={styles.autor}><img src={zac} alt="autor"/>Zac Almeida</div>
                <div>{post?.acf?.data}</div>
              </div>
            </div>
          </Link>
        ))}
      </Container>
      <button>Show more post</button>
    </div>
  );
};
