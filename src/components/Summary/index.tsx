import { Container } from "./styles"
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';



const Summary = () => {

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$10000,00</strong>
            </div>
            
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>R$10000,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$10000,00</strong>
            </div>


        </Container>
    )
}



export default Summary