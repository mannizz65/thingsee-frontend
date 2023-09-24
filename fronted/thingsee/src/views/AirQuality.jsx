import React, { PureComponent } from 'react';

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
  render() {
    const lineChartData = [
      { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    ];

    const barChartData = [
      { name: 'Category A', value: 300 },
      { name: 'Category B', value: 800 },
      { name: 'Category C', value: 1500 },
      { name: 'Category D', value: 2000 },
      { name: 'Category E', value: 1200 },
    ];

    return (
      <div>
        <h1>Charts Page</h1>
        <div className="chart-container">
          <div className="line-chart">
            <h2>Line Chart</h2>
            <ResponsiveContainer width="90%" height={400}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bar-chart">
            <h2>Bar Chart</h2>
            <ResponsiveContainer width="90%" height={400}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}


export default AirQuality;
