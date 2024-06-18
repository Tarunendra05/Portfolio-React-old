import React from "react";

function Section({title, subtitle, children}) {
    return (
        <section className="min-h-fit flex flex-col justify-start items-center pt-24 pb-12 px-5 text-center">
            <h3 className="px-2 py-3 text-2xl md:text-2xl lg:text-3xl font-medium">{title}</h3>
            <p 
                className="max-w-3xl font-normal text-gray-500 mb-10 text-sm md:text-sm lg:text-base pt-1 px-3"
            >
            {subtitle}
            </p>
            {children}
        </section>
    );
}

export default Section;