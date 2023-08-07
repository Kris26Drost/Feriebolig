import ClientOnly from "../components/ClientOnly";
import ListeCard from "./components/ListeCard";
import UpsBar from "../components/UpsBar";
import Booking from "./components/Booking";

const Page = () => {

  return (
   <>
      <Booking/>
      <ListeCard />
      <UpsBar />
      <ListeCard />
      <ListeCard />
    </>
  );
};

export default Page;
