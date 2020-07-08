import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: '2px solid black',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Suggestions = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const options = props.results
  
 const cash = props.results.map(user => (
  
   

<Card className={classes.root}>
<CardContent>
  <Typography className={classes.title} color="textSecondary" gutterBottom>
    {user.party}
  </Typography>
  <Typography variant="h5" component="h2">
    {user.name}
  </Typography>
  <Typography className={classes.pos} color="textSecondary">
    {user.phones}
  </Typography>

</CardContent>
<CardActions>
  <Button size="small"><a href={user.urls}>Learn More</a></Button>
</CardActions>
</Card>
    
  ))


 return <div id='flex-container'>
 {cash}
 </div>
}

export default Suggestions