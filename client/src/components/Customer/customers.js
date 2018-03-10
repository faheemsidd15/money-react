import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCustomers} from '../../store/actions/customers'
import './customers.css';

class Customers extends Component {

  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
  }

  static defaultProps = {
    customers: []
  }

  componentWillMount() {
    this.props.getCustomers();
  }

  render() {

    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.props.customers.map(customers =>
          <li key={customers.id}>{customers.firstName} {customers.lastname}</li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

const dispatchToProps = (dispatch) => ({
   getCustomers: () => dispatch(getCustomers())
})

export default connect(mapStateToProps, dispatchToProps)(Customers);
