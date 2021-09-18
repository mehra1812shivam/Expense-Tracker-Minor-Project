import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import Form from './Form/Form';

import useStyles from './styles';
const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100</Typography>
                <Typography style={{ lineHeight: '1.5em', marginTop: '20px' }} variant="subtitle1">Try saying : Add income for $100 in Category Salary for Monday...</Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>


                    </Grid>

                </Grid>

            </CardContent>

        </Card>
    )
}

export default Main
