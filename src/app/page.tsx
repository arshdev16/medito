import Image from "next/image";
import Donation from "../components/Home/Donation";
import Hero from "../components/Home/Hero";
import Rewards from "../components/Home/Rewards";
import FAQ from "../components/Home/FAQ";
import DonateNow from "../components/Home/DonateNow";
import RecentDonations from "../components/Home/RecentDonations";

export default function Home() {
  return (
    <main className="w-screen h-screen m-5">
      <Hero />
      <DonateNow/>
      <Donation/>
      <RecentDonations/>
      <Rewards/>
      <FAQ/>
      <div className="my-12" />
    </main>
  );
}