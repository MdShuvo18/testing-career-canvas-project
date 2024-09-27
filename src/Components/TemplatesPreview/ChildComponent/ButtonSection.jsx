/* eslint-disable react/prop-types */
import { GrDownload } from 'react-icons/gr';
import { IoGridOutline } from 'react-icons/io5';
import { LuLightbulb } from 'react-icons/lu';
import { PiDotsThreeCircleLight } from 'react-icons/pi';
import { VscSettings } from 'react-icons/vsc';

const ButtonSection = ({ toggleSidebar, toggleTemplatesModal }) => {
    return (
        <div className="flex  justify-between items-center">
            <div className="flex flex-col lg:flex-row gap-2 text-start">
                <button 
                    className="btn text-lg font-bold flex items-center hover:bg-green-500 hover:text-white transition-colors duration-300"
                    onClick={toggleTemplatesModal}
                >
                    <IoGridOutline className="mr-1" />
                    Templates
                </button>
                <button 
                    className="btn text-lg font-bold flex items-center hover:bg-green-500 hover:text-white transition-colors duration-300"
                    onClick={toggleSidebar}
                >
                    <VscSettings className="mr-1" />
                    Manage Section
                </button>
                <button 
                    className="btn text-lg font-bold flex items-center hover:bg-green-500 hover:text-white transition-colors duration-300"
                >
                    <LuLightbulb className="mr-1" />
                    <PiDotsThreeCircleLight className="ml-2" />
                </button>
            </div>

            <div className="text-end">
                <button className="btn text-lg font-bold hover:bg-green-500 hover:text-white transition-colors duration-300">
                    <GrDownload />
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default ButtonSection;
