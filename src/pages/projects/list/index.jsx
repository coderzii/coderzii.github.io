/*
 * @Date: 2022-02-25
 * @Description:
 */
import { ProjectsListWrapper, ProjectItemWrapper } from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function ProjectsList() {
    const navigate = useNavigate();

    const onClickProjectItem = (id) => {
        navigate(`/projects/${id}`);
    };

    return (
        <ProjectsListWrapper>
            <ProjectItemWrapper index={0}>
                <div
                    className="section"
                    onClick={() => onClickProjectItem("p1")}
                >
                    <figure className="section-image">
                        <figure className="line line1"></figure>
                        <figure className="line line2"></figure>
                    </figure>
                    <div className="section-text">
                        <h2 className="section-text__title">
                            <span>
                                tandem exchange
                                <figure className="line line3"></figure>
                            </span>
                        </h2>
                        <p className="section-text__description">
                            A few years back, my brother was living in Berlin
                            and learning German. After trying a bunch of
                            different language learning tools and systems, he
                            found that while traditional approaches like
                            textbooks and tools like Rosetta Stone are good for…
                        </p>
                    </div>
                </div>
            </ProjectItemWrapper>
            <ProjectItemWrapper index={1}>
                <div
                    className="section"
                    onClick={() => onClickProjectItem("p2")}
                >
                    <figure className="section-image">
                        <figure className="line line1"></figure>
                        <figure className="line line2"></figure>
                    </figure>
                    <div className="section-text">
                        <h2 className="section-text__title">
                            <span>
                                tandem exchange
                                <figure className="line line3"></figure>
                            </span>
                        </h2>
                        <p className="section-text__description">
                            A few years back, my brother was living in Berlin
                            and learning German. After trying a bunch of
                            different language learning tools and systems, he
                            found that while traditional approaches like
                            textbooks and tools like Rosetta Stone are good for…
                        </p>
                    </div>
                </div>
            </ProjectItemWrapper>
            <ProjectItemWrapper index={2}>
                <div
                    className="section"
                    onClick={() => onClickProjectItem("p3")}
                >
                    <figure className="section-image">
                        <figure className="line line1"></figure>
                        <figure className="line line2"></figure>
                    </figure>
                    <div className="section-text">
                        <h2 className="section-text__title">
                            <span>
                                tandem exchange
                                <figure className="line line3"></figure>
                            </span>
                        </h2>
                        <p className="section-text__description">
                            A few years back, my brother was living in Berlin
                            and learning German. After trying a bunch of
                            different language learning tools and systems, he
                            found that while traditional approaches like
                            textbooks and tools like Rosetta Stone are good for…
                        </p>
                    </div>
                </div>
            </ProjectItemWrapper>
            <ProjectItemWrapper index={3}>
                <div
                    className="section"
                    onClick={() => onClickProjectItem("p4")}
                >
                    <figure className="section-image">
                        <figure className="line line1"></figure>
                        <figure className="line line2"></figure>
                    </figure>
                    <div className="section-text">
                        <h2 className="section-text__title">
                            <span>
                                tandem exchange
                                <figure className="line line3"></figure>
                            </span>
                        </h2>
                        <p className="section-text__description">
                            A few years back, my brother was living in Berlin
                            and learning German. After trying a bunch of
                            different language learning tools and systems, he
                            found that while traditional approaches like
                            textbooks and tools like Rosetta Stone are good for…
                        </p>
                    </div>
                </div>
            </ProjectItemWrapper>
        </ProjectsListWrapper>
    );
}
