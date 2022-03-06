/*
 * @Date: 2022-02-25
 * @Description:
 */

import styled from "styled-components";

export const LayoutWrapper = styled.div`
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: Andale Mono, monospace;
        color: #4a4a4a;

        .container {
            width: 100%;
            max-width: 720px;
            margin: 0 auto;
            padding: 0 24px;
            box-sizing: border-box;
        }

        .header {
            margin-top: 40px;
            -webkit-filter: none !important;
            filter: none !important;
            .header-inner {
                position: relative;
                display: flex;
                align-items: flex-end;
                margin-bottom: 50px;
                background: #fff;
            }
            .header-logo {
                flex: 1 1 auto;
                margin: 0;
                line-height: 25px;

                .header-logo__link {
                    font-size: 25px;
                    font-family: Archivo Black;
                    text-transform: uppercase;
                    text-decoration: none;
                }

                .ziliang,
                .he {
                    transition: all 0.25s;

                    cursor: pointer;

                    &.active {
                        color: #4a4a4a;
                    }
                    &:not(.active) {
                        color: #f5a623;
                    }
                }
            }
            .header-menu {
                display: none;
            }
            .header-nav {
                flex: 0 0 auto;
                font-family: Andale Mono;
                font-weight: 300;
                transition: all 0.25s;

                > a {
                    margin-left: 24px;
                    transition: all 0.25s;
                    text-decoration: none;
                }
                > a:hover {
                    filter: none !important;
                }

                /*.header-nav__link {
                    margin-left: 24px;
                    filter: blur(1.5px);
                    color: inherit;
                    text-decoration: none;
                    cursor: pointer;

                    transition: all 0.25s;
                }

                .header-nav__link.active,
                .header-nav__link:hover {
                    filter: none;
                }*/
            }
        }

        .footer {
            display: flex;
            margin-top: 100px;
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 12.8px;
            font-family: Andale Mono;
            color: #9b9b9b;

            .footer-left {
                flex: 1 1 auto;
            }

            .footer-nav {
                flex: 0 0 auto;
                .footer-nav__link {
                    position: relative;
                    margin: 0 12px;
                    padding-right: 6px;
                    cursor: pointer;
                    color: inherit;
                    text-decoration: none;
                    transition: all 0.25s;
                }
                .footer-nav__link:hover {
                    color: #4a4a4a !important;
                }
            }
        }

        /* media query */
        @media screen and (max-width: 768px) {
            .header {
                position: sticky;
                top: 0;
                margin-top: 0;
                padding: 0;
                z-index: 5;
            }
            .header-inner {
                padding: 12px 24px;
                -webkit-box-shadow: 0 0 5px #cbcbcb;
                box-shadow: 0 0 5px #cbcbcb;
                .header-logo {
                }
                .header-menu {
                    position: relative;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    flex-direction: column;
                    align-self: center;
                    width: 18px;
                    z-index: 10;
                    cursor: pointer;

                    .header-menu__line:first-child {
                        transform-origin: top left;
                    }
                    .header-menu__line:nth-child(3) {
                        transform-origin: bottom left;
                    }
                    .header-menu__line:not(:last-child) {
                        margin-bottom: 4px;
                    }

                    .header-menu__line {
                        height: 2px;
                        background: #666;
                        transition: all 0.25s;
                    }
                }

                .header-menu--open .header-menu__line {
                    background-color: #f5a623 !important;
                }
                .header-menu--open .header-menu__line:first-child {
                    transform: translateX(3px) rotate(45deg);
                }
                .header-menu--open .header-menu__line:nth-child(2) {
                    opacity: 0;
                }
                .header-menu--open .header-menu__line:nth-child(3) {
                    transform: translateX(3px) rotate(-45deg);
                }

                .header-menu--open + .header-nav {
                    opacity: 1;
                    pointer-events: initial;
                }

                .header-nav {
                    opacity: 0;
                    pointer-events: none;
                    position: fixed;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    z-index: 5;
                    background: #fff;
                    > a {
                        font-size: 25px;
                        margin-left: 0 !important;
                    }

                    > a:not(:last-child) {
                        margin-bottom: 40px;
                    }
                }
            }
            .footer {
                display: block;
                text-align: center;

                .footer-left {
                    margin-bottom: 16px;
                }
                .footer-nav {
                    .footer-nav__link {
                        margin-bottom: 8px;
                    }
                    .footer-nav__link:first-of-type {
                        margin-left: 0;
                    }
                }
            }
        }

        .markdown-body {
            /*font-family: Andale Mono !important;*/
        }
    }
`;
