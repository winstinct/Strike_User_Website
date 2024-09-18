import { Link } from "react-router-dom"
import notFoundImage from "../../assets/not-found.jpg"
import useTitle from "../../hooks/useTitle"
export default function NotFound() {
  useTitle("Strike - Not Found")
  return (
    <div className="flex flex-col justify-center items-center">
        <img className="md:w-[600px] w-full min-h-[400px]" src={notFoundImage} alt="Not Found Image" />
        <Link to="/">
        <button className="submitBtn w-[200px]">Home</button>
        </Link>
    </div>
  )
}
