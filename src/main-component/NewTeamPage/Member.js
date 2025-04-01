import React, { Fragment } from 'react';
const Member = (props) => {
   
    const { TeamDetails } = props;

    return (
            <div className="team_member_details_card">
                <div className="team_member_image">
                    <img src={TeamDetails.tImg} alt="Team Member"/>
                </div>
                <div className="team_member_content">
                    <h2 className="team_member_name">{TeamDetails.name}</h2>
                    <ul className="icon_list unordered_list_block">
                        <li>
                            <span className="icon_list_text">
                                <strong>Responsibility: </strong>
                                {TeamDetails.title}
                            </span>
                        </li>
                      
                        <li>
                            <span className="icon_list_text">
                                <strong>Overview:</strong><br/>
                                {TeamDetails.overview}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
    )
};
export default Member;