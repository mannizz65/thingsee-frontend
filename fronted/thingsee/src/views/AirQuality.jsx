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
class AirQuality extends PureComponent {
  state = {
    data: [], // Initialize with an empty array
  };

  componentDidMount() {
    
    axios.get('http://localhost:4000/thingseeSensor/')
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
      <h2> Air Quality </h2>

      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={this.state.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="airp" stroke="#82ca9d" name=" Air Quality" />
        </LineChart>
      </ResponsiveContainer>



    
    <ResponsiveContainer width="90%" height={400}>
      <BarChart data={this.state.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="airp" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
    );
  }
}


export default AirQuality;

