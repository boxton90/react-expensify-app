import { createStore, combineReducers } from 'redux'

const demoState = {
    expenses: [{
        id: 'dasd1234d',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 45500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}