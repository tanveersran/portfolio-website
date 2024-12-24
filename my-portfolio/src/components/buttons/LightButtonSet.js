import Button from "./LightButton";

const LightButtonSet = () => {
    return (
        <>
            <div className="flex flex-wrap gap-8 max-w-sm">
              <Button title="About" />
              <Button title="Skills" />
              <Button title="Experience" />
              <Button title="Projects" />
              <Button title="Contact" />
              <Button title="Resume" />
            </div>
        </>
    );
}

export default LightButtonSet;