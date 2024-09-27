import TemplatesPreview from "../../TemplatesPreview/TemplatesPreview";


const Resume_Templates = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent text-center">Resume</h1>
           <TemplatesPreview></TemplatesPreview>
        </div>
    );
};

export default Resume_Templates;