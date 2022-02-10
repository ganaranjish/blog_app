import { Box, makeStyles, Typography } from "@material-ui/core";
import { Delete, Edit } from '@material-ui/icons';
import { Link } from "react-router-dom";

const useStyle=makeStyles({
    container :{
        padding : '0 100px'
    },
    icons:{
      float : 'right '
    },
    icon:{
        margin: 5,
        border : '1px solid #878787',
        padding : 5,
        borderRadius :10,

    },
    heading : {
        fontSize : 35,
        fontWeight : 600,
        textAlign : 'center',
        margin : '50px 0 10px 0'
    },
    subheading:{
        color:'#878787',
        display : 'flex',
        margin : '20px 0'
    }

})

const Detailview = () => {
    const classes = useStyle();
    return(
        <Box className={classes.container}>
          <Box className={classes.icons}>
              <Link to ='/update'><Edit className={classes.icon}/></Link>
              <Delete className= {classes.icon}/>
          </Box>
          <Typography className={classes.heading}>Title</Typography>
          <Box className={classes.subheading}>
              <Typography>Author : </Typography>
              <Typography style={{marginLeft: 'auto'}}>Date : </Typography>
          </Box>
          <Typography>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</Typography>
        </Box>
    )
}

export default Detailview;