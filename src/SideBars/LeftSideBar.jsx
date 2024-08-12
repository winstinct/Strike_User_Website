import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function LeftSideBar() {
  return (
    <div className='px-3 pt-5 h-[600px] overflow-y-auto'>
      <ul className='space-y-[1.5rem]'>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[1.5rem]' icon="heroicons:user-group" />
            <span>Become an Agent</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            {privateLottery}
            <span>Become a Private Lottery Agent</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[1.5rem]' icon="weui:like-outlined" />
            <span>Wishlist</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[1.5rem]' icon="material-symbols-light:history" />
            <span>Deposit History</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[1.5rem]' icon="weui:setting-outlined" />
            <span>Preferences</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[1.5rem]' icon="ph:question" />
            <span>F.A.Q</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[1.5rem]' icon="fluent:chat-20-regular" />
            <span>Chat Support</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[1.5rem]' icon="lets-icons:group-share-light" />
            <span>Refer & Earn</span>
            </NavLink>
          </li>
      </ul>
    </div>
  )
}
