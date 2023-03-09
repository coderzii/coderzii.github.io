/*
 * @Date: 2022-02-25
 * @Description:
 */
import { HomeWrapper } from "./styles";
import github from "../../assets/images/github-logo.png";

import { Markdown } from "../../components/Markdown";

export default function Home() {
    function go(url) {
        window.open(url, "_blank");
    }
    return (
        <HomeWrapper>
            <h1 className="page-title">
                about me
                <figure
                    className="line"
                    style={{ left: "-5px", width: "50px", height: "1px" }}
                ></figure>
            </h1>
            <div className="page-content">
                <Markdown id="m" />
            </div>
            <div className="page-footer">
                <div
                    className="github-logo"
                    onClick={() => go("https://github.com/coderzii")}
                >
                    <img src={github} alt="github" />
                </div>
            </div>
        </HomeWrapper>
    );
}
