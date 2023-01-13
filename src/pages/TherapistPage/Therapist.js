import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PreviewUser } from '../../components/Users/PreviewUser';
import { userService } from '../../services/user.service';

export const Therapist = () => {

    const [users, setUsers] = useState();
    // const { loggedInUser } = useSelector(state => state.userModule);
 
    useEffect(() => {
        const run = async () => {
            const users = await userService.getUsers();
            console.log('users:', users);
            setUsers([...users]);
        };

        run()
    }, []);

    return (
        <section>
            {users && users.map((user) => (<PreviewUser user={user} key={user._id} />))}
        </section>
    );
};

