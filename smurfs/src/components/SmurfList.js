import React from 'react';
import SmurfCard from './SmurfCard'

const SmurfList = ({ smurfs, loading }) => {
    if (loading === true ) {
        return <h1>Loading...</h1>
    }
    return (
        <div >
            {smurfs.map(smurf => (
                <SmurfCard key={smurf.id} info={smurf} />
            ))}
        </div>
    )
}

export default SmurfList;