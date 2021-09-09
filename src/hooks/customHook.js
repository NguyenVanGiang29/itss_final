import { useState } from 'react'

function CustomHook(){
    const [newname, setNewname] = useState('');


    const [user, setUser] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);

    var newArray = user.join(', ');

    const handleChange = (event) => {
        setNewname(event.target.value);
    }

    const handleDeletename = (name) => {
        setUser(user.filter((x) => x !== name));
    }
    return [newname, newArray, handleChange, handleDeletename];
}

export default CustomHook
