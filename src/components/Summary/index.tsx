import { Container } from "./styles"
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../hooks/TransactionContext";



const Summary = () => {
    const {transactions} = useContext(TransactionsContext)


    const summary = transactions.reduce((acc,transaction) => {
          
          if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
          }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;               
          }
          return acc;
    }, {
        deposits:0,
        withdraws:0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{summary.deposits}</strong>
            </div>
            
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>-{summary.withdraws}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{summary.total}</strong>
            </div>


        </Container>
    )
}



export default Summary