import React from 'react';
import { Redirect } from 'react-router-dom';
import BikeActive from '../BikeActive/BikeActive';
import { withRouter } from 'react-router-dom';


// CSS
import './RentForm.css';

class RentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {serialNumber: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({serialNumber: event.target.value});
    }
  
    handleSubmit(event) {
      // Todo: Implement call to api to start ride with the given serial number.

      let response = true;

      response ? this.props.history.push({
        pathname: '/bikeActive',
        state: { serialNumber: this.state.serialNumber }
      }): this.props.history.push({
        pathname: '/bikeActive',
        state: { serialNumber: this.state.serialNumber }
      });

      event.preventDefault();
    }
  
    render() {
      return (
        <form class="rent-form" onSubmit={this.handleSubmit}>
            <label>Serial-number:</label>
            <input class="input-full-width" type="text" value={this.state.serialNumber} onChange={this.handleChange} />
            <input class="btn-full-width" type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default withRouter(RentForm);