import React from 'react';
import { Tab } from '@headlessui/react';


function MobileNavBar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
    
  return (
    <div className='md:hidden fixed bottom-0 h-[50px] w-full bg-[#D85C36] '>
    
    <Tab.Group>
        <Tab.List className="flex justify-around space-x-1 rounded-xl bg-[#D85C36]  p-1">
          
            <Tab
              
              className={({ selected }) =>
                classNames(
                  ' w-[2.5rem] rounded-[50%] py-2.5 text-sm font-medium leading-5  transition duration-300 ease-in-out',
                  'ring-white ring-opacity-60 ring-offset-2 focus:outline-none ',
                  selected
                    ? '-translate-y-4 bg-[#D85C36] scale-125 text-white '
                    : 'text-slate-200 '
                )
              }
            >
              <i className="fa-solid fa-house"></i>
            </Tab>
            <Tab
              
              className={({ selected }) =>
                classNames(
                  ' w-[2.5rem] rounded-[50%] py-2.5 text-sm font-medium leading-5  transition duration-300 ease-in-out',
                  'ring-white ring-opacity-60 ring-offset-2 focus:outline-none ',
                  selected
                    ? '-translate-y-4 bg-[#D85C36] scale-125 text-white '
                    : 'text-slate-200 '
                )
              }
            >
              <i className="fa-regular fa-address-book"></i>
            </Tab>
            <Tab
              
              className={({ selected }) =>
                classNames(
                  ' w-[2.5rem] rounded-[50%] py-2.5 text-sm font-medium leading-5 transition duration-300 ease-in-out',
                  'ring-white ring-opacity-60 ring-offset-2 focus:outline-none ',
                  selected
                    ? '-translate-y-4 bg-[#D85C36] scale-125 text-white '
                    : 'text-slate-200 '
                )
              }
            >
              <i className="fa-regular fa-lightbulb"></i>
            </Tab>
            <Tab
              
              className={({ selected }) =>
                classNames(
                  ' w-[2.5rem] rounded-[50%] py-2.5 text-sm font-medium leading-5 transition duration-300 ease-in-out',
                  'ring-white ring-opacity-60 ring-offset-2 focus:outline-none ',
                  selected
                    ? '-translate-y-4 bg-[#D85C36] scale-125 text-white '
                    : 'text-slate-200 '
                )
              }
            >
              <i className="fa-regular fa-envelope"></i>
            </Tab>
        
        </Tab.List>
        
    </Tab.Group>
    
    
    
   
    
    </div>
  )
}

export default MobileNavBar