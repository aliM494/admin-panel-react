import React from 'react';
import Input from './Controler/Input';
import Switch from './Controler/Switch';
// import Radio from './Controler/Radio';
// import Date from './Controler/Date';
// import File from './Controler/File';

const AuthFormikcontrol = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'switch':
            return <Switch {...props}/>
        // case 'radio':
        //     return <Radio {...props}/>
        // case 'date':
        //     return <Date {...props}/>
        // case 'file':
        //     return <File {...props}/>
        default:
            return null
    }
}

export default AuthFormikcontrol;
