import React, { useRef } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import '../styles/ResumePage.css';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function ResumePage() {
    const resumeRef = useRef();

    const handleDownload = () => {
        const resumeContent = resumeRef.current.innerHTML;
        const pdfContent = htmlToPdfmake(resumeContent);
        const documentDefinition = { content: pdfContent };
        pdfMake.createPdf(documentDefinition).download('Devraj_Patel_Resume.pdf');
    };

    return (
        <div className="resume-fill">
            <div className="resume-page" ref={resumeRef}>
                <button className="download-button" onClick={handleDownload}>DOWNLOAD cv</button>
                <h1>Devraj Patel</h1>
                <p>Address: Halifax, NS X1X 2X2 | Phone number: xxx-xxx-xxxx</p>

                <h2>Skills Summary</h2>
                <ul>
                    <li>Experienced in analyzing and resolving computer hardware and software issues in a timely and
                        accurate manner.
                    </li>
                    <li>Over 2 years of hands-on experience in providing desktop support in both Windows and MAC
                        environments, including wired and wireless networking, virus protection, and backup systems.
                    </li>
                    <li>Adept with Microsoft Office 365 applications including Word, Excel, PowerPoint, Outlook, and
                        Access, as well as Microsoft Exchange and Active Directory (including domain trust, site
                        services, and group policy).
                    </li>
                    <li>Strong research skills to assess software solutions for user experience, integration, security,
                        and functionality.
                    </li>
                    <li>Proficient in collecting, organizing, and analyzing data to support software recommendations.
                    </li>
                    <li>Skilled at creating reports and presentations that effectively communicate findings.</li>
                    <li>Familiar with project management and collaboration tools like Slack, Trello, or Jira.</li>
                    <li>Experienced in Github, Gitlab tools to work collaboratively for major projects.</li>
                    <li>Proven ability to prioritize tasks and manage time efficiently in fast-paced work
                        environments.
                    </li>
                    <li>Ability to troubleshoot software issues and assist with software integration and implementation
                        strategies.
                    </li>
                </ul>

                <h2>Education</h2>
                <ul>
                    <li><strong>Computer Systems Technician</strong> | Sheridan College, Brampton ON (Sept 2018 – Sept
                        2020) - Graduated in Sept 2020
                    </li>
                    <li><strong>Bachelor of Computer Science</strong> | Dalhousie University, Halifax NS (January 2024 -
                        Current)
                    </li>
                </ul>

                <h2>Work Experience</h2>
                <ul>
                    <li><strong>University Social Media App Project</strong> | Dalhousie University (May 2024 - August
                        2024)
                        <ul>
                            <li>Collaborated in a group of 7 to design and develop a university app using an agile
                                methodology, creating both an admin portal and a user login section.
                            </li>
                            <li>Researched and evaluated different software tools and libraries for features such as
                                user authentication, data security, and scalability to ensure seamless user experience.
                            </li>
                            <li>Developed the backend using SpringBoot to manage the business logic and handle secure
                                database connections.
                            </li>
                            <li>Used MySQL for the database, ensuring data integrity and secure storage for user
                                information.
                            </li>
                            <li>Built the frontend with React, providing a responsive and intuitive user interface where
                                users could create profiles, make friends, and post content, similar to modern social
                                media platforms.
                            </li>
                            <li>Integrated feedback from team members and stakeholders to refine the app’s user
                                interface and improve the system’s overall functionality.
                            </li>
                            <li>Coordinated with the team to manage tasks, track progress, and troubleshoot issues
                                throughout the project lifecycle, ensuring the project met deadlines.
                            </li>
                            <li>Presented the final app in a detailed report and live demonstration, explaining
                                technical decisions and how the system met user requirements.
                            </li>
                        </ul>
                    </li>
                    <li><strong>IT Support Technician</strong> | TechCascade (August 2021 - January 2024)
                        <ul>
                            <li>Provided desktop support for Windows and MAC environments, troubleshooting hardware,
                                software, and networking issues to ensure minimal downtime for employees.
                            </li>
                            <li>Installed, configured, and maintained workstation hardware, software, and peripheral
                                devices for team members, ensuring seamless day-to-day operations.
                            </li>
                            <li>Managed user accounts and permissions via Active Directory and Microsoft Exchange,
                                including setting up group policies and resolving email system issues.
                            </li>
                            <li>Conducted system upgrades and regular maintenance on computer systems and servers,
                                ensuring timely and efficient repairs when needed.
                            </li>
                            <li>Provided technical training and support to employees, helping them navigate new IT
                                systems and applications, including Microsoft Office 365.
                            </li>
                            <li>Maintained a detailed inventory of hardware and software assets, documenting all
                                technical specifications and ensuring compliance with company IT policies.
                            </li>
                            <li>Collaborated with procurement teams to ensure the proper acquisition of IT equipment and
                                worked closely with senior IT staff to optimize internal processes.
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2>Interests and Activities</h2>
                <ul>
                    <li>Technology research</li>
                    <li>Team-based projects</li>
                    <li>Volunteering</li>
                    <li>Travelling</li>
                    <li>Online gaming</li>
                    <li>Social media marketing</li>
                </ul>
            </div>
        </div>
    );
}

export default ResumePage;
