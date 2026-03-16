import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"

const data = [
    { id: 1, invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250" },
    { id: 2, invoice: "INV002", status: "Pending", method: "Paypal", amount: "$120" },
    { id: 3, invoice: "INV003", status: "Paid", method: "Credit Card", amount: "$300" },
    { id: 4, invoice: "INV004", status: "Failed", method: "Debit", amount: "$80" },
    { id: 5, invoice: "INV005", status: "Paid", method: "Credit Card", amount: "$450" },
    { id: 6, invoice: "INV006", status: "Pending", method: "Paypal", amount: "$60" },
    { id: 1, invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250" },
    { id: 2, invoice: "INV002", status: "Pending", method: "Paypal", amount: "$120" },
    { id: 3, invoice: "INV003", status: "Paid", method: "Credit Card", amount: "$300" },
    { id: 4, invoice: "INV004", status: "Failed", method: "Debit", amount: "$80" },
    { id: 5, invoice: "INV005", status: "Paid", method: "Credit Card", amount: "$450" },
    { id: 6, invoice: "INV006", status: "Pending", method: "Paypal", amount: "$60" },
    { id: 1, invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250" },
    { id: 2, invoice: "INV002", status: "Pending", method: "Paypal", amount: "$120" },
    { id: 3, invoice: "INV003", status: "Paid", method: "Credit Card", amount: "$300" },
    { id: 4, invoice: "INV004", status: "Failed", method: "Debit", amount: "$80" },
    { id: 5, invoice: "INV005", status: "Paid", method: "Credit Card", amount: "$450" },
    { id: 6, invoice: "INV006", status: "Pending", method: "Paypal", amount: "$60" },
    { id: 1, invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250" },
    { id: 2, invoice: "INV002", status: "Pending", method: "Paypal", amount: "$120" },
    { id: 3, invoice: "INV003", status: "Paid", method: "Credit Card", amount: "$300" },
    { id: 4, invoice: "INV004", status: "Failed", method: "Debit", amount: "$80" },
    { id: 5, invoice: "INV005", status: "Paid", method: "Credit Card", amount: "$450" },
    { id: 6, invoice: "INV006", status: "Pending", method: "Paypal", amount: "$60" },
    { id: 1, invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250" },
    { id: 2, invoice: "INV002", status: "Pending", method: "Paypal", amount: "$120" },
    { id: 3, invoice: "INV003", status: "Paid", method: "Credit Card", amount: "$300" },
    { id: 4, invoice: "INV004", status: "Failed", method: "Debit", amount: "$80" },
    { id: 5, invoice: "INV005", status: "Paid", method: "Credit Card", amount: "$450" },
    { id: 6, invoice: "INV006", status: "Pending", method: "Paypal", amount: "$60" },
    { id: 1, invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250" },
    { id: 2, invoice: "INV002", status: "Pending", method: "Paypal", amount: "$120" },
    { id: 3, invoice: "INV003", status: "Paid", method: "Credit Card", amount: "$300" },
    { id: 4, invoice: "INV004", status: "Failed", method: "Debit", amount: "$80" },
    { id: 5, invoice: "INV005", status: "Paid", method: "Credit Card", amount: "$450" },
    { id: 6, invoice: "INV006", status: "Pending", method: "Paypal", amount: "$60" },
]

export function DrawTable() {


    const [currentPage, setCurrentPage] = useState(1)

    const rowsPerPage = 3

    const totalPages = Math.ceil(data.length / rowsPerPage)

    const start = (currentPage - 1) * rowsPerPage
    const end = start + rowsPerPage

    const currentData = data.slice(start, end)

    function getVisiblePages(currentPage: number, totalPages: number) {
      const delta = 2
      const range = []
      const rangeWithDots: (number | string)[] = []

      let l

      for (let i = 1; i <= totalPages; i++) {
        if (
          i === 1 ||
          i === totalPages ||
          (i >= currentPage - delta && i <= currentPage + delta)
        ) {
          range.push(i)
        }
      }

      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1)
          } else if (i - l !== 1) {
            rangeWithDots.push("...")
          }
        }
        rangeWithDots.push(i)
        l = i
      }

      return rangeWithDots
    }

    const visiblePages = getVisiblePages(currentPage, totalPages)

    return (
        <>

            <Table>
                <TableCaption>Invoices</TableCaption>
                <TableHeader>
                <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
                </TableHeader>

                <TableBody>
                {currentData.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.invoice}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.method}</TableCell>
                    <TableCell className="text-right">{row.amount}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>

            <Pagination className="flex justify-end mt-4">
              <PaginationContent>

                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  />
                </PaginationItem>

                {visiblePages.map((page, i) => (
                  <PaginationItem key={i}>

                    {page === "..." ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page as number)}
                      >
                        {page}
                      </PaginationLink>
                    )}

                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                  />
                </PaginationItem>

              </PaginationContent>
            </Pagination>
    </>
    )
}