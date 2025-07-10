import { StarIcon as SolidStar } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

const HasilTestimoni = () => {
  const rating = 3; // rating bisa kamu ambil dari props atau data nantinya (0-5)

  return (
    <div className="max-w-[20rem] mt-10 sm:mt-0 sm:max-w-[17rem] md:max-w-[20rem] lg:max-w-[31rem] xl:max-w-[33rem] 2xl:max-w-[48rem] p-6 bg-white dark:bg-gray-900 dark:border-[#00BCFF] dark:border-2 rounded-[3rem] h-[550px] shadow-[0px_0px_10px_rgba(0,0,0,0.5)]
    dark:shadow-[0px_0px_15px_rgba(0,188,255,0.8)]">
      <h2 className="dark:text-[#00BCFF] sm:text-[1.1rem] md:text-[1.3rem] lg:text-2xl font-bold mb-3 sm:mb-5 text-center">Hasil Review</h2>

      <div className="flex flex-row gap-6 items-start py-3 md:py-5 border-t-2 border-gray-300 border-b-2">
        {/* Foto Profil */}
        <div className=" w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-gray-300 dark:bg-gray-700 dark:border-[#00BCFF] dark:border-2 flex items-center justify-center text-gray-500 dark:text-[#00BCFF] text-[0.8rem] sm:text-[0.5rem] md:text-[1rem]">
          Foto
        </div>

        {/* Detail Review */}
        <div className="flex-1">
          {/* Nama, Gender, Umur, Rating */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="dark:text-[#00BCFF] text-[0.7rem] sm:text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] 2xl:text-lg font-semibold text-gray-800">Nama Lengkap</h3>
              <p className="text-[0.6rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.9rem] 2xl:text-sm dark:text-gray-300 text-gray-500">Laki-laki, 25 tahun</p>
            </div>

            {/* Rating */}
            <div className="flex gap-1 text-[#101733] dark:text-[#00BCFF]">
              {[...Array(5)].map((_, index) =>
                index < rating ? (
                  <SolidStar key={index} className=" w-3 h-3 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-6 lg:h-6" />
                ) : (
                  <OutlineStar key={index} className=" w-3 h-3 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-6 lg:h-6" />
                )
              )}
            </div>
          </div>

          {/* Review Box */}
          <div className="mt-1 sm:mt-4 border dark:border-[#00BCFF] border-gray-300 rounded-[0.8rem] md:rounded-[10px] lg:rounded-[20px] p-2 md:p-3 bg-gray-50 dark:bg-gray-700">
            <p className="text-[0.6rem] sm:text-[0.4rem] md:text-[0.5rem] lg:text-sm dark:text-white text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
              sit dignissim rhoncus nunc, non rutrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasilTestimoni;
