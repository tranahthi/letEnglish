import { set } from "date-fns";
import "./style.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({});
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Vocabulary", path: "/topic" },
    { label: "Video", path: "/listvideo" },
    { label: "Communicate", path: "/communicate" },
    { label: "Exam", path: "/listexam" },
  ];
 
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData && userData !== "undefined" && userData !== "null") {
      setData(JSON.parse(userData));
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }

    // nếu khi vào /detailtopic thì ẩn header đi
    if (location.pathname.includes('/detailtopic')) {
      setShouldHideHeader(true);
    } else {
      setShouldHideHeader(false);
    }
  }, [location.pathname]);
  if (shouldHideHeader) {
    return null; // Trả về null nếu bạn muốn ẩn header
  }

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLogin(false);
    navigate("/introduce");
  };

  const handleNavItemClick = (index, e) => {
    e.preventDefault();
    setSelectedNavItem(index);
    navigate(navItems[index].path); // Assuming navItems is an array of objects with 'path' property
  };

  return (
    <nav className="nav-top navbar navbar-expand-lg fixed-top" id="mainnav">
      <div className="container-fluid">
        <div className="nav-content">
          <div>
            <a className="navbar-brand" id="logo" href="/">
              <img src="/assets/image/logo4.png" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div
                className="navmain"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="nav-left" style={{ display: "flex",alignItems:"center" }}>
                  {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                      <NavLink
                        to={item.path}
                        className="nav-link"
                        activeClassName="active"
                        onClick={() => handleNavItemClick(index)}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </div>
                <div className="nav-rigth">
                  {isLogin && (
                    <div className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                      >
                        <img
                          className="user-icon"
                          src="/assets/icon/iconuser.svg"
                          alt="User Icon"
                        />
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          dropdownOpen ? "show" : ""
                        }`}
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="user-infor" style={{ display: "flex" }}>
                          <div>
                            <img
                              style={{ width: "30px", height: "30px" }}
                              src="/assets/icon/iconuser.svg"
                              alt=""
                            />
                          </div>
                          <div>
                            <p>{data.userName}</p>
                            <p>{data.email}</p>
                          </div>
                        </div>
                        <li className="li-fix">
                          <a className="dropdown-item" href="/profile">
                            My Account
                          </a>
                        </li>
                        <li className="li-fix">
                          <a className="dropdown-item" href="/myprogress">
                            My Progress
                          </a>
                        </li>
                        <li className="li-fix">
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={handleLogout}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
