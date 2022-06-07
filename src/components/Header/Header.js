import React from 'react'
import "./header.css"
import { Button, ButtonGroup } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StoreIcon from '@mui/icons-material/Store';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

const Header = () => {
    return (
        <div className='header'>
            <img src='https://www.pembrokepatisserie.co.nz/wp-content/uploads/2020/04/Eclairs-1500-x-1500.jpg' />
            <h2>lluvia bakery</h2>

            <div className='img-text'>
                <p> <OnlinePredictionIcon fontSize='small' /> <span>open</span> </p>
                <p> <LocationOnIcon fontSize='small' /> <span>2.3 km</span></p>
            </div>

            <div className='img-below-text'>
                <div className='feature1'>
                    <p> <LocalMallIcon fontSize='small' /> <span>Order Online</span></p>
                    <p> <DeliveryDiningIcon fontSize='small' /> <span>No Delivery</span></p>
                </div>
                <div className='feature2'>
                    <p> <StoreIcon fontSize='small' /> <span>On the move</span></p>
                    <p>  <AssignmentTurnedInIcon fontSize='small' /> <span>Appointment</span> </p>
                </div>
            </div>

            <div className='button-group'>
                <ButtonGroup variant="outlined" aria-label="outlined primary button group" >
                    <Button sx={{ width: "100px", color: "black", borderColor: "black" }}>Follow</Button>
                    <Button sx={{ width: "100px", color: "black", borderColor: "black" }}>Share</Button>
                    <Button sx={{ width: "100px", color: "black", borderColor: "black" }}>Offer</Button>
                </ButtonGroup>
            </div>
            <div className='coin-msg'>
                <p>You have Rs 40 Boni coins</p>
            </div>
            <hr />
        </div>
    )
}

export default Header