import React from 'react';
import './HomePage.css';
import { Typography } from '@material-ui/core';

const HomePage = (props) => (
    <div className='HomePage'>
        <div className="image">
            <Typography
                className="welcome"
                variant="h5"
            >Sirena-Salon De Beauté</Typography>
        </div>

        <div className="vistUs"
            style={{
                backgroundColor: '#758B71',
                opacity: '70%',
                color: '#F2E5D6',
                paddingTop: 20,
                paddingBottom: 20,
            }}
        >
            <div className="anotherCard"
                style={{
                    backgroundColor: '#758B71',
                    padding: 10
                }}
            >
                <Typography>
                    {/* contact info */}
                </Typography>
                <Typography>
                    {/* title for hours */}
                </Typography>
                <Typography>
                    {/* hours */}
                </Typography>
            </div>
            <div
                style={{
                    marginTop: 15,
                }}
            >
            </div>
        </div>
        <div className="bottomImg"></div>
    </div>
)

export default HomePage;