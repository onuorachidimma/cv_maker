import HomepageNavbar from "../layouts/HomepageNavbar";
import SectionHeading from "../layouts/homepageBody1/sectionHeading";
const CVRanker = () => {
  return (
    <div>
      <HomepageNavbar />
      <div className="mt-20 ml-20">
        <SectionHeading heading="CV Ranker" />
        <p className="font-semibold">Job Description</p>
      </div>
    </div>
  );
};
export default CVRanker;
