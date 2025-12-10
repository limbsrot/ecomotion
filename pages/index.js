import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Header from "../components/Header";
import JourneyPlanner from "../components/JourneyPlanner";
import StatsOverview from "../components/StatsOverview";
import Leaderboard from "../components/Leaderboard";
import BadgesGrid from "../components/BadgesGrid";
import TripTimeline from "../components/TripTimeline";
import CommunityImpact from "../components/CommunityImpact"; // <-- add this
import { stats, leaderboard, badges, trips } from "../data/mockData";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoMotion – Smart Urban Travel</title>
        <meta
          name="description"
          content="plan, track and share eco-friendly journeys with ecomotion."
        />
      </Head>

      <Layout>
        <main className={styles.main}>
          <Header />

          <section
            className={styles.grid}
            aria-label="eco journey planning and stats"
          >
            <div className={styles.leftColumn}>
              <JourneyPlanner />
              <StatsOverview stats={stats} />
              {/* new card directly under eco dashboard */}
              <CommunityImpact />
            </div>

            <div className={styles.rightColumn}>
              <Leaderboard leaderboard={leaderboard} />
              <BadgesGrid badges={badges} />
            </div>
          </section>

          <section className={styles.timelineSection}>
            <TripTimeline trips={trips} />
          </section>
        </main>
      </Layout>
    </>
  );
}
