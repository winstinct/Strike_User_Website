import { NavLink } from "react-router-dom";

export default function MobileNavBar() {
  return (
    <div
      style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.20)" }}
      className="md:hidden block rounded-[20px] mt-[4rem] w-full"
    >
      <div className="grid grid-cols-5 relative">
        <NavLink to="/">
          {({ isActive }) => (
            <div
              className={`flex flex-col items-center justify-center cursor-pointer gap-1 rounded-[20px] px-1 py-3 ${
                isActive ? "gradientBg text-white" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isActive ? "currentColor" : "none"}
              >
                <path
                  d="M5 12.7595C5 11.4018 5 10.7229 5.27446 10.1262C5.54892 9.52943 6.06437 9.08763 7.09525 8.20401L8.09525 7.34687C9.95857 5.74974 10.8902 4.95117 12 4.95117C13.1098 4.95117 14.0414 5.74974 15.9047 7.34687L16.9047 8.20401C17.9356 9.08763 18.4511 9.52943 18.7255 10.1262C19 10.7229 19 11.4018 19 12.7595V16.9999C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 20.9999 16.8856 20.9999 15 20.9999H9C7.11438 20.9999 6.17157 20.9999 5.58579 20.4142C5 19.8284 5 18.8856 5 16.9999V12.7595Z"
                  stroke="currentColor"
                />
                <path
                  d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
                  stroke="#222222"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[12px]">Home</p>
            </div>
          )}
        </NavLink>

        <NavLink to="/offers">
          {({ isActive }) => (
            <div
              className={`flex flex-col items-center justify-center cursor-pointer gap-1 rounded-[20px] px-1 py-3 ${
                isActive ? "gradientBg text-white" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isActive ? "currentColor" : "none"}
              >
                <path
                  d="M3 8.5C3 7.10218 3 6.40326 3.22836 5.85195C3.53284 5.11687 4.11687 4.53284 4.85195 4.22836C5.40326 4 6.10218 4 7.5 4H16.5C17.8978 4 18.5967 4 19.1481 4.22836C19.8831 4.53284 20.4672 5.11687 20.7716 5.85195C21 6.40326 21 7.10218 21 8.5V9.25C21 9.66421 20.6642 10 20.25 10H20C18.8954 10 18 10.8954 18 12V12C18 13.1046 18.8954 14 20 14H20.25C20.6642 14 21 14.3358 21 14.75V15.5C21 16.8978 21 17.5967 20.7716 18.1481C20.4672 18.8831 19.8831 19.4672 19.1481 19.7716C18.5967 20 17.8978 20 16.5 20H7.5C6.10218 20 5.40326 20 4.85195 19.7716C4.11687 19.4672 3.53284 18.8831 3.22836 18.1481C3 17.5967 3 16.8978 3 15.5V14.75C3 14.3358 3.33579 14 3.75 14H4C5.10457 14 6 13.1046 6 12V12C6 10.8954 5.10457 10 4 10H3.75C3.33579 10 3 9.66421 3 9.25V8.5Z"
                  stroke="currentColor"
                />
                <path
                  d="M11.5568 10.6885C11.7249 10.2536 11.809 10.0361 11.9455 10.0059C11.9814 9.99802 12.0186 9.99802 12.0545 10.0059C12.191 10.0361 12.2751 10.2536 12.4432 10.6885C12.5389 10.9359 12.5867 11.0596 12.6761 11.1437C12.7012 11.1673 12.7284 11.1883 12.7574 11.2065C12.8608 11.2711 12.9899 11.2831 13.248 11.3071C13.685 11.3477 13.9035 11.368 13.9702 11.4973C13.984 11.5241 13.9934 11.5531 13.998 11.5831C14.0201 11.7279 13.8595 11.8796 13.5383 12.1829L13.449 12.2671C13.2989 12.4089 13.2238 12.4798 13.1803 12.5683C13.1543 12.6213 13.1368 12.6785 13.1286 12.7375C13.115 12.8358 13.137 12.9386 13.1809 13.1443L13.1967 13.2178C13.2755 13.5867 13.315 13.7712 13.2657 13.8618C13.2215 13.9433 13.1401 13.9954 13.0501 13.9999C12.9499 14.0048 12.8088 13.8855 12.5265 13.6468C12.3406 13.4895 12.2476 13.4109 12.1443 13.3802C12.05 13.3521 11.95 13.3521 11.8557 13.3802C11.7524 13.4109 11.6594 13.4895 11.4735 13.6468C11.1912 13.8855 11.0501 14.0048 10.9499 13.9999C10.8599 13.9954 10.7785 13.9433 10.7343 13.8618C10.685 13.7712 10.7245 13.5867 10.8033 13.2178L10.8191 13.1443C10.863 12.9386 10.885 12.8358 10.8714 12.7375C10.8632 12.6785 10.8457 12.6213 10.8197 12.5683C10.7762 12.4798 10.7011 12.4089 10.551 12.2671L10.4617 12.1829C10.1405 11.8796 9.97989 11.7279 10.002 11.5831C10.0066 11.5531 10.016 11.5241 10.0298 11.4973C10.0965 11.368 10.315 11.3477 10.752 11.3071C11.0101 11.2831 11.1392 11.2711 11.2426 11.2065C11.2716 11.1883 11.2988 11.1673 11.3239 11.1437C11.4133 11.0596 11.4611 10.9359 11.5568 10.6885Z"
                  fill="none"
                  stroke="#222222"
                />
              </svg>
              <p className="text-[12px]">Offers</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/wallet">
          {({ isActive }) => (
            <div
              style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.20)" }}
              className={`flex bg-white relative border-b-[2px] border-b-gray-500 h-[50px] w-[50px] top-[-1.8rem] left-[0.8rem] flex-col items-center justify-center cursor-pointer gap-1 rounded-[50px]  ${
                isActive ? "gradientBg text-white" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.00001 6.5V6.5C3.00001 5.11929 4.1193 4 5.50001 4L19.2857 4C19.4852 4 19.585 4 19.6651 4.02806C19.8088 4.07831 19.9217 4.19124 19.9719 4.33486C20 4.41505 20 4.51479 20 4.71429V4.71429C20 5.91124 20 6.50972 19.8317 6.99084C19.5301 7.85258 18.8526 8.53011 17.9908 8.83165C17.5097 9 16.9112 9 15.7143 9L15 9M3.00001 6.5V6.5C3.00001 7.88071 4.11929 9 5.50001 9L19 9C19.9428 9 20.4142 9 20.7071 9.29289C21 9.58579 21 10.0572 21 11L21 13M3.00001 6.5L3.00001 17C3.00001 18.8856 3.00001 19.8284 3.58579 20.4142C4.17158 21 5.11439 21 7.00001 21L19 21C19.9428 21 20.4142 21 20.7071 20.7071C21 20.4142 21 19.9428 21 19L21 17M21 17H17C16.0572 17 15.5858 17 15.2929 16.7071C15 16.4142 15 15.9428 15 15V15C15 14.0572 15 13.5858 15.2929 13.2929C15.5858 13 16.0572 13 17 13H21M21 17L21 13"
                  stroke={isActive ? 'currentColor' : '#222222'}
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          )}
        </NavLink>
        <NavLink to="/tickets">
          {({ isActive }) => (
            <div
              className={`flex flex-col items-center justify-center cursor-pointer gap-1 rounded-[20px] px-1 py-3 ${
                isActive ? "gradientBg text-white" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isActive ? "currentColor" : "none"}
              >
                <path
                  d="M18 21V3L15 5L12 3L9 5L6 3V21L9 19.5L12 21L15 19.5L18 21Z"
                  stroke={isActive ? "currentColor" : "#222222"}
                  strokeLinejoin="round"
                />
                <path d="M10 9H14" stroke="#222222" strokeLinecap="round" />
                <path d="M10 15H14" stroke="#222222" strokeLinecap="round" />
                <path d="M10 12H14" stroke="#222222" strokeLinecap="round" />
              </svg>
              <p className="text-[12px]">Tickets</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/menu">
          {({ isActive }) => (
            <div
              className={`flex flex-col items-center justify-center cursor-pointer gap-1 rounded-[20px] px-1 py-3 ${
                isActive ? "gradientBg text-white" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 7H19"
                  stroke={isActive ? 'currentColor' : '#222222'}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 12H19"
                  stroke={isActive ? 'currentColor' : '#222222'}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 17H19"
                  stroke={isActive ? 'currentColor' : '#222222'}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-[12px]">Menu</p>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
}
