import { cn } from "@/lib/utils"
import type { FC } from "react"


interface IColorfullNum {
    data?: number
}

const ColorfullNum: FC<IColorfullNum> = ({ data = 0 }) => {
    return (
        <span className={cn(data > 0 && "text-green-700", data < 0 && "text-red-700")}>{"\u200e" + data}</span>
    )
}

export default ColorfullNum