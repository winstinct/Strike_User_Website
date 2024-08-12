import { ThreeDots } from "react-loader-spinner";

export default function SubmitBtnLoader() {
  return (
    <div className="bg-gray-500 rounded-full cursor-default w-full flex justify-center items-center h-[45px]">
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#fff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
