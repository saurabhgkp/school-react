import React from 'react'

const Facility = () => {
    return (
        <>
            <>
                {/* Page Header End */}
                <div className="container-xxl py-5 page-header position-relative mb-5">
                    <div className="container py-5">
                        <h1 className="display-2 text-white animated slideInDown mb-4">
                            Facilities
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
                                    Facilities
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Facilities Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div
                            className="text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: 600 }}
                        >
                            <h1 className="mb-3">School Facilities</h1>
                            <p>
                                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                                lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
                                dolor duo.
                            </p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="facility-item">
                                    <div className="facility-icon bg-primary">
                                        <span className="bg-primary" />
                                        <i className="fa fa-bus-alt fa-3x text-primary" />
                                        <span className="bg-primary" />
                                    </div>
                                    <div className="facility-text bg-primary">
                                        <h3 className="text-primary mb-3">School Bus</h3>
                                        <p className="mb-0">
                                            Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                                            ipsum sit
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="facility-item">
                                    <div className="facility-icon bg-success">
                                        <span className="bg-success" />
                                        <i className="fa fa-futbol fa-3x text-success" />
                                        <span className="bg-success" />
                                    </div>
                                    <div className="facility-text bg-success">
                                        <h3 className="text-success mb-3">Playground</h3>
                                        <p className="mb-0">
                                            Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                                            ipsum sit
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="facility-item">
                                    <div className="facility-icon bg-warning">
                                        <span className="bg-warning" />
                                        <i className="fa fa-home fa-3x text-warning" />
                                        <span className="bg-warning" />
                                    </div>
                                    <div className="facility-text bg-warning">
                                        <h3 className="text-warning mb-3">Healthy Canteen</h3>
                                        <p className="mb-0">
                                            Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                                            ipsum sit
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="facility-item">
                                    <div className="facility-icon bg-info">
                                        <span className="bg-info" />
                                        <i className="fa fa-chalkboard-teacher fa-3x text-info" />
                                        <span className="bg-info" />
                                    </div>
                                    <div className="facility-text bg-info">
                                        <h3 className="text-info mb-3">Positive Learning</h3>
                                        <p className="mb-0">
                                            Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                                            ipsum sit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>



        </>
    )
}

export default Facility