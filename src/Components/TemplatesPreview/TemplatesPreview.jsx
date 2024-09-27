/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';

import ButtonSection from './ChildComponent/ButtonSection';
import TemplatesModal from './ChildComponent/TemplatesModal';
import Sidebar from './ChildComponent/Sidebar';
import ResumeSection from './ChildComponent/ResumeSection';

const TemplatesPreview = () => {
    const [hoveredSection, setHoveredSection] = useState(null); // To track which section is being hovered
    const [editingSection, setEditingSection] = useState(null); // To track which section is being edited
    const [sectionDetails, setSectionDetails] = useState({
        firstName: 'Your',
        lastName: 'Name',
        phone: '(123) 456-7890',
        email: 'your.email@example.com',
        linkedIn: 'linkedin.com/in/yourprofile',
        github: 'github.com/yourprofile',
        careerObjective: 'A concise paragraph describing your career goals and how you aim to contribute to a company.',
        skills: 'JavaScript, React, Node.js, Express, MongoDB',
        projects: 'Project 1, Project 2, Project 3',
        education: 'Your Degree - University Name, Graduation Year',
        languages: 'English, Spanish',
        experience: 'Job Title, Company Name, Duration',
    });

    const [tempDetails, setTempDetails] = useState({}); // Temporary state for holding changes inside the modal
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state
    const [isTemplatesModalOpen, setIsTemplatesModalOpen] = useState(false); // Modal state for Templates
    //    sidebar visibility state
    const [visibleSections, setVisibleSections] = useState({
        nameAndContact: true,
        careerObjective: true,
        skills: true,
        projects: true,
        education: true,
        languages: true,
        experience: true,
    });
    // Handle hover state
    const handleMouseEnter = (section) => {
        setHoveredSection(section);
    };
    const handleMouseLeave = () => setHoveredSection(null);

    // Handle click on the edit icon to open modal
    const handleEditClick = (section) => {
        setEditingSection(section);
        setTempDetails({ ...sectionDetails }); // Copy the current details to the tempDetails for editing
        document.getElementById('edit_modal').showModal();
    };

    // Handle change of temp details (this is local and only applied when saved)
    const handleTempChange = (event, section) => {
        setTempDetails((prevDetails) => ({
            ...prevDetails,
            [section]: event.target.value,
        }));
    };

    // Save changes to the main sectionDetails state
    const handleSave = () => {
        setSectionDetails(tempDetails);
        document.getElementById('edit_modal').close();
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleTemplatesModal = () => {
        setIsTemplatesModalOpen(!isTemplatesModalOpen); // Toggles the modal state
    };
    // const templatesModal=()=>{

    // }
    // Handle checkbox changes to show or hide sections
    const handleCheckboxChange = (section) => {
        setVisibleSections((prev) => ({
            ...prev,
            [section]: !prev[section], // Toggle the visibility of the selected section
        }));
    };

    return (
        <div className='space-y-8'>
            <div>
                <ButtonSection toggleSidebar={toggleSidebar} toggleTemplatesModal={toggleTemplatesModal} />
            </div>
            <div className="font-sans w-auto  mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50">
                <ResumeSection
                    title={`${sectionDetails.firstName} ${sectionDetails.lastName}`}
                    content={`Phone: ${sectionDetails.phone} | Email: ${sectionDetails.email}\nLinkedIn: ${sectionDetails.linkedIn} | GitHub: ${sectionDetails.github}`}
                    isVisible={visibleSections.nameAndContact}
                    hoveredSection={hoveredSection}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onEditClick={() => handleEditClick('nameAndContact')}
                />
                <ResumeSection
                    title="Career Objective"
                    content={sectionDetails.careerObjective}
                    isVisible={visibleSections.careerObjective}
                    hoveredSection={hoveredSection}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onEditClick={() => handleEditClick('careerObjective')}
                />
                <ResumeSection
                    title="Skills"
                    content={sectionDetails.skills}
                    isVisible={visibleSections.skills}
                    hoveredSection={hoveredSection}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onEditClick={() => handleEditClick('skills')}
                />
                <ResumeSection
                    title="Projects"
                    content={sectionDetails.projects}
                    isVisible={visibleSections.projects}
                    hoveredSection={hoveredSection}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onEditClick={() => handleEditClick('projects')}
                />
                <ResumeSection
                    title="Education"
                    content={sectionDetails.education}
                    isVisible={visibleSections.education}
                    hoveredSection={hoveredSection}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onEditClick={() => handleEditClick('education')}
                />
                <ResumeSection
                    title="Languages"
                    content={sectionDetails.languages}
                    isVisible={visibleSections.languages}
                    hoveredSection={hoveredSection}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onEditClick={() => handleEditClick('languages')}
                />
                <ResumeSection
                    title="Experience"
                    content={sectionDetails.experience}
                    isVisible={visibleSections.experience}
                    hoveredSection={hoveredSection}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onEditClick={() => handleEditClick('experience')}
                />
                {/* sidebar section */}
                {/* Sidebar */}
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    visibleSections={visibleSections}
                    handleCheckboxChange={handleCheckboxChange}
                    toggleSidebar={toggleSidebar}
                ></Sidebar>
                {/* Modal for Templates */}
                <TemplatesModal isOpen={isTemplatesModalOpen} toggleTemplatesModal={toggleTemplatesModal} ></TemplatesModal>

                {/* Modal for editing sections */}
                <dialog id="edit_modal" className="modal">
                    <div className="modal-box w-11/12 max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="font-bold text-xl mb-4">Edit {editingSection}</h3>

                        {/* Grid container to split the modal into two parts: editing form and tips */}
                        <div className="grid grid-cols-2 gap-6">

                            {/* Left side: Editing form */}
                            <div className=''>
                                {/* Render input fields based on the section being edited */}
                                {editingSection === 'nameAndContact' && (
                                    <div>
                                        <label className="block font-medium mb-2">First Name:</label>
                                        <input
                                            type="text"
                                            value={tempDetails.firstName}
                                            onChange={(e) => handleTempChange(e, 'firstName')}
                                            className="input input-bordered w-full mb-4 p-2 border rounded-lg"
                                        />
                                        <label className="block font-medium mb-2">Last Name:</label>
                                        <input
                                            type="text"
                                            value={tempDetails.lastName}
                                            onChange={(e) => handleTempChange(e, 'lastName')}
                                            className="input input-bordered w-full mb-4 p-2 border rounded-lg"
                                        />
                                        <label className="block font-medium mb-2">Phone:</label>
                                        <input
                                            type="text"
                                            value={tempDetails.phone}
                                            onChange={(e) => handleTempChange(e, 'phone')}
                                            className="input input-bordered w-full mb-4 p-2 border rounded-lg"
                                        />
                                        <label className="block font-medium mb-2">Email:</label>
                                        <input
                                            type="email"
                                            value={tempDetails.email}
                                            onChange={(e) => handleTempChange(e, 'email')}
                                            className="input input-bordered w-full mb-4 p-2 border rounded-lg"
                                        />
                                        <label className="block font-medium mb-2">LinkedIn:</label>
                                        <input
                                            type="text"
                                            value={tempDetails.linkedIn}
                                            onChange={(e) => handleTempChange(e, 'linkedIn')}
                                            className="input input-bordered w-full mb-4 p-2 border rounded-lg"
                                        />
                                        <label className="block font-medium mb-2">GitHub:</label>
                                        <input
                                            type="text"
                                            value={tempDetails.github}
                                            onChange={(e) => handleTempChange(e, 'github')}
                                            className="input input-bordered w-full mb-4 p-2 border rounded-lg"
                                        />
                                    </div>
                                )}

                                {editingSection === 'careerObjective' && (
                                    <>
                                        <label className="block font-medium mb-2">Career Objective:</label>
                                        <textarea
                                            value={tempDetails.careerObjective}
                                            onChange={(e) => handleTempChange(e, 'careerObjective')}
                                            className="textarea textarea-bordered w-full p-2 border rounded-lg"
                                        />
                                    </>
                                )}

                                {editingSection === 'skills' && (
                                    <>
                                        <label className="block font-medium mb-2">Skills:</label>
                                        <textarea
                                            value={tempDetails.skills}
                                            onChange={(e) => handleTempChange(e, 'skills')}
                                            className="textarea textarea-bordered w-full p-2 border rounded-lg"
                                        />
                                    </>
                                )}

                                {editingSection === 'projects' && (
                                    <>
                                        <label className="block font-medium mb-2">Projects:</label>
                                        <textarea
                                            value={tempDetails.projects}
                                            onChange={(e) => handleTempChange(e, 'projects')}
                                            className="textarea textarea-bordered w-full p-2 border rounded-lg"
                                        />
                                    </>
                                )}

                                {editingSection === 'education' && (
                                    <>
                                        <label className="block font-medium mb-2">Education:</label>
                                        <textarea
                                            value={tempDetails.education}
                                            onChange={(e) => handleTempChange(e, 'education')}
                                            className="textarea textarea-bordered w-full p-2 border rounded-lg"
                                        />
                                    </>
                                )}

                                {editingSection === 'languages' && (
                                    <>
                                        <label className="block font-medium mb-2">Languages:</label>
                                        <textarea
                                            value={tempDetails.languages}
                                            onChange={(e) => handleTempChange(e, 'languages')}
                                            className="textarea textarea-bordered w-full p-2 border rounded-lg"
                                        />
                                    </>
                                )}

                                {editingSection === 'experience' && (
                                    <>
                                        <label className="block font-medium mb-2">Experience:</label>
                                        <textarea
                                            value={tempDetails.experience}
                                            onChange={(e) => handleTempChange(e, 'experience')}
                                            className="textarea textarea-bordered w-full p-2 border rounded-lg"
                                        />
                                    </>
                                )}
                            </div>

                            {/* Right side: Tips section */}
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="font-bold text-lg mb-2">Tips for {editingSection}</h4>
                                {editingSection === 'nameAndContact' && (
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Ensure your name is clear and professional.</li>
                                        <li>Provide a valid phone number and email address.</li>
                                        <li>Include a LinkedIn and GitHub profile link if applicable.</li>
                                    </ul>
                                )}

                                {editingSection === 'careerObjective' && (
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Keep the career objective concise and focused.</li>
                                        <li>Mention how you can add value to the company.</li>
                                        <li>Align your objective with the job you're applying for.</li>
                                    </ul>
                                )}

                                {editingSection === 'skills' && (
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Highlight key skills relevant to the job you're applying for.</li>
                                        <li>Use bullet points for clarity.</li>
                                    </ul>
                                )}

                                {editingSection === 'projects' && (
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Describe the key projects you've worked on.</li>
                                        <li>Mention technologies used and your role in the project.</li>
                                    </ul>
                                )}

                                {editingSection === 'education' && (
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Include your degree, institution, and graduation year.</li>
                                        <li>Mention any honors or relevant coursework.</li>
                                    </ul>
                                )}

                                {editingSection === 'languages' && (
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Mention languages you're proficient in.</li>
                                        <li>Include your level of proficiency.</li>
                                    </ul>
                                )}

                                {editingSection === 'experience' && (
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>List your previous job titles, companies, and duration.</li>
                                        <li>Highlight your key responsibilities and achievements.</li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Modal action buttons */}
                        <div className="modal-action flex justify-end mt-4">
                            <button className="btn bg-blue-500 text-white px-4 py-2 rounded-lg mr-2" onClick={handleSave}>
                                Save
                            </button>
                            <button className="btn bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => document.getElementById('edit_modal').close()}>
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default TemplatesPreview;
