
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Dispatch, FC, SetStateAction } from "react"

interface IStrategiesListSelectProps {
    strategyName : string , 
    setStrategyName : Dispatch<SetStateAction<string>>
}

 export const StrategiesListSelect : FC<IStrategiesListSelectProps> = ({setStrategyName , strategyName}) =>  {
  return (
    <Select
    onValueChange={value => setStrategyName(value)}
    value={strategyName}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="انتخاب استراتزی" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>استراتزی</SelectLabel>
          <SelectItem value="covered-call">کاورد کال</SelectItem>
          <SelectItem value="long-call">لانگ کال</SelectItem>
          <SelectItem value="long-put">لانگ پوت</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

