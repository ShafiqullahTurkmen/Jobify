import React, { useState } from 'react'
import BarChart from './BarCharts';
import AreaChart from './AreaCharts';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useAppContext } from '../context/appContext';
export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {
        barChart ? <BarChart data={data} /> : <AreaChart data={data} />
      }
    </Wrapper>
  )
}
