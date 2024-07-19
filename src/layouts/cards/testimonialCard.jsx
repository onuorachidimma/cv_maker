import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import reviewerImage from "../../assets/images/reviewerImage.svg";
import reviewerImage1 from "../../assets/images/reviewerImage1.svg";
import reviewerImage2 from "../../assets/images/reviewerImage2.svg";
const reviews = [
  {
    id: 1,
    name: "GodHelp Tinubu",
    review:
      "The step-by-step guidance and helpful prompts were a great addition. They provided useful tips on what information to include and how to format it effectively.",
    image: reviewerImage,
  },
  {
    id: 2,
    name: "GodHelp Tinubu",
    review:
      "The step-by-step guidance and helpful prompts were a great addition. They provided useful tips on what information to include and how to format it effectively.",
    image: reviewerImage1,
  },
  {
    id: 3,
    name: "GodHelp Tinubu",
    review:
      "The step-by-step guidance and helpful prompts were a great addition. They provided useful tips on what information to include and how to format it effectively.",
    image: reviewerImage2,
  },
  {
    id: 4,
    name: "GodHelp Tinubu",
    review:
      "The step-by-step guidance and helpful prompts were a great addition. They provided useful tips on what information to include and how to format it effectively.",
    image: reviewerImage1,
  },
];
const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(1); // Default to 1 review for small screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleReviews(3);
      } else if (window.innerWidth >= 768) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial number of visible reviews

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const reviewsToShow = reviews.slice(
    currentIndex,
    currentIndex + visibleReviews
  );
  if (reviewsToShow.length < visibleReviews) {
    reviewsToShow.push(
      ...reviews.slice(0, visibleReviews - reviewsToShow.length)
    );
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-11/12 mx-auto my-8 p-4 bg-white rounded-lg relative">
      <div className="flex space-x-8">
        {reviewsToShow.map((review) => (
          <div
            key={review.id}
            className={`w-full md:w-1/${visibleReviews} lg:w-1/${visibleReviews} text-center border border-customDarkGreen bg-customLightGreen rounded-3xl relative px-4 pt-20 pb-12`}
          >
            <p className="mt-2 text-gray-600 pb-2">{review.review}</p>
            <h2 className="text-xl font-semibold">{review.name}</h2>
            <img
              className="absolute inset-0 m-auto bottom-72"
              src={review.image}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-customDarkGreen" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
