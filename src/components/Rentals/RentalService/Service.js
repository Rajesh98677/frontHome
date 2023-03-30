import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import {service} from '../../../actions/service'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function Service() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    name:'',
    phone:'',
    address:'',
    service: '',
    
  });

  const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(service({...info}))
   alert("Thank you For using our service ")

  };


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Book Now
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thank you for choosing our service</DialogTitle>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <DialogContent>
          {/* <DialogContentText> */}
          <DialogContentText>
            To Use to this website services, please enter your Name, Phone, Service here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name "
            type="email"
            fullWidth
            required
            value={info.name}
            onChange={(e)=> setInfo({...info, name:e.target.value})}
          />
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="email"
            fullWidth
            required
            value={info.phone}
            onChange={(e)=> setInfo({...info, phone:e.target.value})}
          />
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="email"
            fullWidth
            required
            value={info.address}
            onChange={(e)=> setInfo({...info, address:e.target.value})}
          />
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Service</InputLabel>
        <NativeSelect
           value={info.service}
           onChange={(e)=> setInfo({...info, service:e.target.value})}
          inputProps={{
            name: 'service',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value='Electrical'>Electrical Service</option>
          <option value='Furniture'>Furniture Service</option>
          <option value='Paint'>Paint Service</option>
          <option value='Cleaning'>Cleaning Service</option>
        </NativeSelect>
        </FormControl>
          </DialogContent>
          <DialogActions>

          {/* <Button onClick={handleClose} color="primary" >
        Cancel
          </Button> */}
          <Button type="submit" color="primary" >
         Book Now
          </Button>
          </DialogActions>
      
      </form>
       
      </Dialog>
    </div>
  );
}
