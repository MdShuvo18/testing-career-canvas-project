/* eslint-disable react/prop-types */

import { CiEdit } from 'react-icons/ci';

const ResumeSection = ({ title, content, isVisible, hoveredSection, onMouseEnter, onMouseLeave, onEditClick }) => {
    if (!isVisible) return null;

    return (
        <section
        className={`mb-4 p-4 border-2 rounded-lg shadow-md ${hoveredSection === title ? 'border-black' : 'border-transparent'}`}
        onMouseEnter={() => onMouseEnter(title)}
        onMouseLeave={onMouseLeave}
      >
        <h2 className="text-xl font-bold flex justify-between items-center">
          {title}
          {hoveredSection === title && (
            <CiEdit className="text-gray-600 cursor-pointer" onClick={onEditClick} />
          )}
        </h2>
        
        <hr className="my-2" />
      
        <p className="text-gray-600 mt-2">{content}</p>
      </section>
      
    );
};

export default ResumeSection;
