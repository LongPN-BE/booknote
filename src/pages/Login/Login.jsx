import NavBar from "../../components/navbar/navbar"
import SlideBar from "../../components/slidebar/slidebar"
import Footer from "../../components/footer/footer"
import { items } from "../../dataSource";
import "./home.scss";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="left">
                <SlideBar items={items} />
            </div>
            <div className="right">
                Login Page
            </div>
            <Footer />
        </>
    )
}

export default Home;