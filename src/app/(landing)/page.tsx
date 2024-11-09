import Community from "./components/community";
import FAQ from "./components/faq";
import Leaderboard from "./components/leaderboard";
import StatisticPoints from "./components/statistic-points";
import Welcome from "./components/welcome";

export default async function Home() {
  return (
    <>
      <Welcome />
      <StatisticPoints />
      <Community />
      <Leaderboard />
      <FAQ />
    </>
  );
}
