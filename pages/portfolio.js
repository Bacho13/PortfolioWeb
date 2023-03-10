import React from "react";
import styles from "../styles/Portfolio.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
import { projects } from "../dataSource/data";
import Head from "next/head";

function Portfolio() {
  projects;
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav/favicon.ico" />
        <title>Bacho - Portfolio</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.contentCont}>
          {projects.map((item) => (
            <div key={item.name}>
              <p className={styles.name}>{item.name}</p>
              <Link href={item.repo} underline="none">
                <GitHubIcon className={styles.contactIcon} />
              </Link>
              <Link
                className={styles.liveLink}
                href={item.live}
                underline="none"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.redDot}></div>
                <p>Live</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
