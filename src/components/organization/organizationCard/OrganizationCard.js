import React, { PureComponent } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import classes from './OrganizationCard.module.css';

export class OrganizationCard extends PureComponent {

    render() {
        return (
            <Card className={classes.organizationCard}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                    <Typography variant="h5" component="h2">
                        be lent
                        </Typography>
                    <Typography color="textSecondary">
                        adjective
                        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                            <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }
}