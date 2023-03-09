/*
 * @Date: 2022-02-25
 * @Description:
 */
import { ProjectsListWrapper, ProjectItemWrapper } from "./styles";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import p1 from "../../../assets/images/admin-logo2.png";
// import p4 from "../../../assets/images/meta-logo.png";
import p4 from "../../../assets/images/h5-index.png";

export default function ProjectsList() {
  const navigate = useNavigate();

  const onClickProjectItem = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <ProjectsListWrapper>
      <ProjectItemWrapper index={0} p={p1}>
        <div className="section" onClick={() => onClickProjectItem("p1")}>
          <figure className="section-image">
            <figure className="line line1"></figure>
            <figure className="line line2"></figure>
          </figure>
          <div className="section-text">
            <h2 className="section-text__title">
              <span>
                [星潮]运营后台管理系统
                <figure className="line line3"></figure>
              </span>
            </h2>
            <p className="section-text__description">
              此项目供运营团队使用，其中个人中心、商品管理、订单管理和配置管理等模块，提供了基础的电商运营管理功能;除此之外，资料库提供了潮玩商品各维度属性的分类管理。技术选型为Vue3、EelementUI、Pinia、TS。
            </p>
          </div>
        </div>
      </ProjectItemWrapper>
      <ProjectItemWrapper index={1} p={p1}>
        <div className="section" onClick={() => onClickProjectItem("p2")}>
          <figure className="section-image">
            <figure className="line line1"></figure>
            <figure className="line line2"></figure>
          </figure>
          <div className="section-text">
            <h2 className="section-text__title">
              <span>
                [星潮]商户后台管理系统
                <figure className="line line3"></figure>
              </span>
            </h2>
            <p className="section-text__description">
              此项目供平台商户使用，其中包含商品管理、订单管理、优惠券管理等模块。
            </p>
          </div>
        </div>
      </ProjectItemWrapper>
      <ProjectItemWrapper index={2} p={p4}>
        <div className="section" onClick={() => onClickProjectItem("p3")}>
          <figure className="section-image">
            <figure className="line line1"></figure>
            <figure className="line line2"></figure>
          </figure>
          <div className="section-text">
            <h2 className="section-text__title">
              <span>
                [星潮]APP 分享/活动
                <figure className="line line3"></figure>
              </span>
            </h2>
            <p className="section-text__description">
              此项目主要为实现APP的唤醒链路及活动展示。技术选型为Vue3、VantUI、Pinia。
            </p>
          </div>
        </div>
      </ProjectItemWrapper>
      <ProjectItemWrapper index={3} p={p4}>
        <div className="section" onClick={() => onClickProjectItem("p4")}>
          <figure className="section-image">
            <figure className="line line1"></figure>
            <figure className="line line2"></figure>
          </figure>
          <div className="section-text">
            <h2 className="section-text__title">
              <span>
                [星潮]商家助手
                <figure className="line line3"></figure>
              </span>
            </h2>
            <p className="section-text__description">
              此项目供平台商户使用,其中包含查看订单、筛选查询、拍照发货等模块。技术选型为Vue3、VantUI、Pinia。
            </p>
          </div>
        </div>
      </ProjectItemWrapper>
    </ProjectsListWrapper>
  );
}
