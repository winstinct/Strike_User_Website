import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function LeftSideBar() {
  return (
    <div className='px-3 pt-[7rem] w-44 min-h-[100vh] overflow-y-auto fixed left-0 top-0 shadow-2xl border-r-[1px] border-gray-300'>
      <ul className='space-y-[1.5rem] text-[14px]'>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.3rem] hover:text-[#a167ff]">
            <Icon className='text-[1.3rem]' icon="heroicons:user-group" />
            <span>Become an Agent</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <span>Become a Private Lottery Agent</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink className="flex items-center font-medium gap-[0.3rem] hover:text-[#A967FF]">
            <Icon className='text-[1.3rem]' icon="weui:like-outlined" />
            <span>Wishlist</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.3rem] hover:text-[#A967FF]">
            <Icon className='text-[1.3rem]' icon="material-symbols-light:history" />
            <span>Deposit History</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.3rem] hover:text-[#A967FF]">
            <Icon className='text-[1.3rem]' icon="weui:setting-outlined" />
            <span>Preferences</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.3rem] hover:text-[#A967FF]">
            <Icon className='text-[1.3rem]' icon="ph:question" />
            <span>F.A.Q</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.3rem] hover:text-[#A967FF]">
            <Icon className='text-[1.3rem]' icon="fluent:chat-20-regular" />
            <span>Chat Support</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.3rem] hover:text-[#A967FF]">
            <Icon className='text-[1.3rem]' icon="lets-icons:group-share-light" />
            <span>Refer & Earn</span>
            </NavLink>
          </li>
      </ul>
    </div>
  )
}
