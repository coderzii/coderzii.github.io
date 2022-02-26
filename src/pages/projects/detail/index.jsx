/*
 * @Date: 2022-02-25
 * @Description:
 */
import { useParams } from "react-router";
import { ProjectsDetailWrapper } from "./styles";

export default function ProjectsDetai() {
    const params = useParams();
    const { pid } = params;
    return (
        <ProjectsDetailWrapper>
            <h3>pid : {pid}</h3>
        </ProjectsDetailWrapper>
    );
}
