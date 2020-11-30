import "./styles.css";

export function Button({ label, callback = () => { } }) {
    return <button className="btn" onClick={(e) => callback(e)}> {label} </button>;
}