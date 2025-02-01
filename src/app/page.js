import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/LandingPage/HeroSection";
import Features from "@/components/LandingPage/Features";

export default function Home() {
  return (
    <div className={styles.page}>
    <HeroSection/>
    <Features/>
    </div>
  );
}
