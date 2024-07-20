// Footer.js
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <p>Commodo varius tellus tempor urna montes dui donec ornare id. Lectus ut felis dui viverra et sit morbi.</p>
          </div>
          <div className={styles.col}>
            <h4 className={styles.heading}>Products</h4>
            <ul className={styles.list}>
              <li>Endorsements</li>
              <li>Partnerships</li>
              <li>Testimonials</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.heading}>Resources</h4>
            <ul className={styles.list}>
              <li>Terms & Condition</li>
              <li>Account</li>
              <li>Privacy</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.heading}>Terms</h4>
            <ul className={styles.list}>
              <li>Guidelines</li>
              <li>Contact Us</li>
              <li>Youtube</li>
              <li>Subscribe</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2024 ElevateCV All rights reserved.</p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink}>
              <i className="fas fa-instagram"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fas fa-xing"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fas fa-facebook"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fas fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;