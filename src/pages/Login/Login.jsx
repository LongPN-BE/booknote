import NavBar from "../../components/navbar/navbar"
import SlideBar from "../../components/slidebar/slidebar"
import Footer from "../../components/footer/footer"
import "./home.scss";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="left">

            </div>
            <div className="right">
                Login Page
            </div>
            <Footer />
        </>
    )
}

export default Home;