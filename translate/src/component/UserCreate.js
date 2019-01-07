import React from 'react';
import Field from './Field';
import Button from './Button';

const UserCreate = (props) => {
    return (
        <div className="ui form">
            <Field />
            <Button langBtn={props} />
        </div>
    )
}

export default UserCreate;
