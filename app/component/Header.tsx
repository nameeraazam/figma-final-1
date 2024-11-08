const Header = () =>{
  return (
    //<div className="flex flex-row items-center p-[140px] pl-[220px] pr-[220px] isolate absolute w-[1920px] h-[829px] left-0 top-[92px] bg-[#043873]">

    <div className="absolute top-0 left-0 w-[1920px] h-[92px] bg-[#043873] flex justify-between items-center px-[220px] py-[16px] text-white ">
      <div className="font-bold">Whitepace</div>
     
     <div className="flex gap-4">
       <div className="cursor-pointer">Products</div>
       <div className="cursor-pointer">Solutions</div>
       <div className="cursor-pointer">Resources</div>
       <div className="cursor-pointer">Pricing</div>
       <button className="flex items-center justify-center p-4  pl-10 pr-10 gap-2 w-[126px] h-[60px] bg-[#FFE492] rounded-[8px] flex-none">Login</button>
       <button className="flex items-center justify-center p-4 pl-6 pr-6 gap-2 w-[227px] h-[60px] bg-[#4F9CF9] rounded-[8px] flex-none">Try WhiteSpace Free</button>
     </div>
    </div>
   // </div>
  )
}

export default Header;