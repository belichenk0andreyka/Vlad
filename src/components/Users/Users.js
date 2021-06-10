import * as React from 'react';
import {deleteUser, getUsers} from "../../helpers/requests";
import ActionsModal from "../ActionsModal";

import './users.css';

const Users = () => {
    const [users, setUsers] = React.useState([]);
    const [isOpenEdit, setIsOpenEdit] = React.useState(false);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);

    React.useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, []);

    const onSubmitEdit = id => console.log(id);
    const onSubmitDelete = id => deleteUser(id).then(() => {
        setUsers(users.filter(user => user.id !== id));
        setIsOpenDelete(false)
    });

    return (
        <div className='users'>
            <div className='users__title'><button>Add new user</button></div>
            <div className='users__table'>
                <div className='table__row table__row_header'>
                    <div className='table__login table__row_item'>Login</div>
                    <div className='table__first_name table__row_item'>First Name</div>
                    <div className='table__last_name table__row_item'>Last Name</div>
                    <div className='table__age table__row_item'>Age</div>
                    <div className='table__role table__row_item'>Role</div>
                    <div className='table__actions table__row_item'>Actions</div>
                </div>
                {users.map(user => (
                    <div className='table__row'>
                        <div className='table__login table__row_item'>{user.login}</div>
                        <div className='table__first_name table__row_item'>{user.firstName}</div>
                        <div className='table__last_name table__row_item'>{user.lastName}</div>
                        <div className='table__age table__row_item'>{user.age}</div>
                        <div className='table__role table__row_item'>{user.role}</div>
                        <div className='table__actions table__row_item'>
                            <ActionsModal
                                id={user.id}
                                btnText='Edit'
                                isOpen={isOpenEdit}
                                onOpen={() => setIsOpenEdit(true)}
                                closeModal={() => setIsOpenEdit(false)}
                                onSubmit={onSubmitEdit}
                            />
                            <ActionsModal
                                id={user.id}
                                btnText='Delete'
                                isOpen={isOpenDelete}
                                onOpen={() => setIsOpenDelete(true)}
                                closeModal={() => setIsOpenDelete(false)}
                                onSubmit={onSubmitDelete}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;