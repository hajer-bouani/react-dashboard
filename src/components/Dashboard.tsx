// Les imports
import React , {useState, useEffect} from 'react'
import Axios from 'axios'
import { MDBDataTable } from 'mdbreact';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow} from 'mdbreact';
import {Pie } from 'react-chartjs-2';
import  moment from 'moment'
import { Content } from '../models';

// Dans le nouveaux concept de react on evite d'utiliser les classes alors on utilise des entites sous forme de constantes
const Dashboard = () =>{
  // Transformation de la date de format java vers le format javascript
  const toDate = (date: string) => {
    return moment.parseZone(date,"ddd-MMM-DD-HH-mm-ss-----gggg").toDate()
  }

  /* Les entites et leurs settets
     en utilisant le useState qui permet de gerer les entites dans un composant
*/
    const [data, setData] = useState({
        columns:[
            {
                label: 'id',
                field: 'id',
                sort: 'asc',
              },
            {
                label: 'Event Type',
                field: 'eventType',
                sort: 'asc',
              },
            {
                label: 'Module',
                field: 'module',
                sort: 'asc',
              },
            {
                label: 'Login Id',
                field: 'loginid',
                sort: 'asc',
              },
            {
                label: 'Message',
                field: 'message',
                sort: 'asc',
              },
            {
                label: 'Description',
                field: 'description',
                sort: 'asc',
              },
            {
                label: 'Timestamp',
                field: 'timestamp',
                sort: 'asc',
              },
        ],
        rows:[]
    })
    const pieLabels =['FATAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE']
    const pieColors = {
      backgroundColor: ['#8B0000', '#FF0000', '#FFFF00', '#008000', '#00FFFF', '#808080'],
      hoverBackgroundColor: ['#800000', '#B22222', '#ADFF2F', '##006400', '#00FFFF', '##A9A9A9']
    }
    const [latestDataPie, setLatestDataPie] = useState({
      labels: pieLabels,
      datasets: [
        {
          data: [0, 0, 0, 0, 0, 0],
          ...pieColors
        }
      ]
    })
    const [dataPie, setDataPie] = useState({
      labels: pieLabels,
      datasets: [
        {
          data: [0, 0, 0, 0, 0, 0],
            // data: [300, 50, 100, 40, 120, 24],
            ...pieColors
            }
          ]
    })

    // Changer les information affiches dans la pie chart
    const setPie= (array: Content[]) =>{
      let result = [0,0,0,0,0,0]
      let resultLatest = [0,0,0,0,0,0]
      const minDate = moment().subtract(3, 'days').toDate()
      for (const iterator of array) {
        if(toDate(iterator.timestamp)>minDate){
          switch (iterator.eventType) {
            case 'FATAL':
              resultLatest[0]++
              break;
            case 'ERROR':
              resultLatest[1]++
              break;
            case 'WARN':
              resultLatest[2]++
              break;
            case 'INFO':
              resultLatest[3]++
              break;
            case 'DEBUG':
              resultLatest[4]++
              break;
            case 'TRACE':
              resultLatest[5]++
              break;
          }
        }
        switch (iterator.eventType) {
            case 'FATAL':
              result[0]++
              break;
            case 'ERROR':
              result[1]++
              break;
            case 'WARN':
              result[2]++
              break;
            case 'INFO':
              result[3]++
              break;
            case 'DEBUG':
              result[4]++
              break;
            case 'TRACE':
              result[5]++
              break;
          }
      }
      setDataPie({
        labels: pieLabels,
        datasets: [
          {
            data: result,
            ...pieColors
          }
        ]
      })
      setLatestDataPie({
        labels: pieLabels,
        datasets: [
          {
            data: resultLatest,
            ...pieColors
          }
        ]
      })
    }
    // Utilisation de useEffect pour executer du code des la creation du component app
    useEffect(()=>{
      // Envoie de requte en utilisant axios
      Axios.get("https://athos.hydra-it.com/athos/360view/v1/events")
      .then((response)=>{
          const rows : [] = response.data.content
          setData({...data,rows})
          setPie(rows)
      })
    },[])
// Le resultat retourné par le code JSX
    return <React.Fragment>
      <MDBRow className="mb-4">
                <MDBCol md="5" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Events</MDBCardHeader>
                        <MDBCardBody>
                            <Pie data={dataPie} height={300} options={{responsive: true}} />
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    <MDBCol md="5" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Events(Last 3 days)</MDBCardHeader>
                        <MDBCardBody>
                            <Pie data={latestDataPie} height={300} options={{responsive: true}} />
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
            </MDBRow>
      <MDBRow className="mb-4">
      <MDBCol md="10" className="mb-4">
      <MDBDataTable
    striped
    bordered
    hover
    data={data}
  />
  </MDBCol>
  </MDBRow>
  
    </React.Fragment>
    
}

export default Dashboard