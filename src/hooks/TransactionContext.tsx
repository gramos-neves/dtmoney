import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../service/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;

}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (Transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(resp => {

                console.log(resp.data)
                setTransactions(resp.data.transactions)
            })

    }, [])

   async function createTransaction(transactionInput: TransactionInput) {
       const response =   await api.post('/transactions',{...transactionInput,
        createdAt: new Date() 
    })
    console.log(response.data)
       const {transaction} = response.data;
       
       setTransactions([
           ...transactions,
           transaction
       ])
   
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}