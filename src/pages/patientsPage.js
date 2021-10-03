import React from 'react';
import RouterCard from '../components/routerCard';
import Card from '../components/Card'
import CardFilters from '../components/cardFilter'



const Patients=()=> {
    return (
        <div>
            <RouterCard title='Patients'/>
            <Card>
                <CardFilters title='Patients'/>
            </Card>
        </div>
    )
}

export default Patients;