import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render expense list item correctly', () => {
    const expense = expenses[0]
    const wrapper = new shallow(<ExpenseListItem {...expense} />)
    expect(wrapper).toMatchSnapshot()
})