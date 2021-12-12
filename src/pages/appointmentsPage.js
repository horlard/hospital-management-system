import React from 'react';
import RouterCard from '../components/routerCard';
import Card from '../components/Card'
import CardFilters from '../components/cardFilter'



const Appointments=()=> {
    return (
        <div>
            <RouterCard title='Appointments'/>
            <Card>
                <CardFilters title='Appointments'/>
            </Card>
        </div>
    )
}

export default Appointments;