import React from 'react';

// Reusable component for a single navigation link item
const NavItem = ({ children, isActive = false }) => {
  const baseClasses = "text-sm px-4 py-2 cursor-pointer transition-colors duration-200 hover:text-indigo-600";
  const activeClasses = "bg-indigo-100 text-indigo-700 font-semibold rounded-md";

  return (
    // Conditional styling applied based on the isActive prop
    <li className={`flex items-center ${isActive ? activeClasses : 'text-gray-700'}`}>
      <span className={baseClasses}>
        {children}
      </span>
    </li>
  );
};

const Navbar = () => {
  return (
    // Outer Navbar container with shadow and bottom border
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* Logo text styled to match the image */}
            <span className="text-xl font-bold text-indigo-700 flex items-center">
              🎓 Skills & Mentorship Hub
            </span>
          </div>
          
          {/* Navigation Links Section */}
          <div className="hidden sm:block sm:ml-6">
            <ul className="flex space-x-1 items-center list-none p-0 m-0">
              
              {/* Dashboard - Active State (using isActive prop) */}
              <NavItem isActive={true}>
                Dashboard
              </NavItem>
              
              {/* Separator Dots (•) */}
              <li className="text-gray-400 text-sm">•</li>
              
              <NavItem>
                Bootcamps
              </NavItem>
              
              <li className="text-gray-400 text-sm">•</li>
              
              <NavItem>
                Mentorship
              </NavItem>
              
              <li className="text-gray-400 text-sm">•</li>
              
              <NavItem>
                Skills
              </NavItem>
              
              <li className="text-gray-400 text-sm">•</li>
              
              <NavItem>
                Certifications
              </NavItem>
              
              <li className="text-gray-400 text-sm">•</li>
              
              <NavItem>
                Profile
              </NavItem>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;