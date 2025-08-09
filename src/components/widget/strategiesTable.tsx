import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogWidget } from "./dialogWidget";

interface StrategiesTableProps<T, C> {
  data: T[];
  columns: TableColumn<T>[];
  caption?: string;
  handleClickAction?: (row: T) => void
  children?: (row: T) => C[] | undefined
}

export const StrategiesTable = <T, C>({
  data,
  columns,
  caption = "جدول اطلاعات",
  handleClickAction,
  children
}: StrategiesTableProps<T, C>) => {


  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((col, idx) => (
            <TableHead key={idx} className={col.className ?? "text-center"}>
              {col.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => (
              <TableCell
                key={colIndex}
                className={col.className ?? "text-center"}
                onClick={() => {
                  if (col.type === "action") {
                    handleClickAction?.(row)
                  }
                }}
              >
                {
                  col.type === "action" ? (
                    <DialogWidget<C>
                      columnAnalyst={(col.columnAnalyst) as TableColumn<C>[]}
                      children={() => children?.(row)}
                    />
                  ) : col.accessor?.(row)
                }
              </TableCell>
            )
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table >
  );
};
