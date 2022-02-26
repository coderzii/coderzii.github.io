/*
 * @Date: 2022-02-25
 * @Description:
 */
import { HomeWrapper } from "./styles";

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
            <div className="page-content markdown-body">
                <p> Hey. I'm Ziliang He.</p>
            </div>
        </HomeWrapper>
    );
}
