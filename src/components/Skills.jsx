import { useState, useEffect } from 'react';
import PopupSkills from './PopupSkills';

import cssIcon from '../assets/svg/Skills/css.svg';
import htmlIcon from '../assets/svg/Skills/html.svg';
import reactjsIcon from '../assets/svg/Skills/reactjs.svg';
import tailwindIcon from '../assets/svg/Skills/tailwind.svg';
import javascriptIcon from '../assets/svg/Skills/javascript.svg';
import phpIcon from '../assets/svg/Skills/php.svg';
import gitIcon from '../assets/svg/Skills/git.svg'
import mysqlIcon from '../assets/svg/Skills/mysql.svg';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [showModal, setShowPopup] = useState(false);

  useEffect(() => {
    if (activeSkill) {
      setTimeout(() => setShowPopup(true), 10);
    } else {
      setShowPopup(false);
    }
  }, [activeSkill]);

  const skills = [
    {
      name: 'HTML',
      icon: htmlIcon,
      description: 'HTML (HyperText Markup Language) adalah bahasa standar untuk menyusun struktur dan konten halaman web menggunakan tag-tag seperti judul, paragraf, gambar, dan tautan. HTML berfungsi sebagai fondasi utama dari semua halaman web, memungkinkan browser menampilkan konten secara terstruktur dan dapat diakses.',
    },
    {
      name: 'CSS',
      icon: cssIcon,
      description: 'CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan dan gaya dari elemen HTML di halaman web. Dengan CSS, kita bisa menentukan warna, ukuran, posisi, jarak, animasi, dan responsivitas suatu elemen agar tampilan website menjadi menarik dan mudah digunakan.',
    },
    {
      name: 'JavaScript',
      icon: javascriptIcon,
      description: 'JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif dan dinamis. Jika HTML adalah struktur, dan CSS adalah gaya tampilan, maka JavaScript adalah logika dan perilaku dari sebuah website.',
    },
    {
      name: 'Tailwind',
      icon: tailwindIcon,
      description: 'Tailwind CSS adalah sebuah framework CSS utility-first yang memungkinkan kamu membangun desain antarmuka dengan cepat langsung di dalam HTML menggunakan class-class kecil yang sudah disediakan.',
    },
    {
      name: 'ReactJS',
      icon: reactjsIcon,
      description: 'React JS adalah sebuah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI), khususnya untuk aplikasi web yang interaktif dan dinamis. React dikembangkan oleh Facebook dan digunakan oleh banyak perusahaan besar seperti Instagram, Netflix, dan Airbnb.',
    },
    {
      name: 'PHP',
      icon: phpIcon,
      description: 'PHP adalah bahasa pemrograman server-side yang digunakan untuk membangun website dinamis dan aplikasi web. PHP dijalankan di server, menghasilkan HTML yang dikirim ke browser pengguna.',
    },
    {
      name: 'Git',
      icon: gitIcon,
      description: 'Git adalah sistem kontrol versi modern yang dirancang untuk melacak perubahan kode dalam pengembangan perangkat lunak secara cepat, efisien, dan terdistribusi. Git membantu developer mengelola versi proyek dengan rapi dan terstruktur, baik untuk proyek berskala kecil maupun besar, serta memudahkan kolaborasi antar tim dalam pengembangan aplikasi.',
    },
    {
      name: 'MySQL',
      icon: mysqlIcon,
      description: 'MySQL adalah sistem manajemen basis data relasional (RDBMS) yang digunakan untuk menyimpan, mengelola, dan mengambil data secara efisien. MySQL menggunakan bahasa SQL (Structured Query Language) untuk berkomunikasi dengan database.',
    },
  ];

  const skillsIconClass =
    'hover:bg-white grayscale hover:grayscale-0 transition duration-300 shadow-[7px_7px_2px_rgba(0,0,0,0.5)] dark:shadow-[7px_7px_2px_rgba(0,188,255,1)] w-[80px] h-auto sm:w-auto sm:h-auto rounded-[20%] border-2 border-gray-300 hover:scale-105 cursor-pointer bg-[#101733] dark:bg-gray-900';

  return (
    <section id="skills" className="relative px-3 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5 h-[700px] sm:h-[807px] w-full">
      <div className="w-full h-full flex flex-col justify-center gap-10 sm:gap-0 sm:justify-evenly items-center sm:translate-y-0 translate-y-[-3rem]">
        <h2 className="text-[38px] sm:text-[48px] lg:text-[62px] text-[#101733] dark:text-white font-black text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-10 w-auto h-[300px] sm:w-[500px] sm:h-auto">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.icon}
              alt={skill.name}
              className={`${skillsIconClass} p-2`}
              onClick={() => setActiveSkill(skill)}
            />
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {activeSkill && showModal && (
        <PopupSkills isOpen={!!activeSkill} onClose={() => setActiveSkill(null)}>
          <img src={activeSkill.icon} alt={activeSkill.name} className="w-[100px] h-auto mx-auto mb-4" />
          <h3 className="text-xl font-bold dark:text-white text-gray-800 text-center">{activeSkill.name}</h3>
          <p className="text-[0.6rem] md:text-[0.8rem] xl:text-[1rem] dark:text-white text-gray-600 mt-2 text-justify max-w-md mx-auto">
            {activeSkill.description}
          </p>
        </PopupSkills>
      )}
    </section>
  );
};

export default Skills;
