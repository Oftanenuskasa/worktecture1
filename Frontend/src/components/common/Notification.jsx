const Notification = ({ message, type }) => {
    const baseStyles = "fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50";
    const typeStyles = {
      success: "bg-green-500 text-white",
      error: "bg-red-500 text-white",
      warning: "bg-yellow-500 text-white",
      info: "bg-blue-500 text-white"
    };
  
    return (
      <div className={`${baseStyles} ${typeStyles[type]}`}>
        {message}
      </div>
    );
  };
  
  export default Notification;