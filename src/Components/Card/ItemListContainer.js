import React, { useEffect, useState } from 'react';
import Card from './Card';
// import 'css'

function CardContainer() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }, [])
    return(
<div className='asd'>
    <card></card>
</div>
    )
}
export default CardContainer