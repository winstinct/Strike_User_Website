import React from 'react'
import { NavLink } from 'react-router-dom'
import publicAgenIcon from "../assets/public-agent.svg"
import privateAgenIcon from "../assets/private-agent.svg"
import wishList from "../assets/private-agent.svg"
import depositHistory from "../assets/deposit-history.svg"
import setting from "../assets/setting.svg"
import question from "../assets/question.svg"
import chatSupport from "../assets/chat-support.svg"
import referAndEarn from "../assets/refer-earn.svg"
import { Icon } from '@iconify/react/dist/iconify.js'

const privateLottery = <p>
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 25 24" fill="none">
  <path d="M14.5 7.6875C14.5 7.35833 14.5 7.19375 14.5289 7.05718C14.6381 6.54123 15.0412 6.13814 15.5572 6.02891C15.6937 6 15.8583 6 16.1875 6H20.8125C21.1417 6 21.3063 6 21.4428 6.02891C21.9588 6.13814 22.3619 6.54123 22.4711 7.05718C22.5 7.19375 22.5 7.35833 22.5 7.6875V7.91667C22.5 8.10076 22.3508 8.25 22.1667 8.25H21.9167C21.5025 8.25 21.1667 8.58579 21.1667 9V9C21.1667 9.41421 21.5025 9.75 21.9167 9.75H22.1667C22.3508 9.75 22.5 9.89924 22.5 10.0833V10.3125C22.5 10.6417 22.5 10.8063 22.4711 10.9428C22.3619 11.4588 21.9588 11.8619 21.4428 11.9711C21.3063 12 21.1417 12 20.8125 12H16.1875C15.8583 12 15.6937 12 15.5572 11.9711C15.0412 11.8619 14.6381 11.4588 14.5289 10.9428C14.5 10.8063 14.5 10.6417 14.5 10.3125V10.0833C14.5 9.89924 14.6492 9.75 14.8333 9.75H15.0833C15.4975 9.75 15.8333 9.41421 15.8333 9V9C15.8333 8.58579 15.4975 8.25 15.0833 8.25H14.8333C14.6492 8.25 14.5 8.10076 14.5 7.91667V7.6875Z" stroke="#1A1A1A" stroke-width="0.8"/>
  <path d="M18.3013 8.50845C18.376 8.34533 18.4134 8.26378 18.4741 8.25247C18.49 8.2495 18.5065 8.2495 18.5225 8.25247C18.5832 8.26378 18.6205 8.34533 18.6953 8.50845C18.7378 8.60121 18.759 8.64759 18.7988 8.67914C18.8099 8.68799 18.822 8.69587 18.8349 8.70267C18.8809 8.72692 18.9382 8.73142 19.0529 8.74041C19.2471 8.75564 19.3443 8.76326 19.3739 8.81174C19.38 8.82178 19.3842 8.83265 19.3863 8.8439C19.3961 8.89822 19.3247 8.95508 19.1819 9.06882L19.1423 9.1004C19.0755 9.15358 19.0422 9.18017 19.0229 9.21335C19.0113 9.23325 19.0035 9.25468 18.9999 9.27679C18.9938 9.31365 19.0036 9.35222 19.0231 9.42936L19.0301 9.45692C19.0652 9.59526 19.0827 9.66443 19.0608 9.69843C19.0412 9.72896 19.005 9.74852 18.965 9.75019C18.9205 9.75205 18.8577 9.70729 18.7323 9.61778C18.6496 9.55881 18.6083 9.52932 18.5624 9.5178C18.5205 9.50728 18.476 9.50728 18.4341 9.5178C18.3882 9.52932 18.3469 9.55881 18.2643 9.61778C18.1388 9.70729 18.0761 9.75205 18.0316 9.75019C17.9916 9.74852 17.9554 9.72896 17.9357 9.69843C17.9138 9.66443 17.9314 9.59526 17.9664 9.45692L17.9734 9.42936C17.9929 9.35222 18.0027 9.31365 17.9967 9.27679C17.993 9.25468 17.9853 9.23325 17.9737 9.21335C17.9544 9.18017 17.921 9.15358 17.8542 9.1004L17.8146 9.06882C17.6718 8.95508 17.6004 8.89822 17.6103 8.8439C17.6123 8.83265 17.6165 8.82178 17.6226 8.81174C17.6523 8.76326 17.7494 8.75564 17.9436 8.74041C18.0583 8.73142 18.1157 8.72692 18.1616 8.70267C18.1745 8.69587 18.1866 8.68799 18.1978 8.67914C18.2375 8.64759 18.2588 8.60121 18.3013 8.50845Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="0.8"/>
  <circle cx="8.30649" cy="10.0968" r="2.59677" stroke="#222222" stroke-linecap="round"/>
  <path d="M2.58835 17.8727C2.96325 15.4716 5.46312 14.3547 7.89339 14.3547H8.71952C11.1498 14.3547 13.6497 15.4716 14.0246 17.8727C14.0313 17.9158 14.0377 17.9592 14.0437 18.0029C14.1193 18.5499 13.6652 18.9999 13.1129 18.9999H3.5C2.94771 18.9999 2.49355 18.5499 2.5692 18.0029C2.57523 17.9592 2.58162 17.9158 2.58835 17.8727Z" stroke="#222222" stroke-linecap="round"/>
</svg>
</p>

export default function LeftSideBar() {
  return (
    <div className='px-3 pt-5 h-[600px] overflow-y-auto'>
      <ul className='space-y-[1.5rem]'>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[2rem]' icon="heroicons:user-group" />
            <span>Become an Agent</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            {/* <img src={privateAgenIcon} alt="" /> */}
            {privateLottery}
            <span>Become a Private Lottery Agent</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[2rem]' icon="weui:like-outlined" />
            <span>Wishlist</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[2rem]' icon="material-symbols-light:history" />
            <span>Deposit History</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[2rem]' icon="weui:setting-outlined" />
            <span>Preferences</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[2rem]' icon="ph:question" />
            <span>F.A.Q</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[2rem]' icon="fluent:chat-20-regular" />
            <span>Chat Support</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <Icon className='text-[2rem]' icon="lets-icons:group-share-light" />
            <span>Refer & Earn</span>
            </NavLink>
          </li>
      </ul>
    </div>
  )
}
