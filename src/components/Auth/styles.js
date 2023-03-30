import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom:40,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center'
    
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom:20,
    marginRight:-50,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  root: {
    height: '100vh',
    margin:5,
    width: 'auto',
    textAlign: 'center',

  },
  image: {
    backgroundImage: 'url(https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    // backgroundImage: 'url()',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  // paper: {
  //   margin: theme.spacing(8, 4),
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  // form: {
  //   width: '60%', // Fix IE 11 issue.
  //   marginTop: theme.spacing(1),
  // },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
  sign:{
    padding:20,

  }
}));

