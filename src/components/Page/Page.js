import React from 'react'
import { Paper, InputBase, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Card from './Card/Card.js';
import Footer from "./Footer/Footer.js"
import './page.css'


const Page = () => {
    return (
        <div className='page'>
            <div className='button-group'>
                <button className="btn1"> One</button>
                <button className="btn2"> Two</button>
            </div>

            <div className='search-box'>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', mt: "10px", display: 'flex', alignItems: 'center', width: "300px", border: '1px solid #e3e3e3', height: "30px" }}
                >
                    <IconButton sx={{ p: '5px' }} aria-label="menu">
                        <SearchIcon fontSize='small' />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Paper>
            </div>

            <h4>Recommended (6) </h4>

            <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ltyJ3Yyv1OU-IrUy8iowBEMP2BnR0g7sVQ&usqp=CAU" name="Blueberry Almond Cookies" price="₹169.00 (100gm)" quantity="Add" />
            <Card img="https://thebigmansworld.com/wp-content/uploads/2020/11/death-by-chocolate-cake6-500x500.jpg" name="Death by chocolate special" price="₹1200.00 (1kg)" quantity="Add" />


            <IconButton sx={{ p: '7px', background: 'orange', borderRadius: '30px', float: 'right' }} aria-label="menu">
                <DensitySmallIcon fontSize='small' />
                <Typography >Browse</Typography>
            </IconButton>
            <Footer />

        </div >
    )
}

export default Page