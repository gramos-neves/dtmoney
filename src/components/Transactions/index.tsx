import { useContext } from "react"
import { TransactionsContext } from "../../hooks/TransactionContext"
//import { api } from "../../service/api"
import { Container } from "./styles"




const TransactionsTable = () => {
    const {transactions} = useContext(TransactionsContext)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type} >
                                {new Intl.NumberFormat('pt-BT', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td> {new Intl.DateTimeFormat('pt-BT').format(new Date(transaction.createdAt))}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </Container>
    )
}


export default TransactionsTable