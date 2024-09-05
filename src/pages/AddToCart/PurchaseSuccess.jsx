import { Link } from "react-router-dom"
import purchaseObject from "../../assets/purchase-object.svg"

export default function PurchaseSuccess() {
  return (
    <div className='gradientBg flex flex-col items-center justify-end gap-5 h-[500px] relative p-2'>
        <img className="absolute top-0" src={purchaseObject} alt="" />
        <div className="bg-[#25BF17] rounded-full h-[100px] w-[100px]"></div>
        <div className="text-center">
        <h3 className="text-white font-bold text-[1.5rem]">Purchase Successful!</h3>
        <p className="text-white text-[14px]">Order receipt has been sent to your email</p>
        </div>
        
        <div className="flex flex-col items-center gap-4 mb-10 w-full md:px-0 px-[1rem]">
        <Link to="/tickets">
        <button className="text-[#A967FF] rounded-full py-[0.6rem] bg-white md:w-[300px] w-full">View my tickets</button>
        </Link>
        <Link to="/">
        <button className="text-[#A967FF] rounded-full py-[0.6rem] bg-white md:w-[300px] w-full">Home</button>
        </Link>
        </div>
    </div>
  )
}
