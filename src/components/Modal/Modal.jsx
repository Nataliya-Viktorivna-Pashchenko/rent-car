import React, { useEffect, useState } from 'react';
import { StyledModal } from './Modal.styled';
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

        <img className='imgModal' src= {modalData.img} alt={modalData.make}  />
           
        
        <div className='itemStyleYear'>
      <span >{modalData.make} </span>
      <span className='modelStyle'>{modalData.model}, </span>
          <span>{modalData.year}</span>
          </div>
        
      
      <div className='itemStyleDiscr'>
          <span >{modalData.address} | </span>
          <span >Id: {modalData.id} | </span>
          <span >Year: {modalData.year} | </span>
          <span >Type: {modalData.type}</span>
        </div>
        
        <div className='itemStyleDiscr' >
        <span >FuelConsumption: {modalData.fuelConsumption} | </span>
        <span >EngineSize: {modalData.engineSize}</span>
        </div>

        <div className='discrStyle' >
        <span >{modalData.description}</span>
        </div>

        <div className='titleDiscr'>Accessories and functionalities:</div>
        
        <div className='itemStyleDiscr'>
          <span>{modalData.accessories[0]} | </span>
          <span>{modalData.accessories[1]} | </span>
          <span>{modalData.accessories[2]} </span>
        </div>
        <div className='itemStyle_Discr'>
          <span>{modalData.functionalities[0]} | </span>
          <span>{modalData.functionalities[1]} | </span>
          <span>{modalData.functionalities[2]}</span>
        </div>

        <div className='titleDiscr'>Rental Conditions: </div>
        <div className='rental_Conditional'>
        <span className='rentalConditional'>Minimum age : <span className='modelStyle'>25</span></span>
        <span className='rentalConditional'>Valid driver’s license</span>
        </div>

        <div className='rental_Conditional'>
          <span className='rentalConditional'>Security deposite required </span>
        <span className='rentalConditional'>Mileage: <span className='modelStyle'>{modalData.mileage.toLocaleString('en-CA')}</span></span>
          <span className='rentalConditional'>Price: <span className='modelStyle'>{modalData.rentalPrice}</span></span>
          </div>
<br className='a'/>      
          {/* <button className='btnLeanMore' href="tel:+380730000000">
            Rental car
        </button>  */}
        {/* <div>
          <a className='btnRental' href="tel:+380730000000">Rental car</a>
        </div> */}
        <a className='btn_Rental' href="tel:+380730000000">Rental car</a>     
        
      </div>
    </StyledModal>
  );
};

export default Modal;


{/* <img className='img' src= {img} alt={make}  />
      <div className='itemStylePrice'>
        <div className='itemStyleYear'>
      <p >{make}</p>
      <span >{model},</span>
          <p>{year}</p>
          </div>
        <p >{rentalPrice}</p>
      </div>
      <div className='itemStyleDiscr'>
      <p >{address}</p>
      <p >{rentalCompany}</p>
        <p >{accessories[0]}</p>
      </div>
      <div className='itemStyleDiscr' >
      <p >{type}</p>
      <p >{mileage}</p>
        <p >{functionalities[0]}</p>
      </div> */}
