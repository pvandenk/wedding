import React, {useState, useEffect} from 'react';
import Input from './components/Input';
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

import "./App.css";
import eventTypes from "./config/eventTypes";
import invitees from "./config/invitees";

const steps = {
    default: "DEFAULT",
    subscribe: "SUBSCRIBE"
}

function App() {
    const [step, setStep] = useState(steps.default);
    const [user, setUser] = useState({});
    const [withPartner, setWithPartner] = useState(false);
    const [joiningChildren, setJoiningChildren] = useState([]);

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

        console.log(e.target.elements);
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
                        joiningChildren.map((child) => {
                            return (
                                <React.Fragment>
                                    <div className="u-flex">
                                        <Input
                                            key={child.id}
                                            id={`child${child.id}`}
                                            type="text"
                                            defaultValue={child.name}
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
                        }) : null
                    }

                    <Button
                        type="submit"
                        label={"Bevestigen"}
                    />
                </form>
                : null
            }
        </div>
    );
}

export default App;
