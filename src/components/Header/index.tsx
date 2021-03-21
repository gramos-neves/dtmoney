import { Container, Content } from "./styles";
import logoImg from '../../assets/logo.svg';


interface HeaderProps{
    handleOpenNewTransactionModal: () => void;
}


const Header = ({ handleOpenNewTransactionModal}: HeaderProps) => {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button> 

               
            </Content>
        </Container>
    )

}


export default Header;

