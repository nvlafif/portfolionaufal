import { useEffect, useState } from 'react';

const PopupSkills = ({ isOpen, onClose, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Tunggu 10ms supaya class CSS sempat masuk sebelum jadi opacity-100
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center
        backdrop-blur-md bg-black/50
        transition-opacity duration-300 ease-out
        ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 dark:shadow-[0px_0px_30px_rgba(0,188,255,0.7)] p-6 rounded-[2rem] shadow-lg relative w-[300px] h-auto sm:w-[400px] md:w-[600px] md:h-[300px] xl:w-[800px] xl:h-[450px] text-center flex flex-col justify-center transform transition duration-300 scale-100"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 dark:text-white text-gray-500 hover:text-blue-500 dark:hover:text-[#00BCFF] text-xl p-1 md:p-2"
        >
          <i className="ri-close-line"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopupSkills;
