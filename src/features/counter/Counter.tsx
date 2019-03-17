import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { increment, decrement } from '.';
import { State } from '../../store/rootReducer';

const Counter = (props: RouteComponentProps<any> & StateProps & DispatchProps) => (
  <div>
    Counter: {props.count}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
)

interface StateProps {
  count: number
}

interface DispatchProps {
  increment: () => void
  decrement: () => void
}

const mapStateToProps = (state: State): StateProps => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export const CounterPage = connect(mapStateToProps, mapDispatchToProps)(Counter);
