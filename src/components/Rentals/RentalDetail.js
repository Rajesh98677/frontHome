import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import { getrental ,getRentalsBySearch} from '../../actions/rentals';
import RentalAsset from './RentalAsset';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
// import useStyles from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});



const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);




const useStyles = makeStyles((theme) => ({


    media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedrentals: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      align: 'center'
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },

}));


const RentalDetail = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const { rental, rentals, isLoading } = useSelector((state) => state.rentals);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getrental(id));
  }, [id]);

  // useEffect(() => {
  //   if (rental) {
  //     dispatch(getRentalsBySearch({ search: 'none', tags: rental?.tags.join(',') }));
  //   }
  // }, [rental]);

  if (!rental) return null;

  const openrental = (_id) => history.push(`/rentals/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedrentals = rentals.filter(({ _id }) => _id !== rental._id);

  return (
    
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <Button variant="contained">
      
    <Link to={`/rentals`}>Back  </Link>
    <ArrowBackIcon/>
      </Button>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{rental.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{rental.tags?.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">Description: {rental.description}</Typography>
          <Typography gutterBottom variant="body1" component="p">Address: {rental.address}</Typography>
          <Typography gutterBottom variant="body1" component="p">Country-State: {rental.state} - {rental.country}</Typography>
          <Typography gutterBottom variant="body1" component="p">Property Type: {rental.rentaltype}</Typography>
          <Typography gutterBottom variant="body1" component="p">Price: ₹{rental.price}</Typography>
          {/* <Typography gutterBottom variant="body1" component="p">{rental.name}</Typography> */}
          {/* <Typography gutterBottom variant="body1" component="p">Contact : 12345678909</Typography> */}
          <Typography gutterBottom variant="body1" component="p">Property for : {rental.property}</Typography>
          <Typography gutterBottom variant="body1" component="p">Created on : {moment(rental.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
          <Typography variant="p">Feature :
          <RentalAsset/>
           </Typography>

          <Typography variant="body1">{moment(rental.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Button variant="contained" color="secondary" onClick={handleClickOpen} >Get Owner details</Button>
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={rental.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={rental.title} />
        </div>
      </div>


<div>
<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Owner Details
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           Property created date: {moment(rental.createdAt).format('MMMM Do YYYY, h:mm:ss a')} 
          </Typography>
          <Typography gutterBottom>
            Name: {rental.name}
          </Typography>
          <Typography gutterBottom>
            Email: {rental.email}
          </Typography>
          <Typography gutterBottom>
            Phone: {rental.phone}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Ok 
          </Button>
        </DialogActions>
      </Dialog>

</div>
<div>
      {!!recommendedrentals.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">Similar property:</Typography>
          <Divider />
          <div className={classes.recommendedrentals}>
            {recommendedrentals.map(({ title, description, address, rentaltype, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openrental(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                {/* <Typography gutterBottom variant="subtitle2">{description}</Typography> */}
                <Typography gutterBottom variant="subtitle2">{address}</Typography>
                <Typography gutterBottom variant="subtitle2">{rentaltype}</Typography>
                <img src={selectedFile} height='200px' width="250px" />
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </Paper>
  );
};

export default RentalDetail
