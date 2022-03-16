/*
 * @Date: 2022-02-25
 * @Description:
 */
import { ProjectsListWrapper, ProjectItemWrapper } from "./styles";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import p1 from "../../../assets/images/admin-logo.png";
import p4 from "../../../assets/images/meta-logo.png";

export default function ProjectsList() {
    const navigate = useNavigate();

    const onClickProjectItem = (id) => {
        navigate(`/projects/${id}`);
    };

    return (
        <ProjectsListWrapper>
            <ProjectItemWrapper index={0} p={p1}>
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
                                Buykop Admin
                                <figure className="line line3"></figure>
                            </span>
                        </h2>
                        <p className="section-text__description">
                            此项目作为buykop的商城网站，包括PC和移动端两个端的项目。此项目包括首页、商品详情、下单付款、商品搜索、个人中心和关于我们等功能页面，实现了数据埋点统计及语言翻译功能。
                        </p>
                    </div>
                </div>
            </ProjectItemWrapper>
            <ProjectItemWrapper index={1} p={p1}>
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
                                Buykop Mall
                                <figure className="line line3"></figure>
                            </span>
                        </h2>
                        <p className="section-text__description">
                            此项目作为buykop的商城网站，包括PC和移动端两个端的项目。此项目包括首页、商品详情、下单付款、搜索、个人中心和关于我们等功能页面，实现了数据埋点统计及语言翻译功能。
                        </p>
                    </div>
                </div>
            </ProjectItemWrapper>
            <ProjectItemWrapper index={2} p={p1}>
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
                                Buykop OMS
                                <figure className="line line3"></figure>
                            </span>
                        </h2>
                        <p className="section-text__description">
                            此项目作为buykop的运营管理平台，是给buykop运营人员对独立站和商城进行管理的平台。包括运营分析、客户管理、推广营销、品牌站管理等功能页面。
                        </p>
                    </div>
                </div>
            </ProjectItemWrapper>
            <ProjectItemWrapper index={3} p={p4}>
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
                                Buykop Meta
                                <figure className="line line3"></figure>
                            </span>
                        </h2>
                        <p className="section-text__description">
                            此项目作为buykop的广告投放合作平台，此项目作为buykop的广告投放合作平台,是开放给自建站用户进行广告分发合作的平台。此项目技术栈基于react、ant-design，团队协同开发完成。此项目技术栈基于`react`、`ant-design`，团队协同开发完成。
                        </p>
                    </div>
                </div>
            </ProjectItemWrapper>
        </ProjectsListWrapper>
    );
}
