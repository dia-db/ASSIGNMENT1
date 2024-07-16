import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';

const Viewproducts = () => {
const[rows,setRows]=useState([])
useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
    console.log(res)
    setRows(res.data)
  
    }).catch((error)=>{
      console.log(error)
    })
    },[],
    )
    return (
        <>
        <Grid container spacing={2}>
        {rows.map((item,index)=>(
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <Card sx={{ minWidth:275 , display: 'flex',flexDirection:'column',justifyContent: 'space-between', height: '100%',marginTop: '20px', marginBottom: '20px'}}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {item.title}
        </Typography>
        <Typography variant="h5" component="div">
         ${item.price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {item.category}
        </Typography>
        <img src={item.image} style={{ width: '100%', height: 'auto', objectFit: 'contain' }}/>
      </CardContent>
      <CardActions  sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Button size="small" sx={{ alignSelf: 'flex-start' }}>Learn More</Button>
      </CardActions>
      </Card>
     </Grid>
  ))}
  </Grid>
  </>
  )
 
}

export default Viewproducts
