import styles from './Navbar.module.css';

export default function NavBar() {
  const insta = 'https://cdn.prod.website-files.com/665433bbf6aea4b1cfd6d699/66559874a525319304560592_instagram.svg';
  const twitter = 'https://cdn.prod.website-files.com/665433bbf6aea4b1cfd6d699/66559874c48051d780e720af_x.svg';
  const tiktok = 'https://cdn.prod.website-files.com/665433bbf6aea4b1cfd6d699/669b9d4fb6d87557e8c4fc4d_Motifs%20De%20Papier%20Peint.png';

  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <div className={styles.socialLinkContainer} style={{transform: 'rotate(-10deg'}}>
          <a href='https://discord.gg/8qQN8cCa' target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={'/win1/discord.png'} alt="discord" loading="lazy" className={styles.socialImg} />
          </a>
          <div className={styles.socialBg}></div>
        </div>
        <div className={styles.socialLinkContainer} style={{transform: 'rotate(5deg'}}>
          <a href='https://www.instagram.com/baby_billionaires/?igsh=OWg4eDZ2OXFteGxk' target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={insta} alt="instagram" loading="lazy" className={styles.socialImg} />
          </a>
          <div className={styles.socialBg}></div>
        </div>
        <div className={styles.socialLinkContainer} style={{transform: 'rotate(-6deg'}}>
          <a href='https://x.com/bb_clubnft?s=11' target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={twitter} alt="twitter" loading="lazy" className={styles.socialImg} />
          </a>
          <div className={styles.socialBg}></div>
        </div>
        <div className={styles.socialLinkContainer} style={{transform: 'rotate(5deg'}}>
          <a href='https://www.tiktok.com/@baby_billionaires?_t=ZP-8sWDLUsGA0M&_r=1' target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={tiktok} alt="tiktok" loading="lazy" className={styles.socialImg} />
          </a>
          <div className={styles.socialBg}></div>
        </div>
      </div>
    </div>
  );
}