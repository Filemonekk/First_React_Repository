import './App.css';


import { Button, Text } from './ui';

function App() {
    return (
        <>
            <Text>This is my first text component</Text>
            <Button label="Click me!" onClick={() => alert("hey!")} disabled= {true} />
        </>
    );
}

export default App;
