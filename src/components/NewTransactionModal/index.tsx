import Modal from 'react-modal';
import { Container, TransactionTypeContainer, ButtonBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../service/api';
import { TransactionsContext } from '../../hooks/TransactionContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    const { createTransaction} = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState(''); 
    const[type, setType] = useState('deposit');


   async function handleCreateNewTransaction(event: FormEvent){
              event.preventDefault();

            //  const data =  {title, value, category, type};

           await createTransaction({
                title,
                 amount: value ,
                category,
                type
            })
            

            setTitle('');
            setValue(0);
            setCategory('');
            setType('deposit');
            onRequestClose();
            

    }


    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"  >

            <button type="button" onClick={onRequestClose}
                className="react-modal-close"  >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>

                <h2>Cadastrar transação </h2>

                <input placeholder="Titulo" 
                    value={title} 
                    onChange={event => setTitle(event.target.value)}   />
                <input type="number" placeholder="Valor"
                     value={value} 
                     onChange={event => setValue(Number(event.target.value))}   />

                <TransactionTypeContainer>

                    <ButtonBox type="button" 
                          onClick={() => setType('deposit')}
                          isActive={type === 'deposit'}
                          activeColor="green"
                       >
                        <img src={incomeImg} alt="income"></img>
                        <span>Entrada</span>
                       
                    </ButtonBox>
                    <ButtonBox type="button"
                      onClick={() => setType('withdraw')}
                      isActive={type === 'withdraw'}
                      activeColor="red"
                    >
                        <img src={outcomeImg} alt="income"></img>
                        <span>Saida</span>

                    </ButtonBox>

                </TransactionTypeContainer>

                <input placeholder="Categoria" 
                    value={category} 
                    onChange={event => setCategory(event.target.value)}  />
                <button type="submit">
                    Cadastrar
              </button>

            </Container>


        </Modal>
    )
}



export default NewTransactionModal