import { useContext } from 'react'
import './BalanceCard.css'
import { GlobalContext } from '../context/GlobalContext'

export const BalanceCard = () => {
    const { transactions } = useContext(GlobalContext)
    const balance = transactions.reduce((acc, next) => {
        console.log(acc, next.amount)
        return acc + next.amount
    }, 0)

    return (
        <div className='balance-container'>
            <p className='balance-title'>Your Balance</p>
            <p className='balance-amount'>{balance} ฿</p>
        </div>
    )
}