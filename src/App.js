import React, { Component } from 'react';



function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const element2 = <div tabIndex="0">dksdlks;l</div>;

const element3 = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);




const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
};


const element4 = <Welcome name="Sara" />;

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
};
function App2() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}
function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}/>
    );
};
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
};
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
function formatDate(date) {
    return date.toLocaleDateString();
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
};

class App extends Component {



    handleClick = () => {
        import('./moduleA')
            .then(({ moduleA }) => {
                // Use moduleA
            })
            .catch(err => {
                // Handle failure
            });
    };

    render() {
        return (
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />
        );
    }
}

export default App;

