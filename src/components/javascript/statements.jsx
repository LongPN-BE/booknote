import "./body.scss";
const Home = () => {
    return (
        <>
            <h1>JavaScript Statements</h1>
            <div className="body-tag">
                <h3> JavaScript Programs</h3>
                A computer program is a list of "instructions" to be "executed" by a computer.<br />
                In a programming language, these programming instructions are called statements.<br />
                A JavaScript program is a list of programming statements.<br />
            </div>

            <div className="body-tag">
                <h3> JavaScript Statements</h3>
                JavaScript statements are composed of:
                Values, Operators, Expressions, Keywords, and Comments.<br />
                This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":<br />
            </div>
            <div className="body-tag">
                Most JavaScript programs contain many JavaScript statements.<br />
                The statements are executed, one by one, in the same order as they are written.<br />
            </div>
            <div className="body-tag">
                <h3>Semicolons ;</h3>
                Semicolons separate JavaScript statements.<br />
            </div>
            <div className="body-tag">
                <h3>JavaScript White Space</h3>
                JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.<br />
            </div>
            <div className="body-tag">
                <h3>JavaScript Line Length and Line Breaks</h3>
                For best readability, programmers often like to avoid code lines longer than 80 characters.<br />
            </div>
            <div className="body-tag">
                <h3>JavaScript Code Blocks</h3>
                JavaScript statements can be grouped together in code blocks, inside curly brackets.<br />
                The purpose of code blocks is to define statements to be executed together.<br />
            </div>
            <div className="body-tag">
                <h3>JavaScript Keywords</h3>
                JavaScript statements often start with a keyword to identify the JavaScript action to be performed.<br />
                Our Reserved Words Reference lists all JavaScript keywords.<br />
            </div>
            <div className="body-tag">
                Here is a list of some of the keywords you will learn about in this tutorial:<br />
                <table>
                    <thead>
                        <th>Keyword</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        <td>var</td>
                        <td>Declares a variable</td>
                    </tbody>
                    <tbody>
                        <td>let</td>
                        <td>Declares a block variable</td>
                    </tbody>
                    <tbody>
                        <td>const</td>
                        <td>Declares a block constant</td>
                    </tbody>
                    <tbody>
                        <td>if</td>
                        <td>Marks a block of statements to be executed on a condition</td>
                    </tbody>
                    <tbody>
                        <td>switch</td>
                        <td>Marks a block of statements to be executed in different cases</td>
                    </tbody>
                    <tbody>
                        <td>for</td>
                        <td>Marks a block of statements to be executed in a loop</td>
                    </tbody>
                    <tbody>
                        <td>function</td>
                        <td>Declares a function</td>
                    </tbody>
                    <tbody>
                        <td>return</td>
                        <td>Exits a function</td>
                    </tbody>
                    <tbody>
                        <td>try</td>
                        <td>Implements error handling to a block of statements</td>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Home;