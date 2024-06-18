import React from "react";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <section
      className="min-h-fit flex flex-col justify-start items-center py-16 px-5"
    >
      <p>©️ {year} Tarunendra Bahadur Singh</p>
    </section>
  );
}

export default Footer;
