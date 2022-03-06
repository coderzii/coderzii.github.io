/*
 * @Date: 2022-02-25
 * @Description:
 */

import styled from "styled-components";

export const HomeWrapper = styled.div`
    .page-title {
        position: relative;
        font-size: 25px;
        margin-bottom: 16px;

        .line {
            position: absolute;
            background: #f5a623;
            -webkit-transition: all 0.25s;
            transition: all 0.25s;
        }
    }

    .page-content {
        font-family: Andale Mono, monospace;
        font-size: 12.8px;
        line-height: 1.5;
    }
`;
