import { useContext, useState } from 'react'
import './AddTransaction.css'
import { GlobalContext } from '../context/GlobalContext'

export const AddTransaction = () => {
    const [transactionName, setTransactionName] = useState('')
    const [transactionAmount, setTransactionAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)

    function handleSubmit(e) {
        e.preventDefault()
        if (transactionName !== '' && transactionAmount !== 0) {
            addTransaction(transactionName, transactionAmount)
        }
    }

    return (
        <div className="transaction-v-stack">
            <h2 className='add-heading'>Add new transaction</h2>
            <div className="h-divider" />
            <form className='transaction-v-stack' onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label htmlFor="name">Transaction Name</label>
                    <input name='name' className='input' placeholder='Enter name...' value={transactionName} onChange={(e) => setTransactionName(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor="amount">Transaction Amount</label>
                    <input name='amount' className='input' type="number" placeholder='Enter amount...' value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} />
                </div>
                <button className='submit-button' type='submit'>Add Transaction</button>
            </form>
        </div>
    )
}
