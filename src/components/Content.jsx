import React from 'react';
import './content/contentCss/content.css'
import LeftSideContent from './content/LeftSideContent';
import LentContent from './content/LentContent';
import RightSideContent from './content/RightSideContent';

const Content = ({searchValue}) => {
      return (
            <div className='content'>
                  <LeftSideContent />
                  <LentContent  searchValue={searchValue}/>
                  <RightSideContent />
            </div>
      );
};

export default Content;



