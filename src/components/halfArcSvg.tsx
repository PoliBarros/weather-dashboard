const HalfArcSvg = ({ className = '', strokeWidth = 1, strokeColor = 'currentColor' }) => {
  return (
    <div className={`w-[90%] h-[100px] overflow-hidden ${className}`}>
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0 50 Q50 0 100 50" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} />
      </svg>
    </div>
  );
};

export default HalfArcSvg;
