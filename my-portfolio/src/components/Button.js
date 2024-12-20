/*
This component is used to display a button with a title.
Coded by: Tanveer Sran
*/
const Button = ({title, onClick}) => {
  return (
    <button onClick={onClick} className="bg-primary-tinted text-primary-dark py-2 px-4 rounded-full w-fit hover:bg-primary ">{title}</button>
  );
}

export default Button;