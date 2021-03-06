import * as React from 'react';
import { toast } from "react-toastify";

import {addUser, deleteUser, editUser, getUsers} from "../../helpers/requests";
import ActionsModal from "../ActionsModal";
import Register from "../Register";

import './users.css';

const Users = () => {
    const [users, setUsers] = React.useState([]);
    const [userId, setUserId] = React.useState(null);
    const [userState, setUserState] = React.useState({});
    const [isOpenEdit, setIsOpenEdit] = React.useState(false);
    const [isOpenAdd, setIsOpenAdd] = React.useState(false);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);

    React.useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, []);

    const onSubmitEdit = (id, userData, uniqId) => {
        editUser(userData, id, uniqId).then(data => {
            if (data.id) {
                setUsers(prev => prev.map(item => item.id === data.id ? data : item));
                setIsOpenEdit(false);
                toast.success("Юзер успешно ismenen");
            } else {
                toast.error("рома не доебуйся");
                setIsOpenEdit(false);
                setIsOpenEdit(true);

            }
        });
    };
    const onSubmitDelete = () => deleteUser(userId).then((data) => {
        if (data.status === 200) {
            setUsers(users.filter(user => user.id !== userId));
            setIsOpenDelete(false);
            toast.success("Юзер успешно удален")
            setUserId(null);
        } else {
            toast.error("рома не доебуйся")
        }
    });

    const openEditModal = id => {
        const user = users.find(item => item.id === id);
        setUserId(id);
        setIsOpenEdit(true);
        setUserState(user);
    };

    const openAddUserModal = () => {
        setIsOpenAdd(true);
    };

    const onSubmitAdd = (id, userData, uniqId) => {
        addUser(userData, uniqId).then(data => {
            if (data.id) {
                setUsers(prev => [...prev, data]);
                setIsOpenAdd(false);
                toast.success("Юзер успешно ismenen");
            } else {
                toast.error("рома не доебуйся");
            }
        });
    };

    const openModalDelete = id => {
        setIsOpenDelete(true);
        setUserId(id);
    };

    return (
        <div className='users'>
            <div className='users__title'>
                <ActionsModal
                btnText='Add new user'
                isOpen={isOpenAdd}
                onOpen={openAddUserModal}
                closeModal={() => setIsOpenAdd(false)}
            >
                <Register isAdd onSubmitEditAdd={onSubmitAdd} modalName='Add User' />
            </ActionsModal>
            </div>
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
                    <div className='table__row' key={user.id}>
                        <div className='table__login table__row_item'>{user.login}</div>
                        <div className='table__first_name table__row_item'>{user.firstName}</div>
                        <div className='table__last_name table__row_item'>{user.lastName}</div>
                        <div className='table__age table__row_item'>{user.age}</div>
                        <div className='table__role table__row_item'>{user.role}</div>
                        <div className='table__actions table__row_item'>
                            <ActionsModal
                                btnText='Edit'
                                isOpen={isOpenEdit}
                                onOpen={() => openEditModal(user.id)}
                                closeModal={() => setIsOpenEdit(false)}
                            >
                                <Register isEdit onSubmitEditAdd={onSubmitEdit} id={userId} modalName='Edit User' userProp={userState} />
                            </ActionsModal>
                            <ActionsModal
                                btnText='Delete'
                                isOpen={isOpenDelete}
                                onOpen={() => openModalDelete(user.id)}
                                closeModal={() => setIsOpenDelete(false)}
                            >
                                <div className='modal'>
                                    <h2>Confirm</h2>
                                    <div>Are you sure?</div>
                                    <div className='modal__buttons'>
                                        <button onClick={onSubmitDelete}>Yes</button>
                                        <button onClick={() => setIsOpenDelete(false)}>No</button>
                                    </div>
                                </div>
                            </ActionsModal>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;