
import Post from "./Post";
import { Grid } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';

const Posts = () => {
    let posts = [1,2,3,4,5,6]
    return(
        posts.map(post =>(
        <Grid item lg={3} sm={4} xs={12}>
        <Link to={'/details'} style={{textDecoration:'none', color :'inherit'}}>
        <Post/>
        </Link>
        </Grid>
        ))
        

    )

}


export default Posts;