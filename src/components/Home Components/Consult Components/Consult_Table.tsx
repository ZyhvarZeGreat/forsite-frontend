import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { cn } from "../../../lib/utils";

interface Invoice {
  application_id: string;
  date: string;
  client_name: string;
  availability: string;
  status: string;
}

const Consult_Table: React.FC<{ invoices: Invoice[] }> = ({ invoices }) => {
  return (
    <Table className=" rounded-2xl">
      <TableHeader className="mb-8  ">
        <TableRow className="h-24 ">
          <TableHead className="text-black ">Application ID</TableHead>
          <TableHead className="text-black ">Date</TableHead>
          <TableHead className="text-black ">Client Name</TableHead>
          <TableHead className="text-black">Availability</TableHead>
          <TableHead className="text-black text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow className="h-[70px]" key={invoice.application_id}>
            <TableCell className=" text-[#386A8B] text-start">
              {invoice.application_id}
            </TableCell>
            <TableCell className=" text-[#4F4F4F] text-start">
              {invoice.date}
            </TableCell>
            <TableCell className="text-start text-[#4F4F4F] ">
              {invoice.client_name}
            </TableCell>
            <TableCell className="text-start text-[#4F4F4F] ">
              {invoice.availability}
            </TableCell>

            <TableCell className="flex items-center justify-center">
              <p
                className={cn(
                  "text-black text-start py-2 rounded-md px-6",
                  invoice.status.toLowerCase() === "pending" &&
                    "text-[#FFA902] bg-[#FFA9024F]",
                  invoice.status.toLowerCase() === "" &&
                    "text-[#049561] bg-[#9FF1CA]"
                )}
              >
                {invoice.status}
              </p>{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Consult_Table;
