import { useContext } from 'react'
import './SummaryCard.css'
import { GlobalContext } from '../context/GlobalContext'

export const SummaryCard = () => {
    const { transactions } = useContext(GlobalContext)
    const income = transactions.filter(transactions => transactions.amount >= 0).reduce((acc, next) => acc + next.amount, 0)
    const expense = transactions.filter(transactions => transactions.amount < 0).reduce((acc, next) => acc + next.amount, 0)

    return (
        <div className="card-container">
            <div className="v-stack">
                <p className="card-title">INCOME</p>
                <p className="income amount">{income} ฿</p>
            </div>
            <div className='divider' />
            <div className="v-stack">
                <p className="card-title">EXPENSE</p>
                <p className="expense amount">{expense} ฿</p>
            </div>
        </div>
    )
}