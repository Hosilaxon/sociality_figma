export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-blue p-[24px] font-Segoe UI text-[36px] not-italic font-bold ">
          Socielity
        </div>
        <div className=" ">
          <ul className=" flex gap-[40px] text-[#666] font-Segoe UI text-base font-bold not-italic p-[36px] ">
            <li>
              <a href="">Socielity</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
            <li>
              <a href="">Platfrom</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <button className=" w-[170px] h-[50px] rounded-lg bg-blue text-[#FFF] text-base font-bold text-center font-Segoe UI m-[24px]  bg-blue-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          Explore More
        </button>
      </div>
    </>
  );
};
