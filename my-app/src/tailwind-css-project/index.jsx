import { useState } from "react";

const TailWindProject = () => {
  const [open, setOpen] = useState(false);

  const menuClick = () => {
    setOpen(!setOpen);
  };
  return (
    <section className=" md:flex justify-between md:max-w-7xl mx-6 my-4 items-center">
      <section className="flex justify-between w-10/12 mx-auto">
        <section>
          <span className="text-4xl font-semibold text-green-500">Fruit</span>
          <span className="text-3xl text-gray-500">Shop</span>
        </section>
        <div className="md:hidden mt-4">
          <button onClick={menuClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className={`${open ? "hidden" : "md:block"}`}>
        <ul className="flex space-x-6">
          <li className="nav-header border-b-4">Fruits</li>
          <li className="nav-header">Vegetables</li>
          <li className="nav-header">More</li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-green-500 my-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </li>
        </ul>
      </section>
    </section>
    // <section>
    //   <span className="text-4xl font-semibold text-green-500">Fruit</span>
    //   <span className="text-3xl text-gray-500">Shop</span>
    //   <div>
    //     <span class="text-3xl text-stone-500 font-display">
    //       Season Specials
    //     </span>
    //   </div>
    //   <div>
    //     <span class="text-3xl text-stone-500 font-display">Find us on</span>
    //   </div>
    // </section>
  );
};

export default TailWindProject;
