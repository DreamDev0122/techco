import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/Header2/Header2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import PageTitle from '../../components/pagetitle/PageTitle'
const PrivacyPage = (props) => {

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={"Terms & Privacy Policy"} />
                <section className="policy_section section_space bg-light">
                    <div className="container">
                        <div className="block">
                            <a target="_blank" rel="noopener noreferrer" href="https://app.termly.io/policy-viewer/policy.html?policyUUID=e933380b-1119-4ccf-9b7d-79ad76f2a1e4">
                                <span>
                                    <strong>Our Privacy Notice  </strong>
                                </span>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>
                        <div className="block">
                            <a target="_blank" rel="noopener noreferrer" href="https://app.termly.io/policy-viewer/policy.html?policyUUID=9b7e695f-df43-46f2-a0c2-2ec12858356b">
                                <span>
                                    <strong>Our Cookie Policy  </strong>
                                </span>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>

                        <div className="block">
                            <a target="_blank" rel="noopener noreferrer" href="https://app.termly.io/policy-viewer/policy.html?policyUUID=6d0e0ca8-ba06-4501-a927-d95ffaf4f95a">
                                <span>
                                    <strong>Our Terms and Conditions  </strong>
                                </span>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>

                        <div className="block">
                            <a target="_blank" rel="noopener noreferrer" href="https://app.termly.io/policy-viewer/policy.html?policyUUID=f9794e2c-b14f-4d93-a286-4820c8cf0e4e">
                                <span>
                                    <strong>Our Disclaimer  </strong>
                                </span>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>

                        <div className="block">
                            <a target="_blank" rel="noopener noreferrer" href="https://app.termly.io/policy-viewer/policy.html?policyUUID=0271adba-bbc6-46ea-bcf9-12f0f75e2a8b">
                                <span>
                                    <strong>Our Acceptable Use Policy  </strong>
                                </span>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>

                        <br/>  
                    </div>
                </section>
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default PrivacyPage;