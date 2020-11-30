import React, { useEffect, useState } from "react";
import { getInfoProfile } from "../../api";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { DetailPanel } from "../DetailPanel";
import "./styles.css";

export function Profile() {

    const profileDefault = {
        image: '',
        userName: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
    };

    const [profile, setProfile] = useState(profileDefault);

    useEffect(() => {
        getAndUpdateProfile();
    }, []);

    function getAndUpdateProfile() {
        getInfoProfile().then((data) => {
            const result = data.results[0];
            const newProfile = {
                ...profile,
                image: result.picture.large,
                userName: `${result.name.title} ${result.name.first} ${result.name.last}`,
                email: result.email,
                phone: result.phone,
                gender: result.gender,
                dateOfBirth: result.dob.date,
            };
            setProfile(newProfile);
        });
    }

    function onClickButton() {
        setProfile(profileDefault);
        getAndUpdateProfile();
    }

    return (
        <>
            <div className="profile">
                <Avatar img={profile.image} />
                <DetailPanel profile={profile} />
            </div>
            <div style={{ display: 'grid', placeItems: 'center', padding: '20px' }}>
                <Button label="Atualiza" callback={onClickButton} />
            </div>
        </>
    );
}