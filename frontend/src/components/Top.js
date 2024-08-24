import React,{useState,useEffect} from 'react'

function Top() {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100); // Adjust the value as needed
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <>
    {isVisible && (
      <div className="top">
        <button onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    )}
    </>
  )
}

export default Top