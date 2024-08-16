import Avatar from 'react-avatar';

export default function NotificationModalCard({ name }) {
   return (
      <div className='flex gap-[0.5rem] py-[0.5rem] px-[1rem] border-b border-[#DCDEE4]'>
         <Avatar name={name} size="40" round={true} />
         <div className='text-[0.8rem] flex flex-col gap-[0.2rem]'>
            <h3 className='font-[600]'>
               {name}
            </h3>
            <p className='text-[#696F8C]'>
               Sri Nagesh has booked cricket ground for 12PM - 2PM. Online payment has successfully done.
            </p>
            <p className='text-[#696F8C]'>
               17 min ago
            </p>
         </div>
      </div>
   )
}
