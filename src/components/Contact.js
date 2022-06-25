// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ data }) => {
    return (
        <>
            <div className='card'>
                <div className='left'>
                    <img src={data.photo} alt='{props.name}'></img>
                </div>   
                <div className='right'>
                    <h4><b>{data.name}</b></h4>
                    <p>{data.phone}</p>
                    <p>{ data.email }</p>
                </div>
            </div>     
        </>
                 
    )
}


export default Contact;