/* eslint-disable react/prop-types */
const TemplatesModal = ({ isOpen, toggleTemplatesModal }) => {
    return isOpen ? (
        <dialog id="templates_modal" className="modal" open>
            <div className="p-10 bg-white rounded-lg shadow-lg">
                <div className="grid grid-cols-2 justify-items-center">
                    <div className="text-start">
                        <h3 className="font-bold text-5xl mb-4">Choose Template</h3>
                        <p className="text-lg font-semibold">
                            Our resume templates are based on what employers actually look for in a candidate.<br />
                            We’ve talked with thousands of employers to get the answers.
                        </p>
                    </div>
                    <img className="w-[190px] h-[190px]" src="/templatePhoto.svg" alt="" />
                </div>

                {/* recommened part start */}

                <div className="flex justify-start items-center gap-2 mb-3">
                    <img className="w-5 h-5" src="/star-svgrepo-com.svg" alt="" />
                    <h1 className="text-2xl font-bold text-start">Recommended</h1>
                </div>

                <p className="text-start text-lg font-semibold">
                    Each template is designed for online job applications and getting through the ATS software that scans your resume.<br />
                    These templates follow the rules hiring managers are looking for.
                </p>

                <div className="grid grid-cols-3 gap-4 justify-items-center mt-4">
                    <img className="w-[280px] h-[380px]" src="https://i.ibb.co/4NBRtNw/461245489-599602756075417-6483749644197083285-n.png" alt="" />
                    <img className="w-[280px] h-[380px]" src="https://i.ibb.co/bszc8Db/461250822-1043846257201079-298073594595819851-n.png" alt="" />
                    <img className="w-[280px] h-[380px]" src="https://i.ibb.co/ykKZBph/460239359-1721314525297116-6257218169634624494-n.png" alt="" />
                </div>

                <div className="modal-action flex justify-end mt-4">
                    <button className="btn bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={toggleTemplatesModal}>
                        Close
                    </button>
                </div>
                {/* <div className="flex justify-start items-center gap-2 mb-3">
                    <img className="w-5 h-5" src="/star-svgrepo-com.svg" alt="" />
                    <h1 className="text-2xl font-bold text-start">Recommended</h1>
                </div> */}
            </div>
        </dialog>
    ) : null;
};

export default TemplatesModal;
