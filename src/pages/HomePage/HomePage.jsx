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
                backgroundColor: '#ced0ca',
                opacity: '70%',
                color: '#F2E5D6',
                paddingTop: 20,
                paddingBottom: 20,
            }}
        >
            <div className="anotherCard"
                style={{
                    backgroundColor: '#ced0ca',
                    padding: 10,
                    color: '#1c788f'
                }}
            >
                <Typography>
                    Contact Us At (555)555-5555
                </Typography>
                <Typography>
                    Hours
                </Typography>
                <Typography>
                    Monday-Friday 10am-5pm
                </Typography>
                <Typography>
                    Saturday 11am-5pm
                </Typography>
                <Typography>
                    Sunday CLOSED
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