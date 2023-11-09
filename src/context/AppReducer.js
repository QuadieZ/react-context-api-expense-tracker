export const AppReducer = (state, action) => {
    switch (action.type) {
        case ("ADD"):
            console.log(state)
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {
                        ...action.payload,
                        id: state.transactions.length + 1
                    }
                ]
            }
        case ("DELETE"):
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state
    }
}