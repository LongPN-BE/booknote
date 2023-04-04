import "./body.scss";
const Home = () => {
    return (
        <>
            <h1>JavaScripts</h1>
            JavaScript is the world's most popular programming language.<br />
            JavaScript is the programming language of the Web.<br />
            JavaScript is easy to learn.<br />
            This tutorial will teach you JavaScript from basic to advanced.<br />


            <div className="body-tag">
                <h2>Why Study JavaScript?</h2>
                JavaScript is one of the 3 languages all web developers must learn:<br />
                1. HTML to define the content of web pages.<br />
                2. CSS to specify the layout of web pages.<br />
                3. JavaScript to program the behavior of web pages.<br />

                <div className="note-green">
                    This tutorial covers every version of JavaScript:
                    <ul>
                        <li>The Original JavaScript ES1 ES2 ES3 (1997-1999)</li>
                        <li>The First Main Revision ES5 (2009)</li>
                        <li>The Second Revision ES6 (2015)</li>
                        <li>All Yearly Additions (2016, 2017, 2018, 2019, 2020)</li>
                    </ul>
                </div>
            </div>

            <div className="body-tag">
                <h2>Commonly Asked Questions</h2>
                <div className="hight-line-tag"> How do I get JavaScript?</div><br />
                <div className="hight-line-tag"> Where can I download JavaScript?</div><br />
                <div className="hight-line-tag"> Is JavaScript Free?</div><br />
                You don't have to get or download JavaScript.<br />
                JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.<br />
                JavaScript is free to use for everyone.<br />
            </div>
        </>
    )
}
export default Home;