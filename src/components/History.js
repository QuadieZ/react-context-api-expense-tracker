import { useContext } from 'react'
import './History.css'
import { GlobalContext } from '../context/GlobalContext'

const HistoryCard = ({ transactionType, name, amount, id }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    return (
        <div style={{
            backgroundColor: "white",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRight: "5px solid",
            borderRightColor: transactionType === "income" ? "rgb(118, 196, 118)" : "rgb(201, 89, 89)",
            display: 'flex',
            width: "300px",
            justifyContent: 'space-between',
            padding: "16px 8px",
            borderRadius: "4px"
        }}>
            <div className='label-container'>
                <button className='delete-button' onClick={() => deleteTransaction(id)}>x</button>
                <p className='history-name'>{name}</p>
            </div>
            <p className='history-amount'>{amount} ฿</p>
        </div>
    )
}

export const History = () => {
    const { transactions } = useContext(GlobalContext)

    return (
        <div className="history-v-stack">
            <h2 className='history-heading'>History</h2>
            <div className="h-divider" />
            <div className='transaction-container'>
                {transactions.map(transaction => (
                    <HistoryCard
                        name={transaction.text}
                        amount={transaction.amount}
                        key={transaction.id}
                        id={transaction.id}
                        transactionType={transaction.amount >= 0 ? "income" : "expense"}
                    />
                ))}
            </div>
        </div>
    )
}