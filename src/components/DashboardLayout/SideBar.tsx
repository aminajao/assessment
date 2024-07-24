import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useEffect, useState } from 'react';
import { IoIosArrowRoundBack, IoIosLogOut } from 'react-icons/io';

const Menus = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    inactive: '/assets/sidebar/dashboard-inactive.svg',
    active: '/assets/sidebar/dashboard.svg',
  },
  {
    title: 'Campaigns',
    path: '/campaigns',
    inactive: '/assets/sidebar/campaign-inactive.svg',
    active: '/assets/sidebar/campaign.svg',
  },
  {
    title: 'Sourcing',
    path: '#',
    inactive: '/assets/sidebar/sourcing-inactive.svg',
  },
  {
    title: 'Settings',
    path: '#',
    inactive: '/assets/sidebar/settings-inactive.svg',
  },
];

export const SideBar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  return (
    <div
      className={`${open ? 'w-[180px]' : 'w-16'} ${
        isMobile ? 'w-16' : ''
      } sticky top-0 z-50 h-screen pt-8 duration-300 block`}
    >
      <IoIosArrowRoundBack
        onClick={() => (!isMobile ? setOpen(!open) : setOpen(false))}
        className={`${
          !open && 'rotate-180'
        } bg-white text-dark-purple text-2xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer`}
      />
      <div className="flex justify-center mt-12 mb-32">
        <img src="/assets/sidebar/logo.svg" alt="Logo" />
      </div>
      <ul>
        {Menus.map((menu, index) => {
          return (
            <NavLink to={menu?.path} key={index}>
              <li
                key={index}
                className={`text-gray-300 ${
                  pathname.startsWith(menu.path) ? 'active__sidebar--menu' : ''
                } ${
                  open ? 'px-12 p-3 mb-4' : 'mb-10'
                } hover:text-[#000028] text-sm flex flex-col items-center gap-x-4 cursor-pointer hover:bg-light-white
                }`}
              >
                <span className="block float-left mb-2 text-2xl">
                  {pathname.startsWith(menu.path) ? (
                    <img src={menu?.active} alt="" />
                  ) : (
                    <img src={menu?.inactive} alt="" />
                  )}
                </span>
                <span
                  className={`${
                    pathname.startsWith(menu.path)
                      ? 'text-primary'
                      : 'text-[#545D69]'
                  } text-base font-normal flex-1 duration-200 ${
                    !open && 'hidden '
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            </NavLink>
          );
        })}
      </ul>
      {open ? (
        <div className="text-center mt-10">
          <Button
            variant="outline"
            text="Logout"
            onClick={() => navigate('/login')}
          />
        </div>
      ) : (
        <div className="flex justify-center text-2xl text-center mt-10">
          <IoIosLogOut
            className="bg-white w-10"
            onClick={() => navigate('/login')}
          />
        </div>
      )}
    </div>
  );
};
