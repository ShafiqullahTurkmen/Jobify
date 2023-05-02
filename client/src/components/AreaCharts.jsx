import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function AreaCharts({data}) {
  return (
<ResponsiveContainer width={"100%"} height={300}>
      <AreaChart data={data} margin={{top: 50}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dateKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip/>
        <Area type="monotone" dataKey="count" stroke="#2cb1bc" fill="#bef8fd"/>
      </AreaChart>
    </ResponsiveContainer>  )
}
