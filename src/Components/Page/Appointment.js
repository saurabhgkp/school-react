import React from 'react'

const Appointment = () => {
    return (
        <>

            <>
                <div className="container-xxl py-5 page-header position-relative mb-5">
                    <div className="container py-5">
                        <h1 className="display-2 text-white animated slideInDown mb-4">
                            Appointment
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
                                    Appointment
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Appointment Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="bg-light rounded">
                            <div className="row g-0">
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="h-100 d-flex flex-column justify-content-center p-5">
                                        <h1 className="mb-4">Make Appointment</h1>
                                        <form>
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control border-0"
                                                            id="gname"
                                                            placeholder="Gurdian Name"
                                                        />
                                                        <label htmlFor="gname">Gurdian Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="email"
                                                            className="form-control border-0"
                                                            id="gmail"
                                                            placeholder="Gurdian Email"
                                                        />
                                                        <label htmlFor="gmail">Gurdian Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control border-0"
                                                            id="cname"
                                                            placeholder="Child Name"
                                                        />
                                                        <label htmlFor="cname">Child Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control border-0"
                                                            id="cage"
                                                            placeholder="Child Age"
                                                        />
                                                        <label htmlFor="cage">Child Age</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea
                                                            className="form-control border-0"
                                                            placeholder="Leave a message here"
                                                            id="message"
                                                            style={{ height: 100 }}
                                                            defaultValue={""}
                                                        />
                                                        <label htmlFor="message">Message</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button
                                                        className="btn btn-primary w-100 py-3"
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-6 wow fadeIn"
                                    data-wow-delay="0.5s"
                                    style={{ minHeight: 400 }}
                                >
                                    <div className="position-relative h-100">
                                        <img
                                            className="position-absolute w-100 h-100 rounded"
                                            src="img/appointment.jpg"
                                            style={{ objectFit: "cover" }}
                                        />
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

export default Appointment