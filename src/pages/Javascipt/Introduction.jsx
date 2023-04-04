import Body from "../../components/javascript/introdution"
import NavBar from "../../components/navbar/navbar"
import SlideBar from "../../components/slidebar/slidebar"
import Footer from "../../components/footer/footer"
import {itemsJS } from "../../dataSource";
import "./home.scss";

const JSHome = () => {
    return (
        <>
            <div className="container">
                <NavBar />
                <div className="left">
                    <SlideBar items={itemsJS} />
                </div>
                <div className="right">
                    <Body />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default JSHome;