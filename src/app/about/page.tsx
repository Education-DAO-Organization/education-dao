import type { Metadata } from "next";
import NavBar from "@/components/navBar";
import ValueIcon from "@/assets/icons/value-icon.png";
import MissionIcon from "@/assets/icons/mission-icon.png";
import VisionIcon from "@/assets/icons/vision-icon.png";
import styles from "./page.module.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Education DAO | About",
  description: "Consensys Education DAO will coming soon!",
};

function AboutPage() {
  const data = [
    {
      title: "Value",
      description:
        "At Education DAO, we're pioneering a movement to democratize education in the Web3 space. Our platform is more than just a learning hub; it's a community-driven initiative dedicated to breaking down barriers and creating a space where everyone, regardless of background or location, can engage with and contribute to the new digital economy.",
      icon: ValueIcon,
    },
    {
      title: "Mission",
      description:
        "Our mission is to prevent the fragmentation of collective knowledge in the Web3 space. From beginners to advanced learners, we cater to all, ensuring that developers, entrepreneurs, and enthusiasts alike can grow and thrive. We're not just imparting knowledge; we're fostering a community of learners, thinkers, and innovators poised to shape the future of the decentralized web.",
      icon: MissionIcon,
    },
    {
      title: "Vision",
      description:
        "We envision a world where learning about the most up-to-date blockchain, crypto, and decentralized technologies is a shared, community-driven experience. We aim to unlock the full potential of decentralized learning for all, ensuring that the wisdom of the past drives innovation for future generations. Join us in building an ecosystem-governed knowledge base, where education is not just preserved but thrives in the collective consciousness of our community.",
      icon: VisionIcon,
    },
  ];
  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.headline}>About Education DAO</h1>
      <div className={styles.listFeature}>
        {data.map((feature, index) => (
          <div className={styles.feature} key={index}>
            <Image
              className={styles.icon}
              src={feature.icon}
              alt="Education DAO logo"
              height={146}
            />
            <p className={styles.title}>{feature.title}</p>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
