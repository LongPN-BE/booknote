import Body from "../../components/javascript/statements"
import NavBar from "../../components/navbar/navbar"
import SlideBar from "../../components/slidebar/slidebar"
import Footer from "../../components/footer/footer"
import { itemsJS } from "../../dataSource";
import "./home.scss";

const JSHome = () => {
    return (
        <>
            <NavBar />
            <div className="left">
                <SlideBar items={itemsJS} />
            </div>
            <div className="right">
                <Body />
            </div>
            <Footer />
        </>
    )
}

export default JSHome;