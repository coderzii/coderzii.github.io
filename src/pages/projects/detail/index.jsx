/*
 * @Date: 2022-02-25
 * @Description:
 */
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProjectsDetailWrapper } from "./styles";
import { Markdown } from "../../../components/Markdown";

export default function ProjectsDetai() {
  const params = useParams();
  const { id } = params;
  return (
    <ProjectsDetailWrapper>
      <Markdown id={id} />
    </ProjectsDetailWrapper>
  );
}
