import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Grid from '@material-ui/core/Grid';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import * as actionType from '../../constants/actionTypes';
import CssBaseline from '@material-ui/core/CssBaseline';

import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Auth() {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: actionType.AUTH, data: { result, token } });
      history.push('/');

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');


  return (
<Container>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} className={classes.image} >
      {/* <h1>NextHome</h1> */}
      
        </Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6}  className={classes.sign}>
          <LockOutlinedIcon style={{fontSize:60,color:'#14274E'}} />
        <Typography component="h1" variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit} gutterBottom>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId="142383862728-hotdbqictsq9v6cp7qnn2rs4kpr5310t.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin" />
          <Grid container justify="flex-end" gutterBottom>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      {/* </Paper> */}
      </Grid>
    </Grid>
      </Container>
  );
}

export default Auth;