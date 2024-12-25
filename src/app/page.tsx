import Image from "next/image";
import styles from "./page.module.css";
import '@fontsource/luckiest-guy';
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.titleContainer}>
              <figure className={styles.win1figure1}>
                <Image
                  src="/win1/BBC-NFTS-Hero.png"
                  alt="Baby Billionaire Club NFTs"
                  width={1704}
                  height={1064}
                  className={styles.heroTitle}
                />
              </figure>
              <div className={styles.titleSubContainer}>
                <div className={styles.win1TextContainer}>
                  <figure className={styles.win1Text}>
                    <Image
                      src="/win1/Puppy-1.png"
                      width={128}
                      height={29}
                      alt="Not Kitten"
                      style={{ height: 'auto', width: '100%' }}
                    />
                  </figure>
                  <figure className={styles.win1Text}>
                    <Image
                      src="/win1/Kitten-1.png"
                      width={117}
                      height={29}
                      alt="Not Puppy"
                      style={{ height: 'auto', width: '100%' }}
                    />
                  </figure>
                  <figure className={styles.win1Text}>
                    <Image
                      src="/win1/Heading3.png"
                      width={150}
                      height={50}
                      alt="Baby"
                      style={{ height: 'auto', width: '100%' }}
                    />
                  </figure>
                </div>
                <div className={styles.mintSoonContainer}>
                  <div className={styles.mintSoon}>MINT SOON</div>
                  <figure className={styles.mintAccentContainer}>
                    <Image
                      width={95}
                      height={101}
                      alt="stars"
                      src="/win1/MintStars.webp.png"
                      className={styles.mintAccent}
                    />
                  </figure>
                </div>
              </div>
            </div>
            <figure className={styles.foregroundContainer}>
              <Image
                className={styles.foregroundAccent}
                src="/66597f45e5d6d3c2e75d638f_31.webp.png"
                alt="stars"
                width={95}
                height={101}
              />
              <Image
                className={styles.foreground}
                src="/win1/BBC-Logo-Dice.png"
                alt="dice logo"
                width={800}
                height={800}
              />
            </figure>
            <div className={styles.tickerContainer}>
              <div className={styles.tickerSlide}></div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.win2Container}>
            <figure className={styles.win2figure1}>
              <Image
                className={styles.win2Image1}
                src="/win2/Character-Pallet-2-1.png"
                width={878}
                height={878}
                alt="Character Pallet"
              />
            </figure>
            <div className={styles.questionContainer}>
              <div className={styles.win2Col2Container}>
                <div className={styles.question}>
                  <header className={styles.textHeader}>WHAT THE</header>
                  <header className={styles.textHeader}>F*CK ARE BBC</header>
                  <header className={styles.textHeader}>BABIES?</header>
                </div>
                <figure className={styles.win2figure2}>
                  <Image
                    style={{ top: '7%', position: 'absolute', width: '36%', height: 'auto', left: '-6%' }}
                    alt="stars"
                    width={95}
                    height={78}
                    src="/win2/stars.png"
                  />
                  <Image
                    style={{ position: 'absolute', width: '95%', height: 'auto', top: '18%' }}
                    alt="bag"
                    width={260}
                    height={260}
                    src="/win2/BagSlot-1.png"
                  />
                </figure>
              </div>
              <div className={styles.descriptionContainer}>
                <p className={styles.description}><strong>BBC BABIES</strong> are 1-of-1 degens stomping around on Solana.</p>
                <p className={styles.description}>We’ve unleashed <strong>6,969 hand-drawn babies</strong>—inspired by streetwear, hip-hop, and all the classic cartoon mischief you grew up on.</p>
                <p className={styles.description}>Welcome to the <strong>Baby Billionaires Club</strong>, where <strong>DeFi</strong> collides with <strong>AI</strong>, and the memes never sleep.</p>
                <p className={styles.description}>Snag a BBC BABY and dive headfirst into the <strong>Babyverse</strong>, scoring exclusive crypto education, trading analytics, and a front-row seat to the wildest meme-fueled chaos in Web3.</p>
                <p className={styles.description}>Brace yourself, degens—<strong>the baby revolution is here</strong>.</p>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.mintWrapper}>
          <figure className={styles.slotWrapper}>
            <Image
              className={styles.slot}
              src="/win3/Background.png"
              alt="Mint Slot"
              width={1920}
              height={1200}
            />
          </figure>
        </div>
      </main>

    </div>
  );
}
