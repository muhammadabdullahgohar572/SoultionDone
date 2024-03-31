"use client"; // Assuming this is a Next.js specific import, but it's not standard JavaScript

const Scroll = () => {
  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
       <button className="fixed bg-red-700 p-8 m-11 bottom-0 right-0" onClick={scrollToTop}>
        click
      </button>
    </div>
  );
};

export default Scroll;
