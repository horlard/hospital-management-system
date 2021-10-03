import React from 'react';
import RouterCard from '../components/routerCard';
import CardFilter from '../components/cardFilter';
import Card from '../components/Card';


const Doctors=(props)=> {
    console.log(props);
    
    return (
        <div>
            <RouterCard title='Doctors'/>
            <Card>
                <CardFilter title='Doctors'/>
            </Card>
        </div>
    )
}

export default Doctors;