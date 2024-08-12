import React from 'react';
import Style from '../about/About.module.scss';
import Terminal from "../about/Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Education({ innerRef }) {
    const firstName = info.firstName.toLowerCase();

    function experienceText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                    experience</p>
                <p><span style={{ color: info.baseColor }}>experience <span
                    className={Style.green}>(main)</span> $</span> ls
                </p>
                <ul style={{ marginLeft: '1rem', listStyleType: 'none', padding: 0 }}>
                    {info.experience.map((exp, index) => (
                        <li key={index} style={{ marginBottom: '1.5rem' }}>
                            <Box component={'span'} display={'block'} fontWeight={600} mb={'0.5rem'}>
                                {exp.institution}
                            </Box>
                            <Box component={'span'} display={'block'} mb={'0.5rem'}>
                                <strong>Role:</strong> {exp.role}
                            </Box>
                            <Box component={'span'} display={'block'} mb={'0.5rem'}>
                                <strong>Location:</strong> {exp.location}
                            </Box>
                            <Box component={'span'} display={'block'} mb={'0.5rem'}>
                                <strong>Duration:</strong> {exp.startDate} - {exp.endDate}
                            </Box>
                            {exp.description && (
                                <Box component={'span'} display={'block'} mt={'0.5rem'}>
                                    {exp.description}
                                </Box>
                            )}
                            {/* Green Line Break */}
                            <Box component="hr" sx={{ border: '0', height: '2px', backgroundColor: 'green', margin: '1rem 0' }} />
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    function educationText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                    education</p>
                <p><span style={{ color: info.baseColor }}>education <span
                    className={Style.green}>(main)</span> $</span> ls
                </p>
                <ul style={{ marginLeft: '1rem', listStyleType: 'none', padding: 0 }}>
                    {info.education.map((edu, index) => (
                        <li key={index} style={{ marginBottom: '1.5rem' }}>
                            <Box component={'span'} display={'block'} fontWeight={600} mb={'0.5rem'}>
                                {edu.institution}
                            </Box>
                            <Box component={'span'} display={'block'} mb={'0.5rem'}>
                                <strong>Degree:</strong> {edu.degree}
                            </Box>
                            <Box component={'span'} display={'block'} mb={'0.5rem'}>
                                <strong>Duration:</strong> {edu.startDate} - {edu.endDate}
                            </Box>
                            <Box component={'span'} display={'block'} mt={'0.5rem'}>
                                {edu.description}
                            </Box>
                            {/* Green Line Break */}
                            <Box component="hr" sx={{ border: '0', height: '2px', backgroundColor: 'green', margin: '1rem 0' }} />
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={experienceText()} />
            <Terminal text={educationText()} />
        </Box>
    );
}
