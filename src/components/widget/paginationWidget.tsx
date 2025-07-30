import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState, type Dispatch, type FC, type SetStateAction } from "react"

interface IPaginationWidget {
  setPageNumber: Dispatch<SetStateAction<number>>
}

export const PaginationWidget: FC<IPaginationWidget> = ({ setPageNumber }) => {
  const [count, setCount] = useState(1);

  const countOfPage = [1, 2, 3]

  const handleChangeCount = (command: string, number?: number) => {

    if (command === "prev" && count > 1) {
      setCount(prev => prev - 1)
    } else if (command === "next" && count < countOfPage.length) {
      setCount(prev => prev + 1)
    } else if (number) {
      setCount(number)
    }
  }

  useEffect(() => {
    setPageNumber(count)
  }, [count])


  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          onClick={() => handleChangeCount("prev")}
        >
          <PaginationPrevious href="#" />
        </PaginationItem>

        {
          countOfPage.map(item => (
            <PaginationItem
              key={item}
              onClick={() => handleChangeCount("link", item)}
            >
              <PaginationLink
                href="#"
                isActive={item === count}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ))
        }

        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}

        <PaginationItem
          onClick={() => handleChangeCount("next")}
        >
          <PaginationNext href="#" />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}
