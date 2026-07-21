import './StayPage.css';

function StayPage() {
    return (
        <main className="main">
            <span className="status">Booking • Confirmed</span>
            <article className="header-buttons">
                <h1 className="header-buttons__title">Bienvenue, <span>Lucia</span></h1>
                <div className="buttons">
                    <button className="buttons__item">Print receipt</button>
                    <button className="buttons__item buttons__item--important">Add to calendar</button>
                </div>
            </article>
            <section className="cards">
                
            </section>
        </main>
    );
}

export default StayPage;