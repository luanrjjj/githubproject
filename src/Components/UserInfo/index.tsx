
import React from 'react';
import {Section,UserInfoStyles} from './styles';
import {useRouteMatch,Link} from 'react-router-dom';

interface UserParams  {
    userData:string;

}




const {params} = useRouteMatch<UserParams>();

 const UserInfo = (userData:any) => (
    <Section>
        {userData && (
            <UserInfoStyles>
                {userData.avatar_url}



            </UserInfoStyles>
        )
                }) 
        





    </Section>

)
export default UserInfo;

