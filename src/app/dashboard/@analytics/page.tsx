import Card from "@/components/Card";

function getRamdimInt(arr: string[]){
    return arr[Math.floor(Math.random() * arr.length)]
}
export default function Analytics() {
    const item = getRamdimInt(["", "Section"])
    if(item === ""){
        throw new Error("Item is empty")
    }
    return (
        <Card>Analytics Dashboard</Card>
    )
}