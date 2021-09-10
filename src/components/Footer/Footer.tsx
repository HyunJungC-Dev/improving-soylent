import { A11yHidden, LogoLink } from 'components';
import { classNames } from 'utils';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <A11yHidden as="h2">Footer</A11yHidden>
        <div className={styles.footerInfoContainer}>
          <h3 className={styles.footerInfoTitle}>Learn More</h3>
          <ul className={classNames('resetList')(styles.footerInfoItem)}>
            <li>Insights</li>
            <li>Press</li>
            <li>FAQ</li>
            <li>Gift Cards</li>
            <li>Discount Programs</li>
          </ul>
        </div>
        <div className={styles.footerInfoContainer}>
          <h3 className={styles.footerInfoTitle}>Support</h3>
          <ul className={classNames('resetList')(styles.footerInfoItem)}>
            <li>Contact</li>
            <li>Find a Store</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <LogoLink width={60} backgroundColor="black" color="white" />
    </footer>
  );
}
