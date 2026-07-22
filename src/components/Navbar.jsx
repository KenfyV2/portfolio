import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/20 backdrop-blur-md border-b border-white/10`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className='w-9 h-9 object-contain'
          />

          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Andrew &nbsp;
            <span className='sm:block hidden'>Lugo</span>
          </p>
        </Link>

        {/* Desktop navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-white/60"
              } hover:text-white hover:drop-shadow-[0_0_8px_#9c66ff] transition text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}

          <li className='text-white/60 hover:text-white hover:drop-shadow-[0_0_8px_#9c66ff] transition text-[18px] font-medium cursor-pointer'>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((previous) => !previous)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-[#0c0024]/95 backdrop-blur-md border border-white/10 absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl shadow-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] hover:text-white transition`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}

              <li
                className='text-secondary font-poppins font-medium cursor-pointer text-[16px] hover:text-white transition'
                onClick={() => setToggle(false)}
              >
                <a
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;