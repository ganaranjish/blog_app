import { Box, makeStyles, FormControl, InputBase, Button,TextareaAutosize } from "@material-ui/core";
import { AddCircle as Add, AddCircle } from '@material-ui/icons';
import { useState  } from "react";
import { createPost } from "../../service/api";



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


const initialValues = {
    title: '',
    description : '',
    username : '',
    categories : 'All',
    createDate : new Date()
}


const CreateView = () => {

    const classes=useStyle();
    const [post,setPost] = useState(initialValues);
    const handleChange = (e) =>{
        setPost({ ...post,[e.target.name] : e.target.value })
    }

    

    const savePost = async() => {
        await createPost(post);
    }
    return(
        <Box className={classes.container}>
        <FormControl className={classes.form}>
            <AddCircle fontSize="large" color="action"/>
             <InputBase 
             onChange={(e) => handleChange(e)} 
             placeholder="title" 
             className={classes.textfield}
             name='title'
             />
              <Button onClick={() => savePost()}variant="contained" color="">Post</Button>
        </FormControl>
        <TextareaAutosize
                rowsMin={5}
                placeholder="Share your ideas"
                className={classes.textarea}
                onChange={(e) => handleChange(e)}
                name='description'
         />
        </Box>
    )
}


export default CreateView;