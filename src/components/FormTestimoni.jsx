import { useState, useRef, useEffect } from "react";
import {
  StarIcon as SolidStar,
} from "@heroicons/react/24/solid";
import {
  StarIcon as OutlineStar,
} from "@heroicons/react/24/outline";

// Komponen Bintang Interaktif Modern
const StarRating = ({ onChange, reset }) => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (reset) {
      setHovered(0);
      setSelected(0);
    }
  }, [reset]);

  const handleClick = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="flex gap-2 text-[#101733] dark:text-[#00BCFF]">
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        const filled = hovered >= starIndex || selected >= starIndex;
        const Icon = filled ? SolidStar : OutlineStar;

        return (
          <Icon
            key={starIndex}
            className={`w-5 sm:w-4 md:w-6 md:h-7.5 lg:w-8 lg:h-10 cursor-pointer transition-transform duration-200 ${
              hovered === starIndex ? "scale-110" : "scale-100"
            }`}
            onMouseEnter={() => setHovered(starIndex)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleClick(starIndex)}
          />
        );
      })}
    </div>
  );
};

// Komponen Utama Form
const FormTestimoni = () => {
  const [rating, setRating] = useState(0);
  const [resetRatingTrigger, setResetRatingTrigger] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);

  const inputFileRef = useRef();
  const formRef = useRef();

  const handlePhotoClick = () => {
    inputFileRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logika submit dummy
    console.log("Rating:", rating);

    // Reset semua
    formRef.current.reset();
    setRating(0);
    setResetRatingTrigger(true);
    setPhotoURL(null);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setResetRatingTrigger(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="mt-5 sm:mt-0 max-w-[20rem] sm:max-w-[18rem] md:max-w-[22rem] lg:max-w-[25rem] xl:max-w-[42rem] p-4 sm:p-6 bg-white rounded-[5%] h-[600px] sm:h-[350px] md:h-[500px] lg:h-[550px] shadow-[0px_0px_10px_rgba(0,0,0,0.5)] dark:shadow-[0px_0px_15px_rgba(0,188,255,0.8)] dark: dark:border-[#00BCFF] dark:border-2 dark:bg-gray-900"
    >
      <h2 className="sm:text-[1.1rem] md:text-[1.3rem] dark:text-[#00BCFF] lg:text-2xl font-bold mb-6">Form Review</h2>

      {/* Foto + Data */}
      <div className="flex flex-row gap-6 mb-6">
        <div onClick={handlePhotoClick} className="cursor-pointer flex-shrink-0 w-[90px] h-[112.5px] sm:w-[60px] sm:h-[75px] md:w-[100px] md:h-[125px] lg:w-[100px] lg:h-[125px] xl:w-[150px] xl:h-[187.5px] border border-gray-400 dark:border-[#00BCFF] rounded-md flex items-center justify-center text-gray-500 dark:text-[#00BCFF]">
          {photoURL ? (
            <img src={photoURL} className="w-full h-full object-cover rounded-md" />
          ) : (
            <span><i className="ri-image-add-fill text-2xl md:text-5xl"></i></span>
          )}
          <input
            type="file"
            accept="image/*"
            ref={inputFileRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="flex flex-col gap-4 w-[180px] text-[0.8rem] sm:w-[150px] sm:text-[0.6rem] md:text-[0.8rem] lg:w-auto">
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            className="dark:text-[#00BCFF] dark:focus:ring-[#00BCFF] border border-gray-300 dark:border-[#00BCFF] p-1 lg:p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="umur"
            placeholder="Umur"
            className="dark:text-[#00BCFF] dark:focus:ring-[#00BCFF] border border-gray-300 dark:border-[#00BCFF] p-1 lg:p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-4">
            <span className="dark:text-[#00BCFF]">Gender:</span>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="male" className="accent-blue-900 dark:accent-[#00BCFF]" />
              <span className="dark:text-[#00BCFF]">L</span>
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="female" className="accent-blue-900 dark:accent-[#00BCFF]" />
              <span className="dark:text-[#00BCFF]">P</span>
            </label>
          </div>
        </div>
      </div>

      <textarea
        rows="4"
        name="review"
        placeholder="Review"
        className="dark:text-[#00BCFF] dark:focus:ring-[#00BCFF] w-full border border-gray-300 dark:border-[#00BCFF] p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6 text-[0.8rem] sm:text-[0.6rem] md:text-[1rem]"
      ></textarea>

      <div className="flex items-center justify-between">
        <StarRating onChange={setRating} reset={resetRatingTrigger} />
        <button
          type="submit"
          className="dark:bg-[#00BCFF] dark:text-[#030712] dark:hover:bg-white bg-[#101733] hover:bg-blue-900 text-white font-semibold py-2 px-5 rounded-[0.8rem]
            w-[90px] h-[40px] sm:w-[70px] sm:h-[30px] md:w-auto md:h-auto text-[0.9rem] sm:text-[0.6rem] md:text-[1rem] flex justify-center items-center">
          Submit
        </button>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-120">
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"></div>
          <div className="relative bg-white dark:bg-gray-800 dark:text-white text-blue-950 dark:shadow-[0px_0px_20px_rgba(0,188,255,1)] px-6 py-4 rounded-[1.5rem] md:w-[400px] md:h-[100px] w-[300px] h-[80px] shadow-lg animate-fadeIn flex justify-center items-center text-[1.1rem]">
            Komentar Anda berhasil ditambahkan!
          </div>
        </div>
      )}
    </form>
  );
};

export default FormTestimoni;
