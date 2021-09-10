import { bannerInfo } from 'assets/staticData';
import { classNames } from 'utils';
import styles from './Banner.module.css';

export function Banner() {
  const { bannerTitle, bannerText, bannerImgSrc } = bannerInfo;
  return (
    <>
      <aside className={styles.bannerContainer}>
        <img
          className={styles.bannerImg}
          src={bannerImgSrc}
          alt="soylent 음료를 들고 있는 사진"
          title="soylent 음료를 들고 있는 사진"
          role="presentation"
          aria-hidden
        />
        <section className={styles.bannerSection}>
          <h2 className={styles.bannerTitle}>{bannerTitle}</h2>
          <p className={classNames('resetP')(styles.bannerText)}>{bannerText}</p>
          <button className={styles.bannerButton}>SHOP NOW</button>
        </section>
      </aside>
    </>
  );
}
