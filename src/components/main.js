import React from 'react';
import '../styles/main.css';

const Main = (props) => {
    const {users} = props;

    React.useEffect(() => {
        users.map((user) => console.log(user));
    }, [users])

    return (
        <header className='header__App wrapper'>
            <h1 className='header__title'>Список Users</h1>
            <nav className='list' if={users[0]}>
                {users.map((user,index) => 
                 <div className='list__element' key={index}>{user.select}.{user.lastName} {user.firstName} {user.email}</div>
                )}
            </nav> 
            
        </header>
    );
}


export default Main;

