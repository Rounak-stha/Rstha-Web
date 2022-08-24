const snacks = {
    message: {
        text: '😎 Thank You for writting 😎',
        color: 'green'
    }
}

export default function Toast({ type }) {
    return <div id="snackbar">{snacks[type].text}</div>
}