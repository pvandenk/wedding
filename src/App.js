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

function App() {
    const [step, setStep] = useState(steps.default);
    const [user, setUser] = useState({});
    const [withPartner, setWithPartner] = useState(false);
    const [joiningChildren, setJoiningChildren] = useState([]);

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

        invitees.forEach(function (invitee) {
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

                setStep(steps.subscribe);
            }
        });
    }

    const handleSubscribe = (e) => {
        e.preventDefault();

        const formData = e.target.elements;
        const templateParams = {
            name: formData.name.value,
            partner: formData.partner ? formData.partner.value : "",
            children: joinChildren(formData),
            event: formData.event.value.toLowerCase(),
            comments: formData.comments.value
        }

        emailjs.send(
            "service_hanzq3q",
            "template_wks37p9",
            templateParams,
            "5AxzvzQz-HwQmwsd0"
        ).then(() => {
            setStep(steps.success);
        })
    }

    useEffect(() => {
        if (user.partner || (user.event === eventTypes.diner)) {
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
                        placeholder={"Naam"}
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
                    {user.event === eventTypes.diner ?
                        <Checkbox
                            id={"withPartner"}
                            label={user.partner ? "Partner komt mee" : "Ik kom met een +1!"}
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
                        <div className={"u-flex"} style={{gap: "2rem"}}>
                            {
                                joiningChildren.map((child) => {
                                    return (
                                        <React.Fragment>
                                            <div className="u-flex">
                                                <Input
                                                    key={child.id}
                                                    id={`child${child.id}`}
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
                                                                c.id !== child.id
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
                    {user.event === eventTypes.diner ?
                        <Select
                            id={"event"}
                            label="Ik kom naar"
                            options={[
                                {
                                    value: "Beide receptie & diner",
                                    label: "Beide receptie & diner"
                                },
                                {
                                    value: "Enkel receptie",
                                    label: "Enkel receptie"
                                },
                                {
                                    value: "Enkel diner & avondfeest",
                                    label: "Enkel diner & avondfeest"
                                }
                            ]}
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
                        type="submit"
                        label={"Bevestigen"}
                    />
                </form>
                : null
            }

            {step === steps.success ?
                <p className={"paragraph paragraph--thanks"}>
                    Bedankt om er bij te zijn!
                </p>
                : null
            }
        </div>
    );
}

export default App;
