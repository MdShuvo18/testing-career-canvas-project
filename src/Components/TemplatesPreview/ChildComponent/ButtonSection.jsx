/* eslint-disable react/prop-types */
import { GrDownload } from 'react-icons/gr';
import { IoGridOutline } from 'react-icons/io5';
import { LuLightbulb } from 'react-icons/lu';
import { PiDotsThreeCircleLight } from 'react-icons/pi';
import { VscSettings } from 'react-icons/vsc';

const ButtonSection = ({ toggleSidebar, toggleTemplatesModal }) => {

    return (
        <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-start">
                <button className="btn text-lg font-bold flex items-center" onClick={toggleTemplatesModal}>
                    <IoGridOutline className="mr-1" />
                    Templates
                </button>
                <button className="btn text-lg font-bold flex items-center" onClick={toggleSidebar}>
                    <VscSettings className="mr-1" />
                    Manage Section
                </button>
                <button className="btn text-lg font-bold flex items-center">
                    <LuLightbulb className="mr-1" />
                    <PiDotsThreeCircleLight className="ml-2" />
                </button>
            </div>

            <div className="text-end">
                <button className="btn text-lg font-bold">
                    <GrDownload />
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default ButtonSection;
