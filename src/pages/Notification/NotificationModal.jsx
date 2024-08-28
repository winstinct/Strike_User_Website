import { useState } from 'react'
import { Icon } from '@iconify/react';
import NotificationModalCard from './NotificationModalCard';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideNotificationModal } from '../../redux/notificationSlice';

export default function NotificationModal() {
   const [activeButton, setActiveButton] = useState(1);
   const dispatch = useDispatch();

   return (
      <div className=''>
         <div className='flex items-center justify-between py-[1rem] px-[1rem] shadow-md'>
            <div className='flex gap-[0.5rem] items-center'>
               <h1 className='text-[1rem] font-semibold'>
                  Notifications
               </h1>
               <span className='px-[6px] py-[4px] text-[0.9rem] bg-primary text-white font-[500] rounded-full'>
                  15
               </span>
            </div>
            <div className='flex gap-[1rem]'>
               <h4 className='text-[0.8rem] text-primary font-[500]'>
                  Mark all as read
               </h4>
               <Icon icon="tabler:dots-vertical" width="24" height="24" className='text-[#80849D]' />
            </div>
         </div>
         <div className='flex gap-[2rem] px-[2rem] border-b border-[#DCDEE4]'>
            <button onClick={() => setActiveButton(1)}
               className={`text-[1rem] font-semibold py-[1rem] ${activeButton === 1 ? "text-primary border-b-[3px] border-primary" : "text-[#8F8F8F]"}`}
            >
               All
            </button>
            <button onClick={() => setActiveButton(2)}
               className={`text-[1rem] font-semibold py-[1rem] ${activeButton === 2 ? "text-primary border-b-[3px] border-primary" : "text-[#8F8F8F]"}`}
            >
               Today
            </button>
            <button onClick={() => setActiveButton(3)}
               className={`text-[1rem] font-semibold py-[1rem] ${activeButton === 3 ? "text-primary border-b-[3px] border-primary" : "text-[#8F8F8F]"}`}
            >
               Oldest
            </button>
         </div>
         <div>
            <NotificationModalCard name="Sri Nagesh" />
            <NotificationModalCard name="Billal Hossain" />
            <NotificationModalCard name="Manikanta Putta" />
            {/* <NotificationModalCard name={"Madhu Adimulam"} /> */}
         </div>
         <div className='text-[#696F8C] flex items-center justify-center py-[1rem] font-semibold'>
            <NavLink to={"/admin/notifications"}
            onClick={() => dispatch(hideNotificationModal())}
            >
               See All
            </NavLink>
         </div>
      </div>
   )
}
