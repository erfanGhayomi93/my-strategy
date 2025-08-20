import { ModeToggle } from "@/components/mode-toggle";
import StrategyNew from "./new-strategy";
import { StrategyList } from "./strategyList";
import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";


const CrudStrategy = () => {

    const [tabId, setTabId] = useState<string[]>([]);



    return (
        <div className="pt-4">

            <ModeToggle />

            <Accordion
                type="multiple"
                className="max-w-7xl mx-auto"
                value={tabId}
                onValueChange={(value) => setTabId(value)} // ← مقدار مستقیم
            >
                <StrategyList />

                <StrategyNew />
            </Accordion>

        </div>
    )
}


export default CrudStrategy


