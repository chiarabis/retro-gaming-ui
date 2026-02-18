import {Dino, Cloud1, Cloud2, Cloud3, Tree1, Tree2, Tree3} from "./Loader.styles";


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
    border = "#000",
    firstColor = "#35978f", 
    secondColor = "#df1e1e", 
    cloudColor = "#ffffff",
    treeColor = "#24832c",
}: LoaderProps & CloudProps & TreeProps) {

    return (
         
            <>
                <Dino border={border} firstColor={firstColor} secondColor={secondColor} />
                <div style={{ width: "100%", height: "4px", backgroundColor: `${border}`, position: "absolute", top: "54.5%", left: "50%", transform: "translate(-50%, -50%)" }}></div>
                <Cloud1 cloudColor={cloudColor}/>
                <Cloud3 cloudColor={cloudColor}/>
                <Cloud2 cloudColor={cloudColor}/>
                <Tree1 treeColor={treeColor}/>
                <Tree2 treeColor={treeColor}/>
                <Tree3 treeColor={treeColor}/>
            </>
        
    );
}