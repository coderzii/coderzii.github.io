/*
 * @Date: 2022-02-25
 * @Description:
 */
import { HomeWrapper } from "./styles";

import { Markdown } from "../../components/Markdown";

export default function Home() {
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
        </HomeWrapper>
    );
}
