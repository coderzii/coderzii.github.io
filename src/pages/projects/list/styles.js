/*
 * @Date: 2022-02-25
 * @Description:
 */
import styled from "styled-components";
import p1 from "../../../assets/images/p-1.jpg";

export const ProjectsListWrapper = styled.div``;

export const ProjectItemWrapper = styled.div.attrs(({ index }) => ({
    isEven: index % 2 === 0,
}))`
    .section {
        display: flex;
        margin-bottom: 36px;
        text-decoration: none;
        color: inherit;
        cursor: pointer;

        .line {
            position: absolute;
            background: #f5a623;
            transition: all 0.25s;
        }

        .line1 {
            top: -8px;
            right: ${({ isEven }) => (isEven ? "auto" : "-8px")};
            left: ${({ isEven }) => (isEven ? "-8px" : "auto")};
            width: 100px;
            height: 1px;
        }
        .line2 {
            top: -8px;
            right: ${({ isEven }) => (isEven ? "auto" : "-8px")};
            left: ${({ isEven }) => (isEven ? "-8px" : "auto")};
            width: 1px;
            height: 50px;
        }

        .line3 {
            bottom: -5px;
            left: ${({ isEven }) => (isEven ? "auto" : "5px")};
            right: ${({ isEven }) => (isEven ? "5px" : "auto")};
            width: 50px;
            height: 1px;
        }

        .section-image {
            margin-left: 0px;
            margin-right: ${({ isEven }) => (isEven ? "16px" : "0px")};
            margin-left: ${({ isEven }) => (isEven ? "0px" : "16px")};
            order: ${({ isEven }) => (isEven ? 0 : 1)};
            filter: none;
            background-color: rgb(243, 243, 243);
            background-image: url(${({ p }) => p});
            background-position: center center;
            background-size: 60% auto;
            background-repeat: no-repeat;

            /* c */
            position: relative;
            flex: 0 0 auto;
            width: 68%;
            max-width: 447px;
            height: 276px;
            /*background-size: cover;*/
            /*background-position: 50%;*/
        }

        .section-text {
            text-align: ${({ isEven }) => (isEven ? "left" : "right")};
            .section-text__title {
                margin-bottom: 12px;
                font-size: 20px;
                font-weight: 400;

                > span {
                    position: relative;
                }
            }
            .section-text__description {
                line-height: 2;
                font-size: 14px;
                color: #9b9b9b;
                -webkit-transition: all 0.25s;
                transition: all 0.25s;
            }
        }
    }

    .section:hover {
        .section-image {
            filter: brightness(0.9);
        }
        .line1 {
            width: 125px;
        }
        .line2 {
            height: 25px;
        }
        .line3 {
            width: 60px;
        }
    }

    @media screen and (max-width: 768px) {
        .section {
            display: block;

            .section-image {
                width: 100%;
                max-width: none;
                height: 200px;
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
            .section-text {
                text-align: left !important;
                .section-text__title {
                    margin-top: 16px;
                }
            }
        }
    }
`;
