import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="sticky top-0 z-50 hidden h-screen pt-8 duration-300 md:block">
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
                } px-12 hover:text-[#000028] mb-4 text-sm flex flex-col items-center gap-x-4 cursor-pointer p-3 hover:bg-light-white
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
      <div className="text-center mt-10">
        <Button
          variant="outline"
          text="Logout"
          onClick={() => navigate('/login')}
        />
      </div>
    </div>
  );
};
