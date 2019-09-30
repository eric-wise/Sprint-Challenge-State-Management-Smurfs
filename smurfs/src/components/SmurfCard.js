import React from 'react';

const styles = {
    display: 'flex',
    flexDirection: 'column',        
}

const SmurfCard = ({ info }) => {
    return (
        <div sytle={styles}>
            <h1>{info.name}</h1>
            <h2>Age: {info.age}</h2>
            <h2>Height: {info.height}</h2>     
        </div>
    )
}

export default SmurfCard;