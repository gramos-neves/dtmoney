
import Summary from "../../components/Summary"
import TransactionsTable from "../../components/Transactions";

import { Container} from './styles';




const Dashboard = () => {

    return(
    <Container>
        <Summary />
        <TransactionsTable />
    </Container>
    )
}


export default Dashboard