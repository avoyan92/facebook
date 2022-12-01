import React from 'react';
import CenterBox from './Center/CenterBox';
import LeftBox from './LeftSide/LeftBox';
import RightBox from './RigtSide/RightBox';
import './mesingercontent.css'
import { useState } from 'react';
import { usersList } from './../../../API/usersList';

const MessingerPage = () => {
      const [obj, setObj] = useState([usersList[0]])
      
      const changeUser = (arr) => {
            setObj([arr])
      }

      
      
      return (
            <div className='massengercontent'>
                  <LeftBox changeUser={changeUser}/>
                  <CenterBox obj={obj} />
                  <RightBox obj={obj}/>
            </div>
      );
};

export default MessingerPage;