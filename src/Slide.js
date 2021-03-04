import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const ContinuousSlider = ({ adjustSize }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    adjustSize(value)
  };

  return (  
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Adjust Size
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          </Grid>
            <Grid item xs>
              <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
            </Grid>
      </Grid>
    </div>
  );
}

export default ContinuousSlider