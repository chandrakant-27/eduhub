// import React from 'react';
// import { Link, BrowserRouter } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <BrowserRouter>
//       <div className="container">
//         <nav className="navbar navbar-expand-lg">
//           <Link to="/" className="navbar-brand"><span className='bg-primary'>App Logo</span> </Link>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon">
//             <div className="__navbar-icon" style={{ fontSize: '18px', textDecoration: 'none', color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', backgroundSize: 'cover', position: 'relative' }}>
//                 <img src="https://edison-cdn.b-cdn.net/tenant_synergyinstitute/588a64e7d06f6719692a2d11.png" alt="image" className="__navbar-icon" style={{ width: '100%', objectFit: 'contain', fontSize: '18px', textDecoration: 'none', color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', backgroundSize: 'cover', position: 'relative', textAlign: 'center' }} />
//             </div>
//             </span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav nav nav-pills">
//               <li className="nav-item">         
//                 <Link to="/" className="nav-link "><button class="btn btn-primary __navbar-item">Home</button></Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/library" className="nav-link "><button class="btn btn-primary __navbar-item">My Library</button></Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/store" className="nav-link "><button class="btn btn-primary __navbar-item">Store</button></Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/signin" className="nav-link "><button class="btn btn-primary __navbar-item">Sign In</button></Link>
//               </li>
//               <li className="nav-item active" 
// >
//                 <Link to="/register" className="nav-link register-link __navbar-item">
//                 <button class="btn btn-primary __navbar-item" style={{   border: '1px solid rgb(2, 204, 186)',color: 'rgb(255, 255, 255)',backgroundColor: 'rgb(2, 204, 186)' }}>Register</button>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import App from '../App'
import {  Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="container">
   
   
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand"><span className='bg-primary'>App Logo</span> </Link>
        <button className="navbar-toggler" type="button" onClick={handleToggle} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><button className="btn btn-primary __navbar-item">Home</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/library" className="nav-link"><button className="btn btn-primary __navbar-item">My Library</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link"><button className="btn btn-primary __navbar-item">Store</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link"><button className="btn btn-primary __navbar-item">Sign In</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link register-link"><button className="btn btn-primary __navbar-item" style={{ border: '1px solid rgb(2, 204, 186)', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(2, 204, 186)' }}>Register</button></Link>
            </li>
          </ul>
        </div>
      </nav>
     
    </div>
  );
};

export default Navbar;
