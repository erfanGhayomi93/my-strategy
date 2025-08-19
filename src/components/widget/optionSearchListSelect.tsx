
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { OptionBaseSymbolSearch } from "@/mockData/Data"
import type { Dispatch, FC, SetStateAction } from "react"

interface IOptionSearchListSelectProps {
    state: string,
    setState: Dispatch<SetStateAction<string>>
}

export const OptionSearchListSelect: FC<IOptionSearchListSelectProps> = ({ setState, state }) => {
    return (
        <Select
            onValueChange={value => setState(value)}
            value={state}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="نماد پایه" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {
                        OptionBaseSymbolSearch.map(item => (
                            <SelectItem className="cursor-pointer" key={item.symbolISIN} value={item.symbolISIN}>{item.symbolTitle}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

