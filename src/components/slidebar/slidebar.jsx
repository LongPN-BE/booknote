import { useEffect, useState } from "react";
import "./slidebar.scss";
import { NavLink } from "react-router-dom";

const SlideBar = (items) => {

    const [list, setList] = useState([]);

    useEffect(
        function () {
            setList(items.items)
        }, []
    )

    return (
        <>
            <aside class="slidebar-contain">
                {(list).map((x) => (
                    <NavLink className="slide-item" to={"/" + x.pages} key={x.pages}>{x.name} </NavLink>
                ))}
            </aside >
        </>

    )
}

export default SlideBar;