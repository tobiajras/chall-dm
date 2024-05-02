const HamburguerIcon = ({ className }) => {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      className={` ${className}`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16m-7 6h7'
      ></path>
    </svg>
  );
};

export default HamburguerIcon;
