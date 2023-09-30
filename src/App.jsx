import { useState } from "react";
import { Banner, Food, Footer, FormReservation, Navbar } from "./components";

function App() {
  const [isOpenReservation, setIsOpenReservation] = useState(false);
  const onOpenReservationDialog = () => setIsOpenReservation(true);
  return (
    <>
      <Navbar />
      <Banner onOpenReservationDialog={onOpenReservationDialog} />
      <Food />
      <Footer />
      <FormReservation
        isOpen={isOpenReservation}
        onClose={() => setIsOpenReservation(false)}
      />
    </>
  );
}

export default App;
