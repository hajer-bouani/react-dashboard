import React , {useState, useEffect} from 'react'
import Axios from 'axios'
import { MDBDataTable } from 'mdbreact';

const Dashboard = () =>{

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

    useEffect(()=>{
      Axios.get("https://athos.hydra-it.com/athos/360view/v1/events")
      .then((response)=>{
          const rows : [] = response.data.content
          setData({...data,rows})
      })
    },[])

    return <MDBDataTable
    striped
    bordered
    hover
    data={data}
  />
}

export default Dashboard