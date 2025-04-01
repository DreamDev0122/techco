
import React, { useState } from 'react';
import Bg from '../../../images/shapes/shape_title_under_line.svg'
import shape1 from '../../../images/shapes/shape_space_4.svg'
import shape2 from '../../../images/shapes/shape_angle_3.webp'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section id="faq" className="faq_section section_decoration">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                        F.A.Q.
                    </div>
                    <h2 className="heading_text mb-0">
                        Need a <mark>Support?</mark>
                    </h2>
                </div>

                <div className="faq_accordion accordion" id="faq_accordion">
                    <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="1">
                                Q. Why hire a custom software development company?
                            </AccordionHeader>
                            <AccordionBody accordionId="1" className='acc_body'>
                                <p>
                                One of the main reasons to hire a custom software development company is the level of expertise they bring to the table. Development companies have teams of skilled developers on tap who have a deep understanding of the programming languages, frameworks, and technologies relevant to your project. They autonomously work on developing your software and making it efficient, reliable, and scalable. In the meantime, you can focus on your core business tasks.
                                Another reason to hire a custom software programming services company is the level of customization they offer. Custom development partners build tailored solutions that are specifically designed for your unique business requirements. This means that you pay only for the exact features and functionality you need, without any frills.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="2">
                                Q. What is a custom software development company?
                            </AccordionHeader>
                            <AccordionBody accordionId="2" className='acc_body'>
                                <p>
                                    A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades,Here is an extended list of services:
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Web and mobile app development
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Software architecture
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT consulting and audit
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Legacy system modernization
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Cloud computing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    QA and testing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Business analysis
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT staffing services
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="3">
                                Q. Why do businesses need custom software development?
                            </AccordionHeader>
                            <AccordionBody accordionId="3" className='acc_body'>
                                <p>
                                    Businesses need custom software development to streamline operations, improve productivity, and gain a competitive edge. Off-the-shelf solutions often lack the flexibility to handle complex workflows or adapt to business-specific requirements. A trusted US-based development agency ensures that your software is not only aligned with your goals but also scalable and secure, driving long-term success.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="4">
                                Q. How much does custom software development cost?
                            </AccordionHeader>
                            <AccordionBody accordionId="4" className='acc_body'>
                                <p>
                                    The cost of custom software development varies based on project complexity, features, and technology stack. A small to mid-sized project may range from $50,000 to $150,000, while enterprise-level solutions can cost upwards of $250,000. A professional US-based agency provides transparent pricing, detailed project planning, and cost-effective strategies to maximize your return on investment.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="5">
                                Q. Why custom software development is important?
                            </AccordionHeader>
                            <AccordionBody accordionId="5" className='acc_body'>
                                <p>
                                    Custom software development is essential for businesses aiming to enhance operational efficiency, deliver personalized customer experiences, and adapt to market changes. Unlike off-the-shelf solutions, custom software grows with your business, providing flexibility and scalability. Partnering with a reputable US-based development company ensures that your solution is built to the highest standards, with ongoing support and innovation.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape Angle" />
            </div>
        </section>
    )
};
export default FaqSection;
