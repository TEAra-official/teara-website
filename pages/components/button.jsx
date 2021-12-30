import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles ({
  root: {
      color: '#FFFFFF',
      backgroundColor: '#39B54A',
      "&:hover": {
        color: '#FFFFFF',
        backgroundColor: '#5BB567',
      },
  }
});

export default function Button_Main(props) {
  const classes = useStyles();
  return (
    <div >
    <Button 
    variant="contained"
    className={classes.root}
    href={props.href}
    >
      {props.content}
    </Button>
    </div>
  )
}
