import Select from "../Select/Select";



type Props = {
  onChange: (value: string) => void;
};


export default function Backgrounds({ onChange }: Props) {

    const backgrounds = ["Stars", "Hearts", "Bubbles", "Pois"];

    const handleBackgroundChange = (value: string) => {
        onChange(value);
    };
  
    return (
    <>
        <div style={{position: 'absolute', top: 100, right: 30, zIndex: 9999}}>
            
            
            <Select
                optionsList={backgrounds}
                borderColor="#f059a7"
                bgColor="#fff"
                fontColor="#0f172b"
                optionColor="#ed9ac5"
                placeholder="Choose Background"
                onChange={handleBackgroundChange}
            />
            
                
        </div>
    </>
  )
}