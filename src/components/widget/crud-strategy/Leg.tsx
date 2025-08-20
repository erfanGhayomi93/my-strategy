import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
// import { BlockTypeListSelect } from "../blockTypeListSelect";



export const Leg = ({
    item,
    onChange,
    index
}: {
    item: LegData;
    onChange: (field: keyof LegData, value: string) => void;
    index: number
}) => {
    return (
        <div className="flex gap-4 my-1">
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"symbolISIN" + index}>آیزین نماد آپشن</Label>
                <Input
                    value={item.symbolISIN}
                    onChange={(e) => onChange("symbolISIN", e.target.value)}
                    placeholder="آیزین نماد آپشن"
                    id={"symbolISIN" + index}
                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"price" + index}>قیمت</Label>

                <Input
                    value={item.price}
                    onChange={(e) => onChange("price", e.target.value)}
                    placeholder="قیمت"
                    id={"price" + index}
                    type="number"
                    min={0}
                />

            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"quantity" + index}>تعداد</Label>

                <Input
                    value={item.quantity}
                    onChange={(e) => onChange("quantity", e.target.value)}
                    placeholder="تعداد"
                    id={"quantity" + index}
                    type="number"
                    min={0}
                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"orderSide" + index}>ساید</Label>

                <Input
                    value={item.orderSide}
                    onChange={(e) => onChange("orderSide", e.target.value)}
                    placeholder="ساید"
                    id={"orderSide" + index}
                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"executeBox" + index}>اندازه اجرا</Label>

                <Input
                    value={item.executeBox}
                    onChange={(e) => onChange("executeBox", e.target.value)}
                    placeholder="اندازه اجرا"
                    id={"executeBox" + index}
                    type="number"
                    min={0}
                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"blockType" + index}>روش تضمین</Label>

                <Input
                    value={item.blockType}
                    onChange={(e) => onChange("blockType", e.target.value)}
                    placeholder="روش تضمین"
                    id={"blockType" + index}
                />

                {/* <BlockTypeListSelect
                    state={item.blockType}
                    setState={(value: string) => onChange("blockType", value)}
                /> */}
            </div>
        </div>
    )
}