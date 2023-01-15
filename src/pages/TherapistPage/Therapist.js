import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from '../../components/GlobalCmps/Chart';
import { PreviewUser } from '../../components/Users/PreviewUser';
import { userService } from '../../services/user.service';

export const Therapist = () => {

    const [users, setUsers] = useState();
    const [reports, setReports] = useState();
    // const { loggedInUser } = useSelector(state => state.userModule);

    useEffect(() => {
        const run = async () => {
            const { users, reports } = await userService.getUsersAndReports();
            setUsers([...users]);
            setReports([...reports]);
        };

        run();
    }, []);

    return (
        <>
            {users && <section>
                {`Users Count: ${users.length}`}
                {users.map((user) => (<PreviewUser user={user} key={user._id} />))}
            </section>}

            {reports && users && <section>
                <Chart reports={reports} users={users} />
            </section>}
        </>
    );
};

