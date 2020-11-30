import { formatDate } from "../../helpers";
import "./styles.css";

export function Field({ label, value, type = "text" }) {

    if (type === "date") {
        value = formatDate(value);
        type = "text";
    }

    return (
        <label className="field">
            <div> {label} </div>
            <input type={type} defaultValue={value} />
        </label>
    );

}