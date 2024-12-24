import Button from "./DarkButton";

const DarkButtonSet = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 w-fit">
              <Button title="About" />
              <Button title="Experience" />
              <Button title="Skills" />
              <Button title="Projects" />
              <Button title="Contact" />
              <Button title="Resume" />
            </div>
        </>
    );
}

export default DarkButtonSet;