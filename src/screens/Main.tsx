import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth';


const Main = () => {
   
    const dispatch = useDispatch();

    const handleLogout = () => {
        try{
            dispatch(
                logout()
            )
            window.location.href = '/'
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <Container>
           <div className="mt-4">
             Login Success !! <br/>
            <Button className="btn btn-danger mt-4" onClick={handleLogout}>
                Logout
            </Button>
           </div>
        </Container>
    )
}

export default Main;