const CustomButton = ({
  title,
  width = "w-[152px]",
}: {
  title: string;
  width?: string;
}) => {
  return (
    <button className={`${width} h-14 text-white rounded-button bg-black`}>
      {title}
    </button>
  );
};

export default CustomButton;
