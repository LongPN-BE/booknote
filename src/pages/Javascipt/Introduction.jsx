import Body from "../../components/javascript/introdution"
import NavBar from "../../components/navbar/navbar"
import SlideBar from "../../components/slidebar/slidebar"
import Footer from "../../components/footer/footer"
import { items } from "../../dataSource";
import "./home.scss";

const JSHome = () => {
    return (
        <>
            <div className="container">
                <NavBar />
                <div className="left">
                    <SlideBar items={items} />
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