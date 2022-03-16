/*
 * @Date: 2022-02-26
 * @Description:
 */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: false });

    return (
        <Link
            style={{ filter: match ? "none" : "blur(1.5px)", color: "inherit" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}
