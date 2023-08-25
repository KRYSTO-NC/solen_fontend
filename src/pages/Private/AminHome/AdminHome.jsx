import React from 'react'
import DashScreen from '../../../components/shared/DashScreen/DashScreen'
import NewInstallationLineChart from '../../../components/Charts/NewInstallationLineChart'
import './AdminHome.css'
import InterventionStatusDoughnutChart from '../../../components/Charts/InterventionStatusDoughnutChat'
function AdminHome() {
  return (
    <DashScreen>
             <section className="heading">
            <h1>Bienvenue sur l'Application Solen !</h1>
        </section>
        
        <div className="installations-charts-container">
      
        <NewInstallationLineChart/>
        <InterventionStatusDoughnutChart/>
        </div>
    </DashScreen>
  )
}

export default AdminHome