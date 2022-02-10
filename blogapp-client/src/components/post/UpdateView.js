import { Box, makeStyles, FormControl, InputBase, Button,TextareaAutosize } from "@material-ui/core";
import { AddCircle as Add, AddCircle } from '@material-ui/icons';

const useStyle=makeStyles({
    container :{
        padding : '0 100px'
    },
    form:{
        display : 'flex',
        flexDirection : 'row',
        marginTop :  10  
    },
    textfield :{
        flex :1,
        margin :'0 30px',
        fontSize : 25
    },
    textarea:{
        width:'100%',
        marginTop :50,
        border :'none',
        fontSize : 18 
    }
})

const UpdateView = () => {
    const classes=useStyle();
    return(
        <Box className={classes.container}>
        <FormControl className={classes.form}>
            <AddCircle fontSize="large" color="action"/>
             <InputBase placeholder="title" className={classes.textfield}/>
              <Button variant="contained" color="">Update</Button>
        </FormControl>
        <TextareaAutosize
                rowsMin={5}
                placeholder="Share your ideas"
                className={classes.textarea}
         
         />
        </Box>
    )
}


export default UpdateView;