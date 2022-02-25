/*
 * @Date: 2022-02-25
 * @Description:
 */
import { LayoutWrapper } from "./styles";
import { useNavigate, Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
    const navigate = useNavigate();

    const location = useLocation();

    const { pathname } = location;

    const [state, setState] = useState({ isActive: false });

    const [logoTransform, setLogoTransform] = useState(false);

    const onMouseEnterAndLeave = () => setLogoTransform(!logoTransform);

    useEffect(() => {
        setState({
            ...state,
            isProjectsActive: pathname === "/projects",
            isWorkActive: pathname === "/work",
        });
    }, [pathname]);

    return (
        <LayoutWrapper>
            <div className="layout">
                <div className=" container header">
                    <header className="header-inner">
                        <h1
                            className="header-logo"
                            onClick={() => navigate("/")}
                        >
                            <a
                                className={[
                                    "ziliang",
                                    logoTransform ? "active" : null,
                                ].join(" ")}
                                onMouseEnter={onMouseEnterAndLeave}
                                onMouseLeave={onMouseEnterAndLeave}
                            >
                                ZILIANG
                            </a>

                            <a
                                className={[
                                    "he",
                                    !logoTransform ? "active" : null,
                                ].join(" ")}
                                onMouseEnter={onMouseEnterAndLeave}
                                onMouseLeave={onMouseEnterAndLeave}
                            >
                                HE
                            </a>
                        </h1>
                        <div className="header-nav">
                            <a
                                className={[
                                    "header-nav__link",
                                    state.isProjectsActive ? "active" : null,
                                ].join(" ")}
                                onClick={() => navigate("/projects")}
                            >
                                projects
                            </a>
                            <a
                                className={[
                                    "header-nav__link",
                                    state.isWorkActive ? "active" : null,
                                ].join(" ")}
                                onClick={() => navigate("/work")}
                            >
                                work
                            </a>
                            <Link to={"/projects"}></Link>
                        </div>
                    </header>
                </div>
                <div className=" container main">
                    <Outlet />
                </div>
                <div className=" container footer">
                    <div className="footer-left">
                        <div className="footer__copyright">
                            {"@coderzi"} {"2022"}
                        </div>
                    </div>
                    <div className="footer-nav">
                        <a className="footer-nav__link">contact</a>
                        <a className="footer-nav__link">github</a>
                        <a className="footer-nav__link">dribbble</a>
                        <a className="footer-nav__link">stack overflow</a>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
}
