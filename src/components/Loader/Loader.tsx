import {Dino, Cloud1, Cloud2, Cloud3, Tree1, Tree2, Tree3} from "./Loader.styles";
import TypingText from "../Text/TypingText";


type LoaderProps = {
    border: string;
    firstColor: string;
    secondColor: string;
}

type CloudProps = {
    cloudColor: string;
}

type TreeProps = {
    treeColor: string;
}




export default function Loader({
    border,
    firstColor, 
    secondColor, 
    cloudColor,
    treeColor,
}: LoaderProps & CloudProps & TreeProps) {

    return (
        <div style={{ width: "100%", height: "100vh", background: 'linear-gradient(180deg, rgba(105, 182, 221, 1) 0%, rgba(240, 89, 167, 1) 55%)' }}>
            <Dino border={border} firstColor={firstColor} secondColor={secondColor} />
            {/* <div style={{ width: "100%", height: "4px", backgroundColor: `${border}`, position: "absolute", top: "54.5%", left: "50%", transform: "translate(-50%, -50%)" }}></div> */}
            <div style={{ width: "100%", height: "45.2%", backgroundColor: "#000", position: "absolute", bottom: 0, left: 0 }}></div>
            <Cloud1 cloudColor={cloudColor}/>
            <Cloud3 cloudColor={cloudColor}/>
            <Cloud2 cloudColor={cloudColor}/>
            <Tree1 treeColor={treeColor}/>
            <Tree2 treeColor={treeColor}/>
            <Tree3 treeColor={treeColor}/>

            <TypingText
                title="Loading connection..."
                firstColor="#fff"
                cursorSize={10}
                fontSize={26}
                extraClass="position: absolute; top: 65%; left: 50%; transform: translate(-50%, -50%);"
            />
        </div>
    );
}