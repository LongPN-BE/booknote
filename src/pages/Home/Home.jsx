import Footer from "../../components/footer/footer"
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            {/* <NavBar />
            <div className="left">
                <SlideBar items={items} />
            </div>
            <main className="right">
                <Body />
            </main> */}
            <section class="et-hero-tabs">
                <img src="logo-02.png" className="img-home" />
                <h1>Build For Your Life</h1>
                <h3>I build this for my note somethings that i founded</h3>
                <div class="et-hero-tabs-container">
                    <a class="et-hero-tab" href="#tab-es6">JavaScript</a>
                    <a class="et-hero-tab" href="#tab-react">React</a>
                    <a class="et-hero-tab" href="#tab-other">Other</a>
                    {/* <a class="et-hero-tab" href="#tab-flexbox">Flexbox</a>
                    <a class="et-hero-tab" href="#tab-angular">Angular</a> */}
                </div>
            </section>


            <main class="et-main">
                <section class="et-slide" id="tab-es6">
                    <h1>JavaScript</h1>
                    <h3>I Note Something about JavaScript Beginner</h3>
                    JavaScript is the world's most popular programming language.<br />
                    JavaScript is the programming language of the Web.<br />
                    JavaScript is easy to learn.<br />

                    <Link class="et-slide-tab" to="js">Click To Welcome JavaScript Source</Link>
                </section>

                <section class="et-slide" id="tab-react">
                    <h1>React</h1>
                    <h3>I Note Something about React Beginner</h3>
                </section>

                <section class="et-slide" id="tab-other">
                    <h1>Other</h1>
                    <h3>I Note Something about other</h3>
                </section>
            </main>

            <Footer />
        </>
    )
}
export default Home;