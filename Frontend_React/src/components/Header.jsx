import React from 'react';
import SearchBar from './SearchBar';
import Profile from './Profile';

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-white shadow">
      <SearchBar />
      <Profile />
    </header>
  );
};

export default Header;




// // /src/components/Header.jsx
// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-white shadow p-4">
//       <h1 className="text-lg font-bold">Link Management Hub</h1>
//     </header>
//   );
// };

// export default Header;
