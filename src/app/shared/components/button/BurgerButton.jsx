import React from 'react'

const BurgerButton = ({isOpen ,setIsOpen}) => {
    
    return (
        <div>
            <button className="w-12 h-12 mx-4 flex justify-items-center" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <svg
                className="text-nav-yellow md:text-nav-blue md:h-16 md:w-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            ) : (
              <svg
                className="text-nav-yellow md:text-nav-blue md:h-16 md:w-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            )}
          </button>
        </div>
    )
}

export default BurgerButton
