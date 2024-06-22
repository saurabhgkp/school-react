import React from 'react'

const Testimonial = () => {
    return (
        <>
            <>
                <div className="container-xxl py-5 page-header position-relative mb-5">
                    <div className="container py-5">
                        <h1 className="display-2 text-white animated slideInDown mb-4">
                            Testimonial
                        </h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li className="breadcrumb-item text-white active" aria-current="page">
                                    Testimonial
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Testimonial Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div
                            className="text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: 600 }}
                        >
                            <h1 className="mb-3">Our Clients Say!</h1>
                            <p>
                                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                                lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
                                dolor duo.
                            </p>
                        </div>
                        <div
                            className="owl-carousel testimonial-carousel wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="testimonial-item bg-light rounded p-5">
                                <p className="fs-5">
                                    Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                    rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd
                                    kasd erat eos
                                </p>
                                <div
                                    className="d-flex align-items-center bg-white me-n5"
                                    style={{ borderRadius: "50px 0 0 50px" }}
                                >
                                    <img
                                        className="img-fluid flex-shrink-0 rounded-circle"
                                        src="img/testimonial-1.jpg"
                                        style={{ width: 90, height: 90 }}
                                    />
                                    <div className="ps-3">
                                        <h3 className="mb-1">Client Name</h3>
                                        <span>Profession</span>
                                    </div>
                                    <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-5">
                                <p className="fs-5">
                                    Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                    rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd
                                    kasd erat eos
                                </p>
                                <div
                                    className="d-flex align-items-center bg-white me-n5"
                                    style={{ borderRadius: "50px 0 0 50px" }}
                                >
                                    <img
                                        className="img-fluid flex-shrink-0 rounded-circle"
                                        src="img/testimonial-2.jpg"
                                        style={{ width: 90, height: 90 }}
                                    />
                                    <div className="ps-3">
                                        <h3 className="mb-1">Client Name</h3>
                                        <span>Profession</span>
                                    </div>
                                    <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-5">
                                <p className="fs-5">
                                    Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                    rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd
                                    kasd erat eos
                                </p>
                                <div
                                    className="d-flex align-items-center bg-white me-n5"
                                    style={{ borderRadius: "50px 0 0 50px" }}
                                >
                                    <img
                                        className="img-fluid flex-shrink-0 rounded-circle"
                                        src="img/testimonial-3.jpg"
                                        style={{ width: 90, height: 90 }}
                                    />
                                    <div className="ps-3">
                                        <h3 className="mb-1">Client Name</h3>
                                        <span>Profession</span>
                                    </div>
                                    <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default Testimonial