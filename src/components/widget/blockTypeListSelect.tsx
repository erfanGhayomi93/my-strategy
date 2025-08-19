
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { BlockTypeOptions } from "@/mockData/Data"
import type { FC } from "react"

interface IOptionSearchListSelectProps {
    state: string,
    setState: (val: string) => void
}

export const BlockTypeListSelect: FC<IOptionSearchListSelectProps> = ({ setState, state }) => {
    return (
        <Select
            onValueChange={value => setState(value)}
            value={state}
            dir="rtl"
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="روش تضمین" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {
                        BlockTypeOptions.map((option, ind) => (
                            <SelectItem className="cursor-pointer" key={ind} value={option.value}>{option.name}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

