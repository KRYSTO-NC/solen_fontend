import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInterventions } from '../../features/intervention/interventionSlice';
import Spinner from '../shared/spinner/Spinner';
import { toast } from 'react-toastify';
import { Doughnut } from 'react-chartjs-2';
import './charts.css';

function InterventionStatusDoughnutChart() {
  const dispatch = useDispatch();

  const { interventions, isLoading, isError, message } = useSelector(
    (state) => state.intervention
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getInterventions());
  }, [dispatch, isError, message]);

  if (!interventions.data || isLoading) {
    return <Spinner />;
  }
  console.log(interventions.data);

  // Grouper les interventions par statut
  const statusCounts = interventions.data.reduce((counts, intervention) => {
    counts[intervention.status] = (counts[intervention.status] || 0) + 1;
    return counts;
  }, {});

  const labels = Object.keys(statusCounts);
  const dataCounts = Object.values(statusCounts);

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataCounts,
        backgroundColor: ['#6fd864', '#d97979', '#e49745', '#9c99df', '#aa33ff'], // Couleurs pour chaque statut
        hoverBackgroundColor: ['#fba332', '#ff5733', '#33ff57', '#33aaff', '#aa33ff'], // Couleurs au survol
      },
    ],
  };

  return (
    <div className="chart-pie-container">
      <Doughnut data={data} />
    </div>
  );
}

export default InterventionStatusDoughnutChart;
