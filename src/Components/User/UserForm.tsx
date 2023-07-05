import React, { useState } from 'react';

import ColoredIcon from './../../Components/Svg';
import { AddUserForm } from '../../Interfaces/User.interface';
import { Color } from '../../Interfaces/Color.enum';

const UserForm = (props: AddUserForm) => {
    const { addUser } = props;
    const [error, setError] = useState<string>(''); // if not email for example
    const [email, setEmail] = useState<string>('');
    const [iconHovered, setIconHovered] = useState<boolean>(false);

    function handleSubmit(e: any) {
        e.preventDefault();
        email !== '' ? addUser(email) : setError('Veuillez saisir une adresse email valide');
        setEmail('');        
    }

    function handleInputChange(e: any) {
        setEmail(e.target.value);
    }

    return(
        <section className='w-100'>
            <form onSubmit={handleSubmit}>
                <div className='list-item no-border mr-0 mr-sm-2'>
                    <label>
                        <input type='email' value={email} placeholder='prenom.nom@societe.fr' onChange={handleInputChange}/>
                    </label>
                    <button className='icon-success-container'
                    onMouseEnter={() => setIconHovered(true)}
                    onMouseLeave={() => setIconHovered(false)}>
                            <ColoredIcon  fill={iconHovered ? Color.success : Color.white} icon='plus'/>
                    </button>
                </div>
            </form>
          </section>
    );
}

export default UserForm;