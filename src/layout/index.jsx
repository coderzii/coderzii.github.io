/*
 * @Date: 2022-02-25
 * @Description:
 */
import { LayoutWrapper } from "./styles";
import { useNavigate, Outlet, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomLink from "../components/CustomeLink";

export default function Layout() {
  const navigate = useNavigate();

  const [logoTransform, setLogoTransform] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const onMouseEnterAndLeave = () => setLogoTransform(!logoTransform);

  const customeNavigate = (path) => {
    setShowMenu(false);
    navigate(path);
  };

  const onClickMenu = () => setShowMenu(!showMenu);

  return (
    <LayoutWrapper>
      <div className="layout">
        <div className=" container header">
          <header className="header-inner">
            <h1 className="header-logo" onClick={() => customeNavigate("/")}>
              <a className="header-logo__link">
                <span
                  className={["ziliang", logoTransform ? "active" : null].join(
                    " "
                  )}
                  onMouseEnter={onMouseEnterAndLeave}
                  onMouseLeave={onMouseEnterAndLeave}
                >
                  ZILIANG
                </span>

                <span
                  className={["he", !logoTransform ? "active" : null].join(" ")}
                  onMouseEnter={onMouseEnterAndLeave}
                  onMouseLeave={onMouseEnterAndLeave}
                >
                  HE
                </span>
              </a>
            </h1>
            <figure
              className={[
                "header-menu",
                showMenu ? "header-menu--open" : null,
              ].join(" ")}
              onClick={onClickMenu}
            >
              <span className="header-menu__line"></span>
              <span className="header-menu__line"></span>
              <span className="header-menu__line"></span>
            </figure>
            <div className="header-nav">
              <CustomLink to="/projects" onClick={() => setShowMenu(false)}>
                projects
              </CustomLink>
              <CustomLink to="/work" onClick={() => setShowMenu(false)}>
                work
              </CustomLink>
            </div>
          </header>
        </div>
        <div className=" container main">
          <Outlet />
        </div>
        <div className=" container footer">
          <div className="footer-left">
            <div className="footer__copyright">
              {"@coderzi"} {"2023"}
            </div>
          </div>
          <div className="footer-nav">
            {/*<a className="footer-nav__link">contact</a>
                        <a className="footer-nav__link">github</a>
                        <a className="footer-nav__link">dribbble</a>
                        <a className="footer-nav__link">stack overflow</a>*/}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
