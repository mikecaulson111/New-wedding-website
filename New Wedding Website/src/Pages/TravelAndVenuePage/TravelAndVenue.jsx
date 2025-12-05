import "./TravelAndVenue.css";

export default function TravelAndVenue() {
    return (
        <>
            <h1>Travel and Venue</h1>

            <p className="times-32 bold upper-margin">Venue:</p>
            <p className="times-32">Briarhurst Manor in Manitou Springs, Colorado</p>

            <p className="times-32 bold upper-margin">Travel:</p>
            <p className="times-26 underline">Airports:</p>
            <ul>
                <li>
                    <a
                        href="https://www.google.com/search?q=denver+international+airport"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <h3>Denver International Airport</h3>
                        </a>
                    {/* Denver International Airport */}
                    <p className="bullet-points-text">Notes: will require a 1.5-2 hour drive to the springs but flights from all major airlines</p>
                </li>
                <li>
                    <a
                        href="https://www.google.com/search?q=colorado+springs+airport"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <h3>Colorado Springs Airport</h3>
                    </a>
                    <p className="bullet-points-text">Notes: Smaller airport but much closer only a 25 min drive</p>
                    <p className="bullet-points-text">United operates a couple flights there a day</p>
                </li>
            </ul>
            <div style={{ height: "15vh" }}></div>
        </>
    )
}
