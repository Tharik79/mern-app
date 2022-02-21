import {  Card } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  
  image: {
      width: '30%',
      height: '40%'

  },
  component: {
    margin: '5%',
    marginTop: '0%'
  }
});

const Home = () => {

  const classes = useStyles();
    return(
        <Box className={classes.component}>
         <Card >
           <CardMedia className={classes.image}
              component="img"
                
                image="https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/what-is-mern-stack/Images/The%20MERN%20Stack.jpg"
                alt="mern"
            />
         </Card>
        </Box> 
         
        
    );
}
export default Home;