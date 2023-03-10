import React from "react";
import styles from "../styles/About.module.scss";
import { dataList } from "../dataSource/data.js";
import Head from "next/head";

function About() {
  console.log(dataList[0].name);
  return (
    <>
      <div className={styles.div}>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/fav/favicon.ico" />
          <title>Bacho - about</title>
        </Head>
        <p>
          Hi, Im Bacho, a beginner frontend developer. I have been fascinated by
          technology since childhood, and I always thought that I was better at
          working with it than my relatives or friends. Unfortunately, I did not
          continue my studies in the field of technology, and I believe that
          this was the biggest mistake of my life. It is true that if a person
          loves something, they will inevitably fight for it and achieve it.
          This happened in my life too. I started studying business management,
          but I could not finish it. After the third year, I quit because I was
          not interested in it. It was not my field. The only thing I realized
          during those three years is that a person does not need to learn
          management because they cannot become a manager if they are not born
          to be one. Lets stop talking about my past because the present and the
          future are more interesting. After all this, I started to learn
          programming on my own, and I chose frontend because I like seeing the
          results during work, which keeps me motivated. I believe that I am
          ready to take responsibility and immerse myself in the workflow so
          that, after so much work, I can become a professional and deepen my
          knowledge. I also plan to become a full-stack developer, and I will
          definitely achieve this goal. Thank you for your attention.
        </p>
        <hr />
        <div className={styles.skills}>
          <p>Check my arsenal</p>
          <div className={styles.skillCont}>
            {dataList.map((item) => (
              <div key={item.name} className={styles.skillCard}>
                <div>
                  <img src={item.image} alt={item.alt} />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
