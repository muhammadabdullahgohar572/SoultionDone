const Hover = () => {
  return (
    <>
      <div className="sm:flex items-center text-center align-middle space-x-4">
        <div className="relative group">
          <span className="cursor-pointer">login</span>
        <div className=" hidden absolute group-hover:block">
          <span>Some content that appears on hover</span>
        </div>
        </div>

      </div>



     

      {/* <div className="sm:flex items-center space-x-4 mb-[10%]">

<div className="relative group/showli">

  <span  className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:after:duration-300">login</span>
</div>

<div className="hidden absolute bg-white z-30 group-hover/showli:block">

  <span>Some content that appears on hover</span>
</div>
</div>

<li className="relative group/showli">
<a
  href="#"
  className="hover:text-[#1BAB6E] transition-all duration-200 relative after:content-[' '] after:w-0 hover:after:w-full after:bg-[#1bab6e] after:h-[2px] after:absolute after:left-0 after:-top-3 after:transition-all after:after:duration-300"
>
  Mobile
</a>
<ul className="hidden absolute bg-white z-30 group-hover/showli:block">
  <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">
    Apple
  </li>
  <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">
    Samsung
  </li>
  <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">
    Infinix
  </li>
  <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">
    Xiamoi
  </li>
  <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">
    Realme
  </li>
  <li className="font-semibold text-base px-8 py-2 hover:bg-[#1bab6f7a] cursor-pointer">
    techno
  </li>
</ul>
</li> */}
    </>
  );
};

export default Hover;
