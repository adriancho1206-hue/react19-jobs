const Card = ({ children, bg = 'bg-white' }) => {
  return (
    <div className={`${bg} rounded-xl p-6 shadow-md`}>
      {children}
    </div>
  );
};

export default Card;