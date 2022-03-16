/*
 * @Date: 2022-02-25
 * @Description:
 */
import { Outlet } from "react-router";
import { ProjectsWrapper } from "./styles";

export default function Projects() {
    return (
        <ProjectsWrapper>
            <Outlet />
        </ProjectsWrapper>
    );
}
