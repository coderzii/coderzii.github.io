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

    .markdown-body {
        .markdown-body {
            color: #24292e;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
                Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
                Segoe UI Symbol;
            font-size: 16px;
            line-height: 1.5;
            word-wrap: break-word;
        }
    }
`;
