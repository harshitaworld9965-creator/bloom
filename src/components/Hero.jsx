import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__text">
                <p className="hero__eyebrow">No. 04 - Night Jasmine</p>

                <h1 className="hero__title">
                    <span className="hero__line">
                        <span className="hero__line-inner">Bottled at</span>
                    </span>
                    <span className="heo__line">
                        <span className="hero__line-inner">
                            <em>9:40</em> PM
                        </span>
                    </span>
                </h1>

                <p className="hero__copy">
                    Night jasmine opens only after dark. We gather it in the hour it blooms, so the scent you wear is the flower at its most alive.
                </p>

                <div className="hero__actions">
                    <a href="#notes" className="hero__button">
                        Discpver the scent
                    </a>
                    <span className="hero__meta">Eau de Parfum 50ml</span>
                </div>
            </div>

            <div className="hero__visual">
                <div className="bottle">
                    <div className="bottle__cap"></div>
                    <div className="bottle__neck"></div>
                    <div className="bottle__body">
                        <span className="bottle__label">
                            Bloom
                            <small>No. 04</small>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;