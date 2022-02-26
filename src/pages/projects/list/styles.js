/*
 * @Date: 2022-02-25
 * @Description:
 */
import styled from "styled-components";
import p1 from "../../../assets/images/p-1.jpg";

export const ProjectsListWrapper = styled.div``;

export const ProjectItemWrapper = styled.div.attrs(({ index }) => ({
    isOdd: index % 2 === 0,
}))`
    .section {
        display: flex;
        margin-bottom: 36px;
        text-decoration: none;
        color: inherit;

        .line {
            position: absolute;
            background: #f5a623;
            transition: all 0.25s;
        }

        .line1 {
            top: -8px;
            left: -8px;
            width: 100px;
            height: 1px;
        }
        .line2 {
            top: -8px;
            left: -8px;
            width: 1px;
            height: 50px;
        }

        .line3 {
            bottom: -5px;
            left: ${({ isOdd }) => (isOdd ? "-5px" : "0px")};
            right: ${({ isOdd }) => (isOdd ? "0px" : "-5px")};
            width: 50px;
            height: 1px;
        }

        .section-image {
            margin-left: 0px;
            margin-right: ${({ isOdd }) => (isOdd ? "16px" : "0px")};
            margin-left: ${({ isOdd }) => (isOdd ? "0px" : "16px")};
            order: ${({ isOdd }) => (isOdd ? 0 : 1)};
            filter: none;
            background-color: rgb(243, 243, 243);
            background-image: url(${p1});

            /* c */
            position: relative;
            flex: 0 0 auto;
            width: 68%;
            max-width: 447px;
            height: 276px;
            background-size: cover;
            background-position: 50%;
        }

        .section-text {
            text-align: ${({ isOdd }) => (isOdd ? "left" : "right")};
            .section-text__title {
                margin-bottom: 12px;
                font-size: 20px;
                font-weight: 400;

                > span {
                    position: relative;
                }
            }
            .section-text__description {
                line-height: 1.5;
                font-size: 12.8px;
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
`;