import React, { useEffect, useState } from 'react';
import { StyledModal } from './Styled';
import { GrClose } from "react-icons/gr";

// import { StyledModal } from './Styled';


const Modal = ({ modalData, closeModal }) => {
//   const [counter, setCounter] = useState(1);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

//   useEffect(() => {
//     console.log('Product counter value: ' + counter);
//   }, [counter]);

//   const handleIncrementProduct = () => {
//     setCounter(prevState => prevState + 1);
//     // setCounter(counter + 1);
//   };

  const handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  // const CallButton = ()  => {
  // const phoneNumber = '+380730000000';

  // const handleCall = () => {
  //   window.location.href = "tel:'+380730000000'";
  // };

//   return (
//     <button onClick={handleCall}>Позвонить</button>
//   );
// }


  return (
    <StyledModal onClick={handleOverayClick}>
      <div className="modal">
        <button onClick={closeModal} className="closeBtn">
        <GrClose />
        </button>
        
          <h3>address: {modalData.address}</h3>
          <p>rentalCompany: {modalData.rentalCompany}</p>
          <p>rentalPrice: {modalData.rentalPrice}</p>
          {/* <button onClick={handleCall}>
            Rental car
        </button> */}
        {/* onClick={handleIncrementProduct} */}
       
      </div>
    </StyledModal>
  );
};

export default Modal;