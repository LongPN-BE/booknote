const Home = () => {
    return (
        <>
            <h1>JavaScript Variables</h1>

            <div className="note-green">
                4 Ways to Declare a JavaScript Variable:
                <ul>
                    <li>Using <div className="high-line-word"> ar</div></li>
                    <li>Using <div className="high-line-word">let</div></li>
                    <li>Using <div className="high-line-word">const</div></li>
                    <li>Using <div className="high-line-word">nothing</div></li>
                </ul>
            </div>
            <div className="body-tag">
                <h3>When to Use JavaScript var?</h3>
                <div className="note">
                    Always declare JavaScript variables with <div className="high-line-word"> var</div>,<div className="high-line-word">let</div>, or <div className="high-line-word">const</div>.<br />
                    The <div className="high-line-word"> var</div>, keyword is used in all JavaScript code from 1995 to 2015.<br />
                    The <div className="high-line-word">let</div> and <div className="high-line-word">const</div> keywords were added to JavaScript in 2015.<br />
                    If you want your code to run in older browsers, you must use var.<br />
                </div>
            </div >
            <div className="body-tag">
                <h3>When to Use JavaScript const?</h3>
                If you want a general rule: always declare variables with <div className="high-line-word">const</div>.<br />
                If you think the value of the variable can change, use <div className="high-line-word">let</div>.<br />
                <div className="note">
                    <h3>Note</h3>
                    Variables are containers for storing values.
                </div>
            </div>
            <div className="body-tag">
                <h3>JavaScript Identifiers</h3>
                All JavaScript variables must be identified with unique names.<br />
                These unique names are called identifiers.<br />
                Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).<br />
                The general rules for constructing names for variables (unique identifiers) are:
                <ul>
                    <li>Names can contain letters, digits, underscores, and dollar signs.</li>
                    <li>Names must begin with a letter.</li>
                    <li>Names can also begin with $ and _ (but we will not use it in this tutorial).</li>
                    <li>Names are case sensitive (y and Y are different variables).</li>
                    <li>Reserved words (like JavaScript keywords) cannot be used as names.</li>
                </ul>
                <div className="note">
                    <h3>Note</h3>
                    JavaScript identifiers are case-sensitive.
                </div>
            </div>
            <div className="body-tag">
                <h3>The Assignment Operator</h3>
                In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.<br />
                <div className="note">
                    <h3>Note</h3>
                    The "equal to" operator is written like <div className="high-line-word">==</div> in JavaScript.
                </div>

            </div>
            <div className="body-tag">
                <h3>JavaScript Data Types</h3>
                JavaScript variables can hold numbers like 100 and text values like "John Doe".<br />
                In programming, text values are called text strings.<br />
                JavaScript can handle many types of data, but for now, just think of numbers and strings.<br />
                Strings are written inside double or single quotes. Numbers are written without quotes.<br />
                If you put a number in quotes, it will be treated as a text string.<br />
            </div>
            <div className="body-tag">
                <h3>Declaring a JavaScript Variable</h3>
                Creating a variable in JavaScript is called "declaring" a variable.<br />
                After the declaration, the variable has no value (technically it is <div className="high-line-word">undefined</div>).<br />
                <div className="note">
                    <h3>Note</h3>
                    It's a good programming practice to declare all variables at the beginning of a script.
                </div>

            </div>
            <div className="body-tag">
                <h3>One Statement, Many Variables</h3>
                You can declare many variables in one statement.
            </div>
            <div className="body-tag">
                <h3>Value = undefined</h3>
                In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.<br />
                A variable declared without a value will have the value <div className="high-line-word">undefined</div>.<br />
            </div>
            <div className="body-tag">
                <h3>Re-Declaring JavaScript Variables</h3>
                If you re-declare a JavaScript variable declared with <div className="high-line-word">var</div>, it will not lose its value.
                <div className="note">
                    <h3>Note</h3>
                    You cannot re-declare a variable declared with <div className="high-line-word">let</div> or <div className="high-line-word">const</div>.
                </div>

                <div className="note">
                    <h3>Note</h3>
                    If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
                </div>

            </div>
            <div className="body-tag">
                <h3>JavaScript Dollar Sign $</h3>
                Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:<br />
                Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.<br />
                In the JavaScript library jQuery, for instance, the main function <div className="high-line-word">$</div> is used to select HTML elements. In jQuery <div className="high-line-word">$("p");</div> means "select all p elements".
            </div>
            <div className="body-tag">
                <h3>JavaScript Underscore (_)</h3>
                Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:<br />
                Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
            </div>
        </>
    )
}

export default Home;