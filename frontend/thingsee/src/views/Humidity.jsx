import React, { PureComponent } from 'react'
import axios from 'axios';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

export class Humidity extends PureComponent {
  state = {
    data: [], // Initialize with an empty array
  };

  componentDidMount() {
    
    axios.get('http://13.233.201.118:4000/thingseeSensor/')
      .then((response) => {
        const data = response.data.result;
        this.setState({ data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  render() {
    return (
      <div>
      <h2>Humidity</h2>

      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={this.state.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="humd" stroke="#82ca9d" name="Humidity" />
        </LineChart>
      </ResponsiveContainer>



    
    <ResponsiveContainer width="90%" height={400}>
      <BarChart data={this.state.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="humd" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
    )
  }
}

export default Humidity