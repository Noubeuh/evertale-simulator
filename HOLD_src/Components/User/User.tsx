import React, { useState } from 'react';

import { UserInterface } from '../../Interfaces/User.interface';
import { Color } from '../../Interfaces/Color.enum';

import ColoredIcon from '../Svg';
import { SimpleDialog } from '../Dialog';

type UserProps = {
    user: UserInterface;
    deleteUser: (user: UserInterface) => void;
};

const User = ({user, deleteUser}: UserProps) => {
    const [iconHovered, setIconHovered] = useState<boolean>(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        if(value === 'removeUser') deleteUser(user) ;
    };

    let userItemClasses = 'list-item';

    return (
        <li className={user.id === 1 ? 'first-element '+userItemClasses : userItemClasses}>
                <div className='user-list-description-container strong'>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
                <button className='icon-warn-container'
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
                onClick={handleClickOpen}>
                    <ColoredIcon  fill={iconHovered ? Color.danger : Color.white} icon='trash'/>
                </button>
                <SimpleDialog
                    open={open}
                    onClose={handleClose}
                    user={user}
                />
        </li>
    );
};

export default User;