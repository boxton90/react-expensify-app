import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value))
        }}></input>
    </div>
)

const mapToStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapToStateToProps)(ExpenseListFilters)