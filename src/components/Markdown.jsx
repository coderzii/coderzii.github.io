/*
 * @Date: 2022-03-05
 * @Description:
 */
import { useState, useEffect } from "react";
import styled from "styled-components";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";

import p1 from "../assets/doc/p1.md";
import p2 from "../assets/doc/p2.md";
import p3 from "../assets/doc/p3.md";
import p4 from "../assets/doc/p4.md";
import w from "../assets/doc/w.md";
import m from "../assets/doc/m.md";

export const MarkdownNavWrapper = styled.div`
  position: fixed;
  top: 118px;
  left: 10px;

  .title-anchor {
    max-width: 220px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const markdownMap = new Map();
markdownMap.set("p1", p1);
markdownMap.set("p2", p2);
markdownMap.set("p3", p3);
markdownMap.set("p4", p4);
markdownMap.set("w", w);
markdownMap.set("m", m);

export function Markdown(props) {
  const [md, setMd] = useState("");

  const { id } = props;

  const mdFile = markdownMap.get(`${id}`);

  //console.log("idid=>", id);

  useEffect(() => {
    //fetch("/doc/help.md");
    fetch(mdFile)
      .then((resp) => resp.text())
      .then((txt) => {
        setMd(txt);
      });
    //console.log("useEffect=>", md);
  }, [md]);
  return (
    <>
      {/*<MarkdownNavWrapper className="markdown-nav">
                <MarkNav source={md} />
            </MarkdownNavWrapper>*/}
      <ReactMarkdown
        className="markdown-body"
        children={md}
        remarkPlugins={[remarkGfm]}
      />
    </>
  );
}
