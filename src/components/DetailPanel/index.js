import { Field } from "../Field";
import "./styles.css";

export function DetailPanel({ profile }) {

    return (
        <div className="detail-panel">
            <Field label="User Name" value={profile.userName} />
            <Field label="E-mail" type="email" value={profile.email} />
            <Field label="Phone" type="tel" value={profile.phone} />
            <Field label="Gender" value={profile.gender} />
            <Field label="Date of Birth" type="date" value={profile.dateOfBirth} />
        </div>
    );

}