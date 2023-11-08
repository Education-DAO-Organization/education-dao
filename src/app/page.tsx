import Image from "next/image";
import styles from "./page.module.scss";
import NavBar from "@/components/navBar";
import EduDaoAnimated from "@/assets/icons/education-dao-animated-logo.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.hero}>
          <div className={styles.featureImage}>
            <Image
              className={styles.logo}
              src={EduDaoAnimated}
              alt="Education DAO Logo"
              width={424}
              height={424}
              priority
            />
          </div>
          <div className={styles.content}>
            <h1>
              Get Ready!
              <br />
              We are launching soon.
            </h1>
            <p>
              Education DAO is pioneering a new era of learning, where every
              individual is empowered through accessible and community-driven
              education, focused on the blockchain and decentralization. We’re
              not just building a platform; we’re nurturing innovation,
              championing diversity, creating a reservoir of educational
              resources and rewarding the contributors who help to make this
              happen. Together, we’re shaping the future of the Web3 ecosystem.
              Join us in this revolution.
            </p>
            <a
              href="https://join.education-dao.org/"
              target="_blank"
              rel="noopener noreferer"
            >
              Join Education DAO
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967Z"
                  fill="#121212"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
