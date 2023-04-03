import Body from "../../components/owner/home"
import NavBar from "../../components/navbar/navbar"
import SlideBar from "../../components/slidebar/slidebar"
import Footer from "../../components/footer/footer"
import { items } from "../../dataSource";
import "./home.scss";

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
                <h1>Buil For Your Life</h1>
                <h3>I build this for my note somethings that i founded</h3>
                <div class="et-hero-tabs-container">
                    <a class="et-hero-tab" href="#tab-es6">JavaScript</a>
                    <a class="et-hero-tab" href="#tab-react">React</a>
                    {/* <a class="et-hero-tab" href="#tab-flexbox">Flexbox</a>
                    <a class="et-hero-tab" href="#tab-angular">Angular</a> */}
                    <a class="et-hero-tab" href="#tab-other">Other</a>
                </div>
            </section>


            <main class="et-main">
                <section class="et-slide" id="tab-es6">
                    <h1>JavaScript</h1>
                    <h3>I Note Something about JavaScript Beginner</h3>
                    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum,
                        altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
                        Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum,
                        altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                        Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <a class="et-slide-tab" href="js">Click To Welcome JavaScript Source</a>
                </section>

                <section class="et-slide" id="tab-react">
                    <h1>React</h1>
                    <h3>I Note Something about React Beginner</h3>
                </section>

                <section class="et-slide" id="tab-other">
                    <h1>Other</h1>
                    <h3>I Note Something about other</h3>
                </section>

                {/* <section class="et-slide" id="tab-flexbox">
                    <h1>Flexbox</h1>
                    <h3>something about flexbox</h3>
                </section> */}



                {/* <section class="et-slide" id="tab-angular">
                    <h1>Angular</h1>
                    <h3>something about angular</h3>
                </section> */}
            </main>

            <Footer />
        </>
    )
}
export default Home;