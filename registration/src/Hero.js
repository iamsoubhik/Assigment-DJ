import React from 'react';
import Input from './Input';
import List from './List';

const Hero = ({handleLogout}) => {
    return (
        <section className="hero">
          <nav>
              <button onClick={handleLogout}>Logout</button>
              <Input/> 
              <List/>
          </nav>
      </section>
    )
}

export default Hero;
