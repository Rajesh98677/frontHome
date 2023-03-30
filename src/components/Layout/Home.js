import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paginate from '../pagination';
import {getRentals,getRentalsBySearch} from '../../actions/rentals'
import { useState ,useEffect} from 'react';
import {  Grid, Paper } from '@material-ui/core';
import { useHistory,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Rentalpost from '../Rentals/Rentalpost';
import {useDispatch } from 'react-redux'
import RentalService from '../Rentals/RentalService';
import WhyUse from './WhyUse';
import ChipInput from 'material-ui-chip-input';
import Testimonial from './Testimonials'
import Service from '../Rentals/RentalService/Service';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8,0,6),
    height:'150px',
    backgroundColor:'#fff',
    // backgroundRepeat:'no-repeat'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  indet:{
    backgroundColor:'grey',
    borderRadius:10,
    padding:1,
    backgroundColor:'#fff',

  },
  input:{
    color:'#000',
    backgroundColor:'#fff',
    

  },
  title:{
   fontWeight:'bold',
   textAlign:'center',
   color:"#14274E",
   fontFamily: 'Kaushan Script'
  },
  title2:{
   fontWeight:'bold',
   textAlign:'center',
   color:"#14274E"
  },
  
  mainContainer: {
    borderRadius: 2,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  card:{
    marginTop:20,
    marginBottom:30,
     height: '100%',
    display: 'flex', 
    backgroundColor:"#fdfdfd"
  },
  Button:{
    backgroundColor:'#fff',
    width:'275px'
  },
    header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  Pagination:{
    maxWidth:'300px',
    textAlign:"center",
    float:"right",
    marginTop:-35
  },
  imgboard:{
  margin:8,
    padding:20,
    textAlign:'center',
    color:'black'
  },
  pass:{
    fontSize:30
  }
  ,
main:{
  backgroundColor:"#fdfdfd",
  paddingTop:"-10px",
  padding:10,
  paddingBottom:"10"
},
homef :{
    display:'flex',
    paddingTop:'-200px',
    fontWeight:"bold",
    fontFamily:'Helvetica'
},homee:{
  display:'flex',
  padding:'4px',
  borderRadius:'10px',
  
}

}));

function useQuery(){
  return new URLSearchParams(useLocation().search);
}


export default function Home(rental) {
   const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
    const dispatch = useDispatch();
    const {rentals} = useSelector((state) => state.rentals);
    // const analytics2 = useSelector((state) => state.analytics2);
    // console.log(rentals)
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
  const [search,setSearch] = useState('');
  const [tags,setTags] = useState([]);
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));



// useEffect(()=>{
//   dispatch(getRentals())
// },[dispatch])

const searchPost = () =>{
  if(search.trim() || tags ){
dispatch(getRentalsBySearch({search , tags:tags.join(',')}));
// history.push(`/rentals/search?searchQuery=${search || 'none' }`)
history.push(`/rentals/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);

  }else{
    history.push('/')
  }
}

  const handleKeyPress =(e)=>{
    if(e.keyCode === 13){
      searchPost();   
    }
  }

  const handleAdd = (tag) => setTags([...tags,tag]);
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

  



  return (
    <React.Fragment >
      <CssBaseline />
  <Paper>
      <main className={classes.maini} >
          
        <div className="wallicon">
        
         {user?( 
         <Container  component={Paper} elevation={1} gutterBottom className={classes.homee}>
          <Typography align="left" component="p"  gutterBottom className={classes.homef}>
         <>  {user?(<FiberManualRecordIcon style={{ color: '#33FF57' }} />):(<></>)} </>
         &nbsp;&nbsp;
           <>{user?(<>Welcome, { user.result.name}</>):(<></>)} </>
          </Typography>
         
          <Typography align="right" component="p" >

          </Typography>

          </Container>):(<></>)}
         
             <Container maxWidth="sm" className="nh" className="wallicon1">
                      <Typography component="h1" variant="h4" align="left" color="Primary" gutterBottom className={classes.title}>
                      NextHome
                      </Typography>
                      <Typography component="h3" variant="h6" align="left" color="Primary" gutterBottom className={classes.title}>
                      Everything You Need. All Right Here.
                      </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.indet} elevation={5}>
                <InputBase
                  className={classes.input}
                  placeholder="Search Your NextHome.."
                  inputProps={{ 'aria-label': 'search ' }}
                  onChange={(e)=>setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                  value={search}
                  elevation={5}
                />
                {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
                  <SearchIcon onClick={searchPost} className={classes.searchButton} />
                </IconButton> */}
                {/* </Typography>    */}
                {/* <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.indet}> */}
                <ChipInput
                  className={classes.input}
                  // style={{ margin: '10px 0' }}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  // label="Search Tags"
                  // variant="outlined"
                  placeholder="Search By Location..."
                  elevation={5}
                  // onChange={(e)=>setTags(e.target.value)}

                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                  <SearchIcon onClick={searchPost} className={classes.searchButton} elevation={5} />
                </IconButton>
                </Typography>   
            </Container>
        </div>

      
      <div className={classes.heroContent}>

        
{(!searchQuery && !tags.length)? (<Container maxWidth="sm" >
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Popular Property 
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Post your free property ads here ..
              thousand of unique visitors every weeks
            </Typography>
            
          </Container>):(
          <Container maxWidth="sm" >
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Search Result 
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Post your free property ads here ..
              thousand of unique visitors every weeks
            </Typography>
            
          </Container>)}
      
          </div>
    
    <div className={classes.main}>
      <Container>
      <Grid container spacing={4} className={classes.card} >
          {rentals?.map((rental) => (
            <Grid key={rental._id}   item  md={4} xs={12} sm={12} lg={4} >
              <Rentalpost rental={rental} setCurrentId = {setCurrentId} />
              </Grid>
            
          ))};
        </Grid>
        </Container>
            {/* console.log(rentals) */}
      
      <Container>
        <Paper className={classes.Pagination} elevation={3}>
        <Paginate page={page}/>
      </Paper>
        </Container>
        </div>
        {/* <RentalService/>  */}
    <WhyUse/>
        <Testimonial/>
        {/* <Service/> */}
      </main>
      </Paper>
    </React.Fragment>
  )
};

