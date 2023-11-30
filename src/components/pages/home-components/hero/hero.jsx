export const Hero = () => {
  return (
    <>
      <div className="m-[125px]">
        <h1 className=" text-[#474747] font-Segoe UI text-[45px] leading-[78px] font-bold not-italic tracking-[1.12px] text-center ">
          Your Private Online Marketplace <br /> Where{" "}
          <span className="text-blue">Socielities</span> That Comprise Your{" "}
          <br /> Personal <span className="text-blue"> World</span>
        </h1>
        <div className="text-center">
          <p className=" m-[38px] font-Segoe UI text-base font-normal text-[#666] not-italic shrink-0">
            Your private online marketplace where you can trade goods and
            services with family, friends, neighbors, classmates,
            <br /> co-workers, and members of the many other communities that
            comprise your personal world.
          </p>
          <button className=" w-[170px] h-[50px] rounded-lg bg-blue text-[#FFF] text-base font-bold text-center font-Segoe UI m-[24px] bg-blue-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Explore More</button>
          <div className="flex gap-[11px] text-center justify-center m-[21px]">
          <img className="w-[ 22.896px] " src="/public/mock-imges/youtube_logo.svg" alt=""/>
          <h5 className="font-Segoe UI text-base font-normal  text-black-[ #666] not-italic">Let's have a look</h5>
          </div>
        </div>
        </div>
    </>
  );
};
