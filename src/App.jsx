import { useState } from "react";
import Form from "./components/Form";
import Modal from "./components/Modal";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    setOpenModal((prev) => !prev);
  }

  return (
    <>
      <Form handleModal={handleModal} />
      <Modal openModal={openModal} />
    </>
  );
}
