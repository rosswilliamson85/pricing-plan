import React from 'react';

const Home = () => {
    return (
        <div className="app">
            <h1>Choose a plan</h1>
            <section className="card_container">
                <Card
                    card_title="Starter"
                    card_price="£19"
                    card_description="For newbies and small teams:"
                    card_projects="5 projects"
                    card_keywords="500 keywords to track"
                    card_reports="10,000 reports per day"
                    card_link="https://buy.stripe.com/5kA9Eq2st7W5d9K7st"
                />
                <Card
                    card_title="Pro"
                    card_price="£99"
                    card_description="For agencies and mid-size businesses:"
                    card_projects="15 projects"
                    card_keywords="1,500 keywords to track"
                    card_reports="30,000 reports per day"
                    card_link="https://buy.stripe.com/7sIg2O7MN1xH1r25km"
                />
                <Card
                    card_title="Enterprise"
                    card_price="£299"
                    card_description="For large agencies and enterprises:"
                    card_projects="40 projects"
                    card_keywords="5,000 keywords to track"
                    card_reports="50,000 reports per day"
                    card_link="https://buy.stripe.com/00gbMy5EF909c5G147"
                />
            </section>
        </div>
    );
};

const Card = (props) => {
    return (
        <div className="card">
            <h2 className="card_title">{props.card_title}</h2>
            <h3 className="card_price">{props.card_price}</h3>
            <h4 className="card_description">{props.card_description}</h4>
            <ul>
                <li className="card_features">{props.card_projects}</li>
                <li className="card_features">{props.card_keywords}</li>
                <li className="card_features">{props.card_reports}</li>
            </ul>
            <a className="card_button" target="_blank" rel="noopener noreferrer" href={props.card_link}>Choose Plan</a>
        </div>
    );
};

export default Home;
