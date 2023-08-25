import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../shared/spinner/Spinner';
import { toast } from 'react-toastify';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import './charts.css'
import { getInstallations } from '../../features/installation/installationSlice';
// Enregistrez l'échelle de catégorie
Chart.register(CategoryScale);

function NewInstallationLineChart() {
  const dispatch = useDispatch();

  const { installations, isLoading, isError, message } = useSelector(
    (state) => state.installation
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getInstallations());
  }, [dispatch, isError, message]);
console.log(installations.data);
  if (!installations.data || isLoading) {
    return <Spinner />;
  }

  const months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];
  const installationsByMonth = months.map((month, index) => {
    return installations.data.filter((installation) => new Date(installation.dateMiseEnService).getMonth() === index).length;
  });
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Installations mise en service',
        data: installationsByMonth,
        fill: false,
        backgroundColor: '#fba332',
        borderColor: '#fba332',
        hoverBorderColor: '#fba332', // Couleur au survol
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        type: 'linear',
        ticks: {
          stepSize: 1, // Utilise uniquement des entiers
        },
      },
    },
  };

  return (
    <div className="chart-line-container">
    <Line data={data} options={options} />
   
  </div>
  );
}

export default NewInstallationLineChart;
