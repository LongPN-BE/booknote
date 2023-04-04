import "./body.scss";
const Home = () => {
    return (
        <>

            <h1> JavaScripts Syntax</h1>

            <div className="body-tag">
                <h3> JavaScript Values</h3>
                The JavaScript syntax defines two types of values:
                <ul>
                    <li>Fixed values</li>
                    <li>Variable values</li>
                </ul>
                Fixed values are called Literals.<br />
                Variable values are called Variables.<br />
            </div>

            <div className="body-tag">
                <h3> JavaScript Variables</h3>
                In a programming language, variables are used to store data values.<br />
                JavaScript uses the keywords var, let and const to declare variables.<br />
                An equal sign is used to assign values to variables.
            </div>

            <div className="body-tag">
                <h3> JavaScript Expressions</h3>
                An expression is a combination of values, variables, and operators, which computes to a value.<br />
                The computation is called an evaluation.
            </div>

            <div className="body-tag">
                <h3> JavaScript Keywords</h3>
                JavaScript keywords are used to identify actions to be performed.
            </div>

            <div className="body-tag">
                <h3>JavaScript Comments</h3>
                Not all JavaScript statements are "executed".<br />
                Code after double slashes // or between /* and */ is treated as a comment.
            </div>


            <div className="body-tag">
                <h3>JavaScript Identifiers / Names</h3>
                Identifiers are JavaScript names.<br />
                Identifiers are used to name variables and keywords, and functions.<br />
                The rules for legal names are the same in most programming languages.<br />
                A JavaScript name must begin with:
                <ul>
                    <li>A letter (A-Z or a-z)</li>
                    <li>A dollar sign ($)</li>
                    <li>Or an underscore (_)</li>
                </ul>
                Subsequent characters may be letters, digits, underscores, or dollar signs.
                <p className="note"><h4>Note</h4>
                    Numbers are not allowed as the first character in names.<br />
                    This way JavaScript can easily distinguish identifiers from numbers.
                </p>
            </div>
        </>
    )
}
export default Home;