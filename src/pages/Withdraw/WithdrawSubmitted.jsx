import { Link } from "react-router-dom"
import animatedSubmitImg from "../../assets/animated-success.gif"

export default function WithdrawSubmitted() {
    window.scrollTo({top:0, behavior:'smooth'})
  return (
    <div className='mr-[16.5rem] text-center'>
       <div className="flex justify-center"><img className="w-[150px] h-[150px]" src={animatedSubmitImg} alt="submitted icon" /></div>
        <div className="mb-[2rem] space-y-[0.5rem]">
        <h3 className='text-[1.25rem] font-bold'>Withdraw Request Submitted!</h3>
        <p className="text-[14px]">Withdraw requests will be processed and accepted within a maximum of 5 minutes.</p>
        </div>
        <div 
        style={{boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)"}}
        className='space-y-[0.8rem] border-[1px] border-gray-300 rounded-lg p-3 lg:max-w-[80%] lg:mx-auto'>
            <h3 className='font-bold text-[20px] text-left'>Payment Details</h3>
            <div className='text-[14px] text-gray-500 flex md:flex-row flex-col justify-between items-center font-medium'>
                <p>Coins Requested</p>
                <p>1000</p>
            </div>
            <div className='text-[14px] text-gray-500 flex md:flex-row flex-col justify-between items-center font-medium'>
                <p>Full Name</p>
                <p>Manikanta Putta</p>
            </div>
            <div className='text-[14px] text-gray-500 flex md:flex-row flex-col justify-between items-center font-medium'>
                <p>Crypto Wallet Address</p>
                <p>d28cbd85a4a97</p>
            </div>
            <div className='text-[14px] text-gray-500 flex md:flex-row flex-col justify-between items-center font-medium'>
                <p>Submitted Date and Time</p>
                <p>26/06/2024 - 12:10 PM</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[1.5rem] lg:mx-14">
            <Link to="/withdraw/withdraw-requests-history">
            <button className="submitBtn w-full">View Withdraw Requests</button>
            </Link>
            <Link to="/withdraw/wallet">
            <button className="submitBtn w-full">Back to Wallet</button>
            </Link>
        </div>
    </div>
  )
}
