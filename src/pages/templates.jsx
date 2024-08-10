import Footer from "../layouts/footer/footer";
import template from "../assets/images/reviewerImage1.svg";

function Templates() {
  return (
    <div>
      <div>
        <h2>Choose a template for your CV</h2>
        <p>
          You can always change your mind and try a different template later.
        </p>
      </div>
      <div>
        <img src={template} />
        <img src={template} />
        <img src={template} />
        <img src={template} />
        <img src={template} />

      </div>
      <Footer />
    </div>
  );
}

export default Templates;
