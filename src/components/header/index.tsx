import {
  HeaderImage1,
  HeaderImage2,
  HeaderImage3,
  HeaderImage4,
} from "../../assets";
import { CustomButton } from "../../elements";

const Tabs = ["Home", "Deals", "New Arrivals", "Packages", "Sign In"];
const Header = () => {
  return (
    <div className=" max-w-7xl m-auto space-y-10">
      <div className=" flex items-center justify-between">
        <h1 className=" text-xxl text- text-primary">FASCO</h1>
        <div className=" flex items-center  gap-[58px]">
          {Tabs.map((tab, index) => (
            <p key={index} className="text-primary ">
              {tab}
            </p>
          ))}
          <CustomButton title="Sign Up" />
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-12">
        <img className=" w-full " src={HeaderImage1}></img>

        <div className=" flex flex-col item-center justify-between ">
          <img src={HeaderImage3}></img>
          <div className=" flex items-center flex-col p-6">
            <p className=" font-poppinsMedium leading-none text-xxxl uppercase  text-primary ">
              Ultimate
            </p>
            <p className=" text-stroke font-poppinsMedium   leading-none text-xxxxl ">
              SALE
            </p>
            <p className=" uppercase mb-2 text-xl tracking-widest font-poppinsRegular">
              New Collection
            </p>
            <CustomButton title="SHOP NOW" width="w-[207px]" />
          </div>
          <img src={HeaderImage2}></img>
        </div>
        <img src={HeaderImage4}></img>
      </div>
    </div>
  );
};

export default Header;
