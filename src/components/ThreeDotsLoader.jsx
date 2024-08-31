import { ThreeDots } from "react-loader-spinner";

export default function ThreeDotsLoader() {
  return (
   <div>
     <ThreeDots
      visible={true}
      height="60"
      width="60"
      align="center"
      color="#5500C3"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass=""
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: '10px' // Example padding
      }}
    />
   </div>
  );
}
