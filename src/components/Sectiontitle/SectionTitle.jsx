const SectionTitle = ({Heading, SubHeading}) => {
    return (
        <div className="text-center max-w-md m-auto">
            <p className="text-xl text-[#D99904]">---{SubHeading}---</p>
            <h2 className="text-5xl border-t-4 border-b-4 py-5 mt-4 mb-12">{Heading}</h2>
        </div>
    );
};

export default SectionTitle;