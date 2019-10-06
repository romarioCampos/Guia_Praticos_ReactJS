import React from 'react';
import ReactDOM from 'react-dom';

/*
const myfirslelement = <h1>Hello React!</h1>

ReactDOM.render(myfirslelement, document.getElementById('root'))
*/

/* -- Show 'Hello'
ReactDOM.render(<p>Hello</p>, document.getElementById('root'))
*/

/* -- Show a simple table with names
const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</th>
        </tr>
    </table>
)

ReactDOM.render(myelement, document.getElementById('root'))
*/

/*
ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'))
*/

//Click the "index.htm" tab to see the container "sandy".

/*
You are now watching a React file
through our 'Show React' tool.
Click the tab to check out
the 'index.html' file as well.
*/

/*
    ----- REACT JSX -----
*/

/* -- Show JSX 'I love JSX'
const myelement = <h1>I love JSX!</h1>

ReactDOM.render(myelement, document.getElementById("root"))
*/

/* ----- JSX 'I do not use JSX!' -----
const myelement = React.createElement('h1', {}, 'I do not use JSX!');

ReactDOM.render(myelement, document.getElementById('root'))
*/

/* ----- JSX 'React is 10 times better with JSX' -----
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

ReactDOM.render(myelement, document.getElementById('root'))
*/

/* ----- A table fruits -----
const myelement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
)

ReactDOM.render(myelement, document.getElementById('root'))
*/

/* ----- Element h1 -----
const myelement = (
    <div>
        <h1>I am a Header.</h1>
        <h1>I am a Header too.</h1>
    </div>
);

ReactDOM.render(myelement, document.getElementById('root'))
*/

/* ----- Element Input -----
const myelement = <input type="text" />;

ReactDOM.render(myelement, document.getElementById('root'))
*/

/*
    ----- REACT Components -----
*/

/* ----- Class Car -----
class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>
    }
}
ReactDOM.render(<Car />, document.getElementById('root'))
*/

/* ----- Also have a class Car -----
function Car() {
    return <h2>Hi, I am also a Car!</h2>;
}

ReactDOM.render(<Car />, document.getElementById('root'))
*/

/* ----- Red car -----
class Car extends React.Component {
    constructor() {
        super()
        this.state = { color: "red" }
    }
    render() {
        return <h2>I am a {this.state.color} Car!</h2>
    }
}

ReactDOM.render(<Car />, document.getElementById('root'))
*/

/* ----- Also red car -----
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!</h2>;
    }
}

ReactDOM.render(<Car color="red" />, document.getElementById('root'))
*/

/* ----- Two classes Car and Garage -----
class Car extends React.Component {
    render() {
        return <h2>I am a Car!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'))
*/

/* --- Tried agains
class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

export default Car;
*/

/*
Notice that you now have three files in your project:
"App.js", "index.js", and "index.html".
*/

/*
    ----- REACT PROPS -----
*/

/* Class Car
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2>
    }
}

const myelement = <Car brand="Ford" />;

ReactDOM.render(myelement, document.getElementById('root'))
*/

/* - Classes Car and Garage
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand="Ford" />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'))
*/

/* - Class car with brand={carname}
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        const carname = "Ford";
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand={carname} />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'))
*/

/* - Class Car 'Mustang'
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand.model}!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        const carinfo = { name: "Ford", model: "Mustang" };
        return (
            <div>
                <h1>Who lives in my garage?</h1>
                <Car brand={carinfo} />
            </div>
        );
    }
}
ReactDOM.render(<Garage />, document.getElementById('root'))
*/

/*
    ----- REACT STATE -----
*/

/* Element <h1> and <p>
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
          </p>
            </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById('root'))
*/

/* -- Change color of the car
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: " Mustang ",
            color: "red ",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({ color: "blue " });
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
          </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById('root'))
*/

/*
    ----- REACT LIFECYCLE -----
*/

/* --- Show the favorite color
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { favoritecolor: "red" }
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* -- Change the color on ReactDOM favcolor=""
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { favoritecolor: "red" }
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.favcol }
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        )
    }
}

ReactDOM.render(<Header favcol="yellow" />, document.getElementById('root'))
*/

