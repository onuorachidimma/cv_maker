import Footer from "../layouts/footer/footer";
import template1 from "../assets/images/template1.svg";
import template2 from "../assets/images/template2.svg";
import template3 from "../assets/images/template3.svg";
import template4 from "../assets/images/template4.svg";
import template5 from "../assets/images/template5.svg";

function Templates() {
  return (
    <div>
      <div>
        <h2>Choose a template for your CV</h2>
        <p>
          You can always change your mind and try a different template later.
        </p>
      </div>
      <div className="flex">
        <img src={template1} />
        <img src={template2} />
        <img src={template3} />
        <img src={template4} />
        <img src={template5} />
      </div>
      <Footer />
    </div>
  );
}

export default Templates;
