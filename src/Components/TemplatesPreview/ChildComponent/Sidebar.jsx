/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const Sidebar = ({ isSidebarOpen, visibleSections, handleCheckboxChange, toggleSidebar }) => {
    return isSidebarOpen ? (
        <motion.div
            initial={{ x: '100%', opacity: 0 }} // Initial position and opacity
            animate={{ x: 0, opacity: 1 }} // Position and opacity when open
            exit={{ x: '100%', opacity: 0 }} // Animation when closed
            transition={{ type: 'spring', stiffness: 100 }} // Transition settings
            className="fixed right-0 top-0 w-80 h-full bg-gray-100 shadow-lg p-6 z-50"
        >
            <h2 className="text-lg font-bold mb-4">Manage Sections</h2>

            {/* Iterate over visibleSections to create checkboxes */}
            {Object.keys(visibleSections).map((section) => (
                <div key={section} className="flex text-xl font-medium items-center mb-4">
                    <input
                        type="checkbox"
                        id={section}
                        checked={visibleSections[section]}
                        onChange={() => handleCheckboxChange(section)}
                        className="mr-2"
                    />
                    <label htmlFor={section} className="text-gray-800 capitalize">{section}</label>
                </div>
            ))}

            <button className="btn bg-green-500 mt-4" onClick={toggleSidebar}>
                Close Sidebar
            </button>
        </motion.div>
    ) : null;
};

export default Sidebar;
