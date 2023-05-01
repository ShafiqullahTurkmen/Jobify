import React from 'react'
import { useEffect } from 'react';
import { StatsContainer } from '../../components';
import ChartsContainer from '../../components/ChartsContainer';
import Loading from '../../components/Loading';
import { useAppContext } from '../../context/appContext'

export default function Stats() {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, [])

  if (isLoading) return <Loading center />

  return (
    <>
      <StatsContainer />

      {
        monthlyApplications.lenth && <ChartsContainer />
      }
    </>
  )
}
