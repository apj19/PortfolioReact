import React from 'react'

// function Test() {
//   return (
//     <div>Test</div>
//   )
// }

// export default Test

import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Test() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex justify-around space-x-1 rounded-xl bg-[#D85C36]  p-1">
          
            <Tab
              
              className={({ selected }) =>
                classNames(
                  ' w-[2.5rem] rounded-[50%] py-2.5 text-sm font-medium leading-5 text-blue-700',
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
                  ' w-[2.5rem] rounded-[50%] py-2.5 text-sm font-medium leading-5 text-blue-700',
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
                  ' w-[2.5rem] rounded-[50%] py-2.5 text-sm font-medium leading-5 text-blue-700',
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
                  ' w-[2.5rem] rounded-[50%] py-2.5 text-sm font-medium leading-5 text-blue-700',
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
