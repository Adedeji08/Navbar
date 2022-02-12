import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const Button = () => {
    return <div>
           <Link to='sign up'>
               <button className='btn'>Sign UP</button>
           </Link>
         </div>;
};

export default Button;
