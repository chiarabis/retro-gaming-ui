import { Bar } from "./Connection.styles";


type BarProps = {
    barColor: string;
    border: string;
}

export default function Connection ({
    barColor = "#fff",
    border = "#000",
}: BarProps) {

    return (
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "0.5rem", margin: '1rem' }}>
            <span style={{ color: "#0f172b" }}>Connection...</span>
            <Bar barColor={barColor} border={border}/>
        </div>
    )
}