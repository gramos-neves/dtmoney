import { useEffect, useState } from "react"
import { api } from "../../service/api"
import { Container } from "./styles"


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;

}

const TransactionsTable = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(resp => { 
                
                console.log(resp.data)
                setTransactions(resp.data.transactions)})

    }, [])



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