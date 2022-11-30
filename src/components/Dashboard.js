import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import '../App.css';

import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';

import GasTable from './GasTable';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const Dashboard = () => {

    //-------------------------------------
    // Electricity CO2 Emissions Bar Chart
    //-------------------------------------
    const electricityCO2options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Electricity CO2 Emissions'
        }
      }
    };

    const electricityCO2Data = {
      labels: [2017, 2018, 2019, 2020], // labels
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [1964.859, 1957.313, 1687.722, 1316.134],
          backgroundColor: 'rgba(0, 125, 218, 0.76)' 
        }
      ] 
    };

    //-----------------------------------------
    // Fuel Consumption CO2 Emissions Bar Chart
    //-----------------------------------------
    const fuelCO2options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Fuel Consumption CO2 Emissions'
        }
      }
    };

    const fuelCO2Data = {
      labels: [2017, 2018, 2019, 2020], // labels
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [851.0425866, 861.0811429, 816.0609313, 729.2723672],
          backgroundColor: 'rgba(124, 81, 37, 0.63)' 
        }
      ] 
    };

    //-----------------------------------------
    // Gas Consumption CO2 Emissions Bar Chart
    //-----------------------------------------
    const gasCO2options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Gas Consumption CO2 Emissions'
        }
      }
    };

    const gasCO2Data = {
      labels: [2017, 2018, 2019, 2020], // labels
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [1390.959, 1400.35, 1352.224, 1296.662],
          backgroundColor: 'rgba(139, 33, 0, 0.7)' 
        }
      ] 
    };

    //-----------------------------------------
    // Greenhouse Gases CO2 Emissions Bar Chart
    //-----------------------------------------
    const greenhouseCO2options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Greenhouse Gases CO2 Emissions'
        }
      }
    };

    const greenhouseCO2Data = {
      labels: [2017, 2018, 2019, 2020], // labels
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [155.6885438, 147.3731247, 151.0370567, 148.051483],
          backgroundColor: 'rgba(4, 63, 1, 0.7)' 
        }
      ] 
    };

    //-----------------------------------------
    // Total CO2 Emissions Bar Chart
    //-----------------------------------------
    const totalCO2options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Total CO2 Emissions'
        }
      }
    };

    const totalCO2Data = {
      labels: [2017, 2018, 2019, 2020], // labels
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [4987.041329, 4963.501531, 4435.789474, 3541.710158],
          backgroundColor: 'rgba(54, 40, 174, 0.8)' 
        }
      ] 
    };

    //-----------------------------------------
    // Total CO2 Emissions Breakdown Doughnut
    //-----------------------------------------
    const totalBreakdownOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Total CO2 Breakdown by Emissions Type 2017-2020'
        }
      }
    };

    const totalBreakdownData = {
      labels: ['Electricity', 'Fuel Consumption', 'Gas Consumption', 'Greenhouse Gases'],
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [6926.028, 3257.457028, 5440.195, 602.1502082],
          backgroundColor: [
            'rgba(0, 125, 218, 0.76)',
            'rgba(124, 81, 37, 0.63)',
            'rgba(139, 33, 0, 0.7)',
            'rgba(4, 63, 1, 0.7)'
          ]
        }
      ]
    };

    //-----------------------------------------
    // 2017 CO2 Emissions Breakdown Doughnut
    //-----------------------------------------
    const emissionsBreakdown2017Options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'CO2 Breakdown by Emissions Type for 2017'
        }
      }
    };

    const emissionsBreakdown2017Data = {
      labels: ['Electricity', 'Fuel Consumption', 'Gas Consumption', 'Greenhouse Gases'],
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [1964.859, 851.0425866, 1390.959, 155.6885438],
          backgroundColor: [
            'rgba(0, 125, 218, 0.76)',
            'rgba(124, 81, 37, 0.63)',
            'rgba(139, 33, 0, 0.7)',
            'rgba(4, 63, 1, 0.7)'
          ]
        }
      ]
    };

    //-----------------------------------------
    // 2018 CO2 Emissions Breakdown Doughnut
    //-----------------------------------------
    const emissionsBreakdown2018Options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'CO2 Breakdown by Emissions Type for 2018'
        }
      }
    };

    const emissionsBreakdown2018Data = {
      labels: ['Electricity', 'Fuel Consumption', 'Gas Consumption', 'Greenhouse Gases'],
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [1957.313, 861.0811429, 1400.35, 147.3731247],
          backgroundColor: [
            'rgba(0, 125, 218, 0.76)',
            'rgba(124, 81, 37, 0.63)',
            'rgba(139, 33, 0, 0.7)',
            'rgba(4, 63, 1, 0.7)'
          ]
        }
      ]
    };

    //-----------------------------------------
    // 2019 CO2 Emissions Breakdown Doughnut
    //-----------------------------------------
    const emissionsBreakdown2019Options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'CO2 Breakdown by Emissions Type for 2019'
        }
      }
    };

    const emissionsBreakdown2019Data = {
      labels: ['Electricity', 'Fuel Consumption', 'Gas Consumption', 'Greenhouse Gases'],
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [1687.722, 816.0609313, 1352.224, 151.0370567],
          backgroundColor: [
            'rgba(0, 125, 218, 0.76)',
            'rgba(124, 81, 37, 0.63)',
            'rgba(139, 33, 0, 0.7)',
            'rgba(4, 63, 1, 0.7)'
          ]
        }
      ]
    };

    //-----------------------------------------
    // 2020 CO2 Emissions Breakdown Doughnut
    //-----------------------------------------
    const emissionsBreakdown2020Options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'CO2 Breakdown by Emissions Type for 2020'
        }
      }
    };

    const emissionsBreakdown2020Data = {
      labels: ['Electricity', 'Fuel Consumption', 'Gas Consumption', 'Greenhouse Gases'],
      datasets: [
        {
          label: 'CO2 Emissions in kilotons',
          data: [1316.134, 729.2723672, 1296.662, 148.051483],
          backgroundColor: [
            'rgba(0, 125, 218, 0.76)',
            'rgba(124, 81, 37, 0.63)',
            'rgba(139, 33, 0, 0.7)',
            'rgba(4, 63, 1, 0.7)'
          ]
        }
      ]
    };

    //-----------------------------------------
    // Sustainable Cars Bar Chart
    //-----------------------------------------
    const sustainableCarsOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Sustainable Cars'
        }
      }
    };

    const sustainableCarsData = {
      labels: [2016, 2017, 2018, 2019, 2020], // labels
      datasets: [
        {
          label: 'Electric commercial vehicles',
          data: [118, 146, 398, 0, 0],
          backgroundColor: 'rgba(178, 254, 255, 0.64)' 
        },
        {
          label: 'Natural gas (CNG) passenger cars',
          data: [246, 274, 360, 0, 0],
          backgroundColor: 'rgba(110, 209, 97, 0.64)' 
        },
        {
          label: 'Electric passenger cars (FEV and PHEV)',
          data: [3812, 5014, 5436, 7920, 10891],
          backgroundColor: 'rgba(0, 178, 228, 0.64)' 
        },
        {
          label: 'Hybrid passenger cars',
          data: [4644, 5242, 5663, 0, 0],
          backgroundColor: 'rgba(0, 96, 162, 0.64)' 
        },
      ] 
    };

    //-----------------------------------------
    // Average Disposable Income Bar Chart
    //-----------------------------------------
    const disposableIncomeOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Average Disposable Income (x1000 euros)'
        }
      }
    };

    const disposableIncomeData = {
      labels: [2014, 2015, 2016, 2017, 2018], // labels
      datasets: [
        {
          label: 'Single household',
          data: [24.6, 24.8, 25.5, 26.3, 26.5],
          backgroundColor: 'rgba(255, 240, 132, 0.7)' 
        },
        {
          label: 'Single parent family',
          data: [29.8, 30.8, 32.4, 34.1, 35.4],
          backgroundColor: 'rgba(160, 107, 6, 0.64)' 
        },
        {
          label: 'Per household (excl. students)',
          data: [36.3, 36.8, 38.3, 39.8, 40.3],
          backgroundColor: 'rgba(89, 0, 0, 0.64)' 
        },
        {
          label: 'Couple without children',
          data: [48.8, 49.0, 51.6, 53.2, 54.2],
          backgroundColor: 'rgba(46, 83, 23, 0.64)' 
        },
        {
          label: 'Multi-person household',
          data: [48.1, 49.3, 51.6, 55.5, 56.1],
          backgroundColor: 'rgba(36, 146, 115, 0.64)' 
        },
        {
          label: 'Couple with children',
          data: [58.9, 60.8, 63.6, 66.9, 68.5],
          backgroundColor: 'rgba(116, 180, 237, 0.64)' 
        },
      ] 
    };

    //-----------------------------------------
    // Students in University Bar Chart
    //-----------------------------------------
    const universityOptions = {
      responsive: true,
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Students in University Education'
        }
      }
    };

    const universityData = {
      labels: ["2012/'13", "2013/'14", "2014/'15", "2015/'16", "2016/'17", "2017/'18", "2018/'19", "2019/'20", "2020/'21"], // labels
      datasets: [
        {
          label: 'University of Amsterdam (UvA)',
          data: [29798, 31153, 31216, 30618, 31274, 32630, 34411, 35425, 38940],
          backgroundColor: 'rgba(139, 0, 173, 0.64)' 
        },
        {
          label: 'Free University (VU)',
          data: [23589, 23653, 23684, 22924, 22061, 22773, 24200, 26569, 29796],
          backgroundColor: 'rgba(136, 83, 149, 0.59)' 
        }
      ] 
    };

    //-----------------------------------------
    // CO2 Emissions from Gas Consumption Bar Chart
    //-----------------------------------------
    const gasConsumptionCO2Options = {
      responsive: true,
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'CO2 Emissions from Gas Consumption (Older data)'
        }
      }
    };

    const gasConsumptionCO2Data = {
      labels: [2013, 2014, 2015, 2016, 2017], // labels
      datasets: [
        {
          label: 'Private gas consumption',
          data: [558, 534, 530, 542, 531],
          backgroundColor: 'rgba(99, 188, 255, 0.61)' 
        },
        {
          label: 'Business gas consumption',
          data: [843, 793, 789, 753, 753],
          backgroundColor: 'rgba(60, 70, 255, 0.7)' 
        }
      ] 
    };


    return (
      <div className="container">
                <h2 className="center">Dashboard</h2>
                
                <p>All data shown below is retrieved through Amsterdam's official data website which can be found&nbsp;
                  <a href="https://onderzoek.amsterdam.nl/zoek?categorie=dossier">here. (external link)</a>
                </p>
                <h2>CO2 Emissions Data:</h2>
                <p>The data below represents the overall output of CO2 emissions over a 4 year period.
                  CO2 emissions are measured in kilotons of CO2 released by four main emission types which
                  contribute the vast majority of CO2 output in Amsterdam. The four main contributors to 
                  CO2 emissions are Electricity, Fuel Consumption, Gas Consumption, and Greenhouse Gases.
                  CO2 emissions caused by use of electricity stem from the generation of electric power for
                  various different purposes such as industry, construction, commercial and public services, 
                  household power, etc. CO2 emissions caused by Fuel Consumption stem from exhuast fumes
                  created by vehicles for various different usages such as transportation, shipping, fishing, etc.
                  CO2 emissions caused by Gas Consumption stems from a plethora of different uses, such as household
                  natural gas, construction equipment, public utilities, etc. Lastly, Emissions from miscellaneous
                  greenhouse gases stem from a wide variety of sources, from backyard firepits to farm animals.
                </p>
                <Grid container spacing={2}>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Bar options={totalCO2options} data={totalCO2Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Bar options={gasConsumptionCO2Options} data={gasConsumptionCO2Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Bar options={electricityCO2options} data={electricityCO2Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Bar options={fuelCO2options} data={fuelCO2Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                      <Bar options={gasCO2options} data={gasCO2Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                      <Bar options={greenhouseCO2options} data={greenhouseCO2Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <br /><br />
                
                <h2>CO2 Emissions Breakdown:</h2>
                <p>The graphs below delineates the breakdown of each of the four main contributors of CO2 emissions,
                  showing which contributor has been the main culprit in CO2 emissions over each of the four years
                  of data collection. 
                </p>
                <Grid container spacing={2}>
                  <Grid item xs={12} justifyContent="center" direction="row" alignItems="center" marginRight={70} marginLeft={70}>
                    <Card variant="outlined">
                      <CardContent>
                        <Doughnut options={totalBreakdownOptions} data={totalBreakdownData}/>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Doughnut options={emissionsBreakdown2017Options} data={emissionsBreakdown2017Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Doughnut options={emissionsBreakdown2018Options} data={emissionsBreakdown2018Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Doughnut options={emissionsBreakdown2019Options} data={emissionsBreakdown2019Data} /> 
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Doughnut options={emissionsBreakdown2020Options} data={emissionsBreakdown2020Data} />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <br /><br />

                <h2>Behavioral Data:</h2>
                <p>The data below illustrates the growth AIM has been able to affect through its various
                  initiatives resulting in increased Disposable Income. The data showcases how the population
                  has elected to use this disposable income to further the efforts of sustainability and
                  furthering education.
                </p>
                <Grid container spacing={2}>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Bar options={sustainableCarsOptions} data={sustainableCarsData} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Bar options={disposableIncomeOptions} data={disposableIncomeData} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                      <CardContent>
                        <Bar options={universityOptions} data={universityData} />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <br /><br />

                <GasTable />
      </div>    
    )
    
    
}

export default Dashboard;