import React from "react";
import styles from "../styles/Footer.module.scss";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

function Footer() {
  let mainText = "Let’s Start by Saying Hi!";
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.topContent}>
          <h1>{mainText}</h1>
          <button>
            <MailIcon className={styles.emailIcon} />
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bacholashkhia13@gmail.com.example"
              target="_blank"
              className={styles.mailLink}
            >
              email me
            </Link>
          </button>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.leftSide}>
            <div className={styles.socCont}>
              <Link href="https://github.com/Bacho13">
                <GitHubIcon className={styles.gitHub} />
              </Link>
              <Link href="https://www.linkedin.com/in/bacho-lashkhia-a0a62023b/">
                <LinkedInIcon className={styles.linkeIn} />
              </Link>
            </div>
          </div>
          <div className={styles.rightSide}>
            <h1>Created by Bacho | All Reserved!</h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
