/* eslint-disable jsx-a11y/alt-text */
import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return <div>
                <Button to={'/'}>Back to Home Page</Button>
                  
                  <img height={950} width={'auto'} src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png" />
            <div id="info">
                {/* <h3>This page could not be found</h3> */}
                            </div>

  </div>;
};

export default PageNotFound;
