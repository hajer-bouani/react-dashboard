import React, { useState } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import {Pie } from 'react-chartjs-2';

const Charts  = () =>{
        
        const pieLabels =['FATAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE']
        const pieColors = {
            backgroundColor: ['#8B0000', '#FF0000', '#FFFF00', '#008000', '#00FFFF', '#808080'],
            hoverBackgroundColor: ['#800000', '#B22222', '#ADFF2F', '##006400', '#00FFFF', '##A9A9A9']
        }
        const [latestDataPie, setLatestDataPie] = useState({
            labels: pieLabels,
            datasets: [
            {
                data: [300, 50, 100, 40, 120, 24],
                ...pieColors
                }
            ]
        })
        const [dataPie, setDataPie] = useState({
            labels: pieLabels,
            datasets: [
            {
                data: [300, 50, 100, 40, 120, 24],
                ...pieColors
                }
            ]
        })
        

        
        return (
            <MDBRow className="mb-4">
                <MDBCol md="5" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Pie chart</MDBCardHeader>
                        <MDBCardBody>
                            <Pie data={dataPie} height={300} options={{responsive: true}} />
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    <MDBCol md="5" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Pie chart</MDBCardHeader>
                        <MDBCardBody>
                            <Pie data={dataPie} height={300} options={{responsive: true}} />
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
            </MDBRow>
        )
    
}

export default Charts;

