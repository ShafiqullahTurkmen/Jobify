import React from 'react'
import { useAppContext } from '../context/appContext'

export default function Alert() {
  const { alertType, alertText } = useAppContext();
  console.log(alertType, "alert Type", alertText);
  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  )
}
