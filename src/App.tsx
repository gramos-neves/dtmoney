import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from "react";

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

      <Modal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleClosedNewTransactionModal}  >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
