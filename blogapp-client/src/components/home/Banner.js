
import { makeStyles, Box } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://www.kivodaily.com/wp-content/uploads/2019/10/zz1-3.jpg'}) center/60% repeat-x #000` ,
        height: '30vh'
    }
})



const Banner = () => {
    const url = 'https://www.kivodaily.com/wp-content/uploads/2019/10/zz1-3.jpg';
    return (
        <img src={url} alt="banner"/>
        )
    }
    
    export default Banner;