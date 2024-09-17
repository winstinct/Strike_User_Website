export const setActiveStyle = ({ isActive }) => ({
  backgroundImage: isActive ? "linear-gradient(#A967FF, #5500C3)" : "",
  color: isActive ? "#fff" : "",
});