import React, {useState, useEffect} from 'react';
import emailjs from "@emailjs/browser";
import Input from './components/Input';
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import Select from "./components/Select";

import "./App.scss";
import eventTypes from "./config/eventTypes";
import invitees from "./config/invitees";
import Textarea from "./components/Textarea";

const steps = {
    default: "DEFAULT",
    subscribe: "SUBSCRIBE",
    success: "SUCCESS"
}

const states = {
    loaded: "LOADED",
    loading: "LOADING",
}

function App() {
    const [step, setStep] = useState(steps.default);
    const [state, setState] = useState(states.loaded);
    const [user, setUser] = useState({});
    const [withPartner, setWithPartner] = useState(false);
    const [joiningChildren, setJoiningChildren] = useState([]);
    const [errors, setErrors] = useState({});
    const errorMessages = {
        fullName: "Volledige naam invullen (voor + familienaam)",
        notFound: "Naam niet gevonden in lijst"
    }

    const joinChildren = (formData) => {
        let children = [];
        for (const data of formData) {
            if (data.id.startsWith("child")) {
                children.push(data.value);
            }
        }

        return children.length > 0 ? children.join(", ") : "";
    }

    const handleSubmitName = (e) => {
        e.preventDefault();

        const userName = e.target.name.value;

        if (userName.indexOf(" ") < 0) {
            setErrors({
                name: [
                    errorMessages.fullName
                ]
            })
        } else {
            if (errors.name?.length > 0) {
                setErrors({});
            }

            for (let index = 0; index < invitees.length; index++) {
                const invitee = invitees[index];
                const isValidPartner = invitee.hasOwnProperty("partner") && invitee.partner.toUpperCase() === userName.toUpperCase();
                if (invitee.name.toUpperCase() === userName.toUpperCase() || isValidPartner) {
                    if (isValidPartner) {
                        setUser({
                            ...invitee,
                            name: invitee.partner,
                            partner: invitee.name
                        });
                    } else {
                        setUser(invitee);
                    }

                    if (errors.name?.length > 0) {
                        setErrors({});
                    }
                    setStep(steps.subscribe);

                    break;
                } else {
                    if (index === invitees.length -1) {
                        setErrors({
                            name: [
                                errorMessages.notFound
                            ]
                        })
                    }
                }
            }
        }
    }

    const handleSubscribe = (e) => {
        e.preventDefault();
        setState(states.loading);
        const formData = e.target.elements;

        if (formData.partner?.value.indexOf(" ") < 0) {
            setErrors({
                partner: [
                    errorMessages.fullName
                ]
            })

            setState(states.loaded);
            return;
        }

        const templateParams = {
            name: formData.name.value,
            partner: formData.partner ? formData.partner.value : "",
            children: joinChildren(formData),
            event: eventTypes[formData.event.value] ?? formData.event.value,
            comments: formData.comments.value
        }

        emailjs.send(
            "service_hanzq3q",
            "template_wks37p9",
            templateParams,
            "5AxzvzQz-HwQmwsd0"
        ).then(() => {
            setStep(steps.success);
            setState(states.loaded);
        })
    }

    useEffect(() => {
        if (user.partner) {
            setWithPartner(true);
        }
    }, [user.partner, user.event])

    useEffect(() => {
        if (user.children) {
            setJoiningChildren(user.children);
        }
    }, [user.children])

    return (
        <div className={"l-container u-center-page"}>
            {step === steps.default ?
                <form onSubmit={handleSubmitName}>
                    <Input
                        classes={"c-input--large"}
                        id={"name"}
                        type="text"
                        placeholder={"Voornaam + naam"}
                        errors={errors.name}
                    />
                    <Button
                        type="submit"
                        label={"Volgende"}
                    />
                </form>
                : null
            }

            {step === steps.subscribe ?
                <form onSubmit={handleSubscribe}>
                    <Input
                        id={"name"}
                        label={"Naam"}
                        type="text"
                        defaultValue={user.name}
                        disabled={true}
                    />

                    {/*Partner*/}
                    {user.partner ?
                        <Checkbox
                            id={"withPartner"}
                            label={"Partner komt mee"}
                            checked={withPartner}
                            onChange={() => setWithPartner(!withPartner)}
                        /> : null
                    }

                    {withPartner ?
                        <Input
                            id={"partner"}
                            label={"Partner"}
                            type="text"
                            defaultValue={user.partner}
                            errors={errors.partner}
                            disabled={true}
                        /> : null
                    }

                    {/*Children*/}
                    {user.children ?
                        <Checkbox
                            id={"withChildren"}
                            label={"Kinderen komen mee"}
                            checked={joiningChildren.length > 0}
                            onChange={() => {
                                if (joiningChildren.length > 0) {
                                    setJoiningChildren([]);
                                } else {
                                    setJoiningChildren(user.children);
                                }
                            }}
                        /> : null
                    }

                    {joiningChildren.length > 0 ?
                        <div className={"u-flex"} style={{gap: "2rem", flexDirection: "column"}}>
                            {
                                joiningChildren.map((child) => {
                                    return (
                                        <React.Fragment>
                                            <div className="u-flex" key={child.name.toLowerCase().replace(' ', '_')}>
                                                <Input
                                                    id={`child_${child.name.toLowerCase().replace(' ', '_')}`}
                                                    type="text"
                                                    defaultValue={child.name}
                                                    disabled={true}
                                                />
                                                <Button
                                                    type="button"
                                                    label={"X"}
                                                    onClick={() => {
                                                        setJoiningChildren(
                                                            joiningChildren.filter(c =>
                                                                c.name !== child.name
                                                            )
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </React.Fragment>
                                    )
                            })}
                        </div> : null
                    }

                    {/*Event*/}
                    {user.event === eventTypes.all ?
                        <Select
                            id={"event"}
                            label="Ik kom naar"
                            selected={"all"}
                            options={Object.keys(eventTypes).map((eventKey) => {
                                return {
                                    value: eventKey,
                                    label: eventTypes[eventKey],
                                }
                            })}
                        />
                        : null
                    }

                    {user.event === eventTypes.reception ?
                        <Input
                            id={"event"}
                            label="Ik kom naar"
                            defaultValue={eventTypes.reception}
                            disabled={true}
                        />
                        : null
                    }

                    {/*Comments*/}
                    <Textarea
                        id={"comments"}
                        label={"Extra opmerkingen"}
                        placeholder={"vegetarisch, lactose-intolerantie, vragen, ..."}
                    />

                    <Button
                        loading={state === states.loading}
                        type="submit"
                        label={"Bevestigen"}
                    />
                </form>
                : null
            }

            {step === steps.success ?
                <p className={"paragraph paragraph--thanks"}>
                    Bedankt om er bij te zijn!<br/>
                    <i>27/04/2024</i>
                </p>
                : null
            }
        </div>
    );
}

export default App;
