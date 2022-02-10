import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core'; 
import { grey } from '@material-ui/core/colors';
import { categories } from '../../constants/Data';
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    create : {
        margin:20,
        background:'grey',
        color:'white',
        width:'86%'
    },
    link:{
        textDecoration :'none',
        color : 'inherit'

    }

    })

const Categories = () => {
    const classes = useStyle();
    return(
        <>
       <Link to = '/create' className={classes.link}><Button variant="contained" className={classes.create}>Create Blog</Button></Link>
     <Table className={classes.table}>
         <TableHead>
             <TableRow>
                 <TableCell>Articles</TableCell>
             </TableRow>
         </TableHead>
         <TableBody>
         {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    {category}
                                </TableCell>
                            </TableRow>
                        ))
                    }
         </TableBody>
     </Table>
     </>
   
        )
}

export default Categories;
