const CvSectionHeader = (props) => {
  return (
    <div>
      <h3 className="text-5xl font-bold">
        {props.letter1}{" "}
        <span className="text-customYellow">
          {props.letter2}
          <span className="text-black">{props.letter3}</span>
        </span>
      </h3>
      <p className="text-xs">{props.sectionInstruction}</p>
    </div>
  );
};

export default CvSectionHeader;
