import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(props) {

    console.log("Inside Chart");

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues)
    console.log(props.dataPoints)

  return (
    <div className='chart'>
      {
        props.dataPoints.map( (dataPoint) => (
            <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            ></ChartBar>
        ))
      }
    </div>
  )
}
