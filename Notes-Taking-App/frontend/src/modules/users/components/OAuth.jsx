import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { OAuthWithGoogle } from '../repository/OAuth';
import { useNavigate } from 'react-router';
export const OAuth =()=>{
    const navigate = useNavigate();
    const googleOAuth =async ()=>{
        try{
            const user = await OAuthWithGoogle();
            if(user){
                navigate('/dashboard', {state:{'username':user.displayName}});
                console.log("User is ",user);
            }
            else{
                console.log("Some problem in user fetch");
            }
        }
        catch(err){
            console.log("Some problem in user fetch",err);
        }
        
    }
    return (<Button onClick={googleOAuth} variant="contained"><VpnKeyIcon/>&nbsp;Login with Google</Button>)
}