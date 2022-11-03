import React from 'react';
import "./CSS/messigelist.css";


const MessigeItem = ({id, name, img}) => {
      return (
            <div className='messigeitem'>
                  <img src={img} alt="photo" />
                  <h4 style={{color: '#050505'}}>{name}</h4>
            </div>
      );
};

export default MessigeItem;