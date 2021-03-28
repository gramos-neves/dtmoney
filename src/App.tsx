import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from './styles/global';
//import Modal from 'react-modal';
import { useState } from "react";
import NewTransactionModal from "./components/NewTransactionModal";

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleClosedNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }


  return (
    <>
      <Header  handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleClosedNewTransactionModal}  />
      

      <GlobalStyle />
    </>
  );
}

export default App;
