import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 14,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function ServiceCard({ serviceFromParent }) {
    const classes = useStyles();

    return (
        <Paper
            className={classes.root}
            style={{
                backgroundColor: '#CED0CA',
                margin: '5%',
                color: '#1C788F'
            }}
        >
            <CardContent>
                <Typography>{serviceFromParent.type}</Typography>
                <Typography>{serviceFromParent.cost}</Typography>
                <Typography>{serviceFromParent.time}</Typography>
            </CardContent>
            <CardActions
                style={{
                    justifyContent: 'center',
                }}
            >
                <NavLink
                    className="bookBtn"
                    exact to='/appointment'
                >Book</NavLink>
            </CardActions>
        </Paper>
    )
}

export default ServiceCard;