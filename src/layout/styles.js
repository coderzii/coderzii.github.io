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
            .header-nav {
                flex: 0 0 auto;
                font-family: Andale Mono;
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
    }
`;
