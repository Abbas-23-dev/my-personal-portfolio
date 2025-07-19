const HeartbeatButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-orange-500 text-white rounded-full font-semibold flex items-center justify-center space-x-2 animate-pulse transition-transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default HeartbeatButton;