/* The Header component
class Header extends React.Component {
    render() {
        return (
            <h1>This is the content of the Header component</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* -- componentDidMount()
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* -- Can't change the color, getDerivedStateFromProps()
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.favcol };
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Header favcol="yellow" />, document.getElementById('root'));
*/

/*
This example has a button that changes the favorite color to blue,
but since the getDerivedStateFromProps() method is called,
the favorite color is still rendered as yellow
(because the method updates the state
with the color from the favcol attribute).
*/

/* shouldComponentUpdate() return false
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    shouldComponentUpdate() {
        return false;
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* -- shouldComponentUpdate() return true
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* -- change()
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* --
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* -- Changed the color
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* -- Updated favorite color
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }
    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="mydiv"></div>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
*/

/* -- Deleted Header
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }
    delHeader = () => {
        this.setState({ show: false });
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('root'))
*/

/*
    ----- REACT EVENTS -----
*/

/* -- Take a shot() --
function shoot() {
    alert("Great Shot!")
}

const myelement = (
    <button onClick={shoot}>Take the shot!</button>
)


ReactDOM.render(myelement, document.getElementById('root'))
*/

/*
class Football extends React.Component {
    shoot = () => {
        alert(this);
        //--
        The 'this' keyword refers to the component object
        --//
    }
    render() {
        return (
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'))
*/

/* -- The same example with a constructor
class Football extends React.Component {
    constructor(props) {
        super(props)
        this.shoot = this.shoot.bind(this)
    }
    shoot() {
        alert(this);
        //--
        Thanks to the binding in the constructor function,
        the 'this' keyword now refers to the component object
        --//
    }
    render() {
        return (
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'))
*/

/* -- The shoot 'Goal'
class Football extends React.Component {
    shoot = (a) => {
        alert(a);
    }
    render() {
        return (
            <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'))
*/

/*
class Football extends React.Component {
    shoot(a) {
        alert(a);
    }
    render() {
        return (
            <button
                onClick={this.shoot.bind(this, "Goal")}
            >Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'))
*/

/* -- shoot 'click'
class Football extends React.Component {
    shoot = (a, b) => {
        alert(b.type);
        //--
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        --//
    }
    render() {
        return (
            <button
                onClick={(ev) => this.shoot("Goal", ev)}
            >Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'))
*/

/*
class Football extends React.Component {
    shoot = (a, b) => {
        alert(b.type);
        //--
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        --//
    }
    render() {
        return (
            <button
                onClick={this.shoot.bind(this, "Goal")}
            >Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'))
*/

/*
    ----- REACT FORMS -----
*/

/* -- input
class MyForm extends React.Component {
    render() {
        return (
            <form>
                <h1>Hello</h1>
                <p>Enter your name:</p>
                <input
                    type="text"
                />
            </form>
        )
    }
}
ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/* -- Show the name next to "Hello"
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/*
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    render() {
        let header = '';
        if (this.state.username) {
            header = <h1>Hello {this.state.username}</h1>;
        } else {
            header = '';
        }
        return (
            <form>
                {header}
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
            </form>
        )
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/*
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name, and submit:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <input
                    type='submit'
                />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/* -- Enter your name and age
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/*
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age") {
            if (!Number(val)) {
                alert("Your age must be a number");
            }
        }
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/*
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("Your age must be a number");
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <br />
                <br />
                <input type='submit' />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/*
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
            if (val != "" && !Number(val)) {
                err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage}
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/* -- Show textarea
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'The content of a textarea goes in the value attribute'
        };
    }
    render() {
        return (
            <form>
                <textarea value={this.state.description} />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/* Show selected
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mycar: 'Volvo'
        };
    }
    render() {
        return (
            <form>
                <select value={this.state.mycar}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
*/

/*
    ----- REACT CSS -----
*/

/* Header with red color
class MyHeader extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Hello Style!</h1>
                <p>Add a little style!</p>
            </div>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'))
*/

/* -- Header with backgroundColor:
class MyHeader extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
                <p>Add a little style!.</p>
            </div>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'))
*/

/* --
class MyHeader extends React.Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <h1 style={mystyle}>Hello Style!</h1>
                <p>Add a little style!</p>
            </div>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'))
*/

/*
class MyHeader extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Style!</h1>
                <p>Add a little style!.</p>
            </div>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'))
*/

/*
Notice that you now have three files in your project:
'index.js', 'index.html', and 'App.css'.
*/