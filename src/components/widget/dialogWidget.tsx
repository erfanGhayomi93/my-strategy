import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
import { StrategiesTable } from "./strategiesTable";
import type { JSX } from "react";

interface IDialogWidget<C> {
    columnAnalyst: TableColumn<C>[];
    children?: () => C[] | undefined
}

export const DialogWidget = <C,>({ children, columnAnalyst }: IDialogWidget<C>): JSX.Element => {

    return (
        <Dialog>
            <DialogTrigger>➕</DialogTrigger>
            <DialogContent className="min-w-4xl" dir="rtl">
                <DialogHeader>
                    <DialogTitle className="text-center">آنالیز</DialogTitle>
                </DialogHeader>

                {/* {row?.baseSymbolTitle} */}

                <StrategiesTable<C, C>
                    data={children?.() || []}
                    columns={columnAnalyst}
                    caption="کاورد کال (Covered Call)"
                // handleClickAction={handleClickAction}
                />
            </DialogContent>
        </Dialog>
    )
}
