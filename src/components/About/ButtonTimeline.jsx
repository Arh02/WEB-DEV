import React from 'react';


function ButtonTimeline() {
  const handleScroll = () => {
    window.scrollTo({
      top: 2500, 
      behavior: 'smooth' 
    });
  };

  return (
    <div>
      <button className='btn btn-primary btn-time' onClick={handleScroll}>
        Checkout My TimeLine
      </button>
    </div>
  );
}

export default ButtonTimeline;