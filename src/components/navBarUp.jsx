import React from 'react';
import logo from '../images/logo.png'
import {Button, MantineProvider} from '@mantine/core'

export function NavBarUp () {
  return (
    <MantineProvider>
      <div className="p-1 h-screen bg-main-color max-w-full container mx-auto flex flex-col justify-between items-center space-x-0">
        <div className="bg-slidebar-up bg-opacity-65 h-12 w-full text-white font-bold text-xl flex flex-row space-x-8">
          <img src={logo} alt="imagen" className='w-12'/>
          <h2>File</h2>
          <h2>Help</h2>
          <div className='w-56'></div>
          <div className='w-64'></div>
          <h2>Ruby Analyzer</h2>
        </div>
        <div className='flex flex-row space-x-8'>
          <Button className='bg-gradient-to-br from-b-gradient-from to-b-gradient-to opacity-45 text-white w-56 p-2 rounded-lg'>Validate</Button>
          <Button className='bg-gradient-to-br from-b-gradient-from to-b-gradient-to opacity-45 text-white w-56 p-2 rounded-lg'>Clean</Button>
        </div>
        <div className='flex flex-row space-x-6 max-w-full max-h-full'>
          <div className='bg-black opacity-40 h-96 w-80'>
            <div className='bg-gradient-to-br from-red-400 to-purple-600 h-10 pt-1 pl-2'>
              <h3 className='text-white font-bold text-xl'>Open files</h3>
            </div>
          </div>
          <div className='bg-black opacity-40 h-96 w-96'>
          <div className='bg-gradient-to-br from-red-400 to-purple-600 h-10 pt-1 pl-2'>
          <h3 className='text-white font-bold text-xl'>Code</h3>
          </div>
          </div>
          <div className='bg-black opacity-40 h-96 w-96'>
          <div className='bg-gradient-to-br from-red-400 to-purple-600 h-10 pt-1 pl-2 '>
            <h3 className='text-white font-bold text-xl'>Validation</h3>
          </div>
          </div>
        </div>
      </div>
      </MantineProvider>
  );
};


