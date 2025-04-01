import React, { Fragment } from 'react';
import Header from '../../components/Header2/Header2';
import Teams from '../../api/team'
import TeamMember from './Member'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const NewTeamPage = (props) => {
   
    const TeamDetails = Teams.at(0)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={"Meet Our Team"} pagesub={'Members 😍'} pageTop={'Team'} />
                <section className="team_details_section section_space bg-light">
                    <div className="container">
                        {
                            Teams.map(member => 
                                <TeamMember TeamDetails={member}/>
                            )
                        }
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default NewTeamPage;