import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../APIs/api";

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },

    thead: {
        '& > *': {
            background: 'linear-gradient(to left top, #88149b, #006cdc, #0097d7, #00b5aa, #82ca87);',
            color: '#FFFFFF',
            fontsize: 20

        }
    },
    row: {
        '& >*': {
            fontsize: 20
        }
    }

})

    // const users = [
    //     {
    //         "name": "MS Dhoni",
    //         "username": "dhoni",
    //         "email": "msdhoni@gmail.com",
    //         "phone": "4563214530",
    //         "id": 1
    //       },
    //       {
    //         "name": "Mohd Shami",
    //         "username": "mohdshami",
    //         "email": "shami@gmail.com",
    //         "phone": "7896547896",
    //         "id": 4
    //       },
    //       {
    //         "name": "KL Rahul",
    //         "username": "klrahul",
    //         "email": "rahul@gmail.com",
    //         "phone": "7458965874",
    //         "id": 5
    //       },
    //       {
    //         "name": "Shikhar Dhawan",
    //         "username": "dhawansikhar",
    //         "email": "dhawan@gmail.com",
    //         "phone": "4569874563",
    //         "id": 6
    //       }
    //     ]

    
    

const AllUsers = () => {

    const classes = useStyles();

    const [users, setUsers] = useState([]);

    useEffect(() => {
            getAllUsers();
    }, [])

    const getAllUsers = async() => {
            const response = await getUsers();
            setUsers(response.data);
    }

    //to write function below to delete user data by id
    const deleteUserData = async(id) => {
            await deleteUser(id);
            getAllUsers();
    } // after wrote this function, we should write api to do delete user operation.

    return(

        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>user name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map( user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight:10}}  component={Link}
                                to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={deleteUserData(user.id)}>
                                        Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        
    );
}
export default AllUsers;