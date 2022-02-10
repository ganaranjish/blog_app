import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    container:{
       height : 300, 
       margin : 10,
       borderRadius: 10,
       border : '1px solid #d3cede' ,
       alignItems : 'center',
       display : 'flex',
       flexDirection : 'column',
       '& > *': {
        padding: '0 5px 5px 5px'
    }
},
text: {
    color: '#878787',
    fontSize : 12
},
heading :{
    fontSize : 14,
    fontWeight : 600
},
detail:{
    fontSize : 14,
    wordBreak : 'break-word'
}

})

const Post = () =>{
    const classes=useStyle();
    return(
        <Box className = {classes.container}>
            <Typography className={classes.text}>Node JS</Typography>
            <Typography className={classes.heading}>Node JS</Typography>
            <Typography >Author</Typography>
            <Typography className={classes.detail}>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</Typography>
        </Box>
    )
}


 export default Post;