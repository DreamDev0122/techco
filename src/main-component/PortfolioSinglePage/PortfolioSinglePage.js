import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Project from '../../api/project';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import psImg from '../../images/portfolio/portfolio_details_image_1.webp'
import icon from '../../images/icons/icon_check_3.svg'


const PortfolioSinglePage = (props) => {
    const { slug } = useParams()
    const PortfolioDetails = Project.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // Helper function to get related projects based on category
    const getRelatedProjects = () => {
        return Project.filter(project =>
            project.category === PortfolioDetails.category &&
            project.slug !== PortfolioDetails.slug
        ).slice(0, 2);
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={PortfolioDetails.title} pagesub={'Details 😃'} pageTop={'Portfolio'} />
                <section className="portfolio_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image">
                            <img
                                src={PortfolioDetails.pImg}
                                alt={PortfolioDetails.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '2580px',
                                    aspectRatio: '2580/1080'
                                }}
                            />
                        </div>
                        <h2 className="details_item_title">{PortfolioDetails.title}</h2>
                        <p>{PortfolioDetails.description}</p>
                        <hr />
                        <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Category: </strong>
                                    {PortfolioDetails.category}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Type: </strong>
                                    {PortfolioDetails.thumb1}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Industry: </strong>
                                    {PortfolioDetails.thumb2}
                                </span>
                            </li>
                        </ul>

                        {PortfolioDetails.overview && (
                            <>
                                <h3 className="details_item_info_title pt-4">Project Overview</h3>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                        <ul className="icon_list unordered_list_block">
                                            {PortfolioDetails.overview.map((item, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}

                        {(PortfolioDetails.challenge || PortfolioDetails.solution) && (
                            <>
                                <h3 className="details_item_info_title pt-4">Challenge & Solution</h3>
                                {PortfolioDetails.challenge && (
                                    <div className="mb-4">
                                        <h4 className="h5 mb-3">The Challenge:</h4>
                                        <p>{PortfolioDetails.challenge}</p>
                                    </div>
                                )}
                                {PortfolioDetails.solution && (
                                    <div className="mb-4">
                                        <h4 className="h5 mb-3">Our Solution:</h4>
                                        <p>{PortfolioDetails.solution}</p>
                                    </div>
                                )}
                            </>
                        )}

                        {PortfolioDetails.features && (
                            <>
                                <h3 className="details_item_info_title pt-4">Key Features</h3>
                                <div className="row mb-4">
                                    <div className="col-lg-6">
                                        <ul className="icon_list unordered_list_block">
                                            {PortfolioDetails.features.slice(0, Math.ceil(PortfolioDetails.features.length / 2)).map((feature, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="icon_list unordered_list_block">
                                            {PortfolioDetails.features.slice(Math.ceil(PortfolioDetails.features.length / 2)).map((feature, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}

                        {PortfolioDetails.results && (
                            <>
                                <h3 className="details_item_info_title pt-4">Project Results</h3>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                        <ul className="icon_list unordered_list_block">
                                            {PortfolioDetails.results.map((result, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}

                        {PortfolioDetails.technologies && (
                            <>
                                <h3 className="details_item_info_title pt-4">Technologies Used</h3>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                        <ul className="icon_list unordered_list_block">
                                            {PortfolioDetails.technologies.map((tech, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">
                                                        {tech}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}

                        {PortfolioDetails.marketFeatures && (
                            <>
                                <h3 className="details_item_info_title pt-4">Market Features</h3>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                        <ul className="icon_list unordered_list_block">
                                            {PortfolioDetails.marketFeatures.map((feature, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}

                        {PortfolioDetails.securityMeasures && (
                            <>
                                <h3 className="details_item_info_title pt-4">Security Measures</h3>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                        <ul className="icon_list unordered_list_block">
                                            {PortfolioDetails.securityMeasures.map((measure, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">{measure}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}

                        <h3 className="details_item_info_title pt-5 mb-4">Related Projects</h3>
                        <div className="row">
                            {getRelatedProjects().map((project, prj) => (
                                <div className="col-lg-6" key={prj}>
                                    <div className="portfolio_block portfolio_layout_2">
                                        <div className="portfolio_image">
                                            <Link onClick={ClickHandler} className="portfolio_image_wrap bg-light" to={`/portfolio_details/${project.slug}`}>
                                                <img src={project.pImg} alt={project.title} />
                                            </Link>
                                        </div>
                                        <div className="portfolio_content">
                                            <h3 className="portfolio_title">
                                                <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <ul className="category_list unordered_list">
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-tags"></i> {project.thumb1}</Link></li>
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-building"></i> {project.thumb2}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default PortfolioSinglePage;
