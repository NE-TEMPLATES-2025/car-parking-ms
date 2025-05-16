import { Button } from "@/components/ui/button";
import { MdDownload } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const Dashboard = () => {
  return (
    <div className="w-full flex flex-1 flex-col space-y-6 py-6 px-5">
      <div className="w-full  grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white h-auto rounded-lg px-3 py-3 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-semibold">10k</h2>
            <p className="text-xs text-gray-600/80 font-light">
              Total registers
            </p>
            <p className="text-xs text-gray-600/80 font-light">
              Up 40%(30 days)
            </p>
          </div>

          <div className="w-14 h-14 bg-cyan-300 rounded-full"></div>
        </div>
        <div className="bg-white h-auto rounded-lg px-3 py-3 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-semibold">10k</h2>
            <p className="text-xs text-gray-600/80 font-light">
              Total registers
            </p>
            <p className="text-xs text-gray-600/80 font-light">
              Up 40%(30 days)
            </p>
          </div>

          <div className="w-14 h-14 bg-cyan-300 rounded-full"></div>
        </div>
        <div className="bg-white h-auto rounded-lg px-3 py-3 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-semibold">10k</h2>
            <p className="text-xs text-gray-600/80 font-light">
              Total registers
            </p>
            <p className="text-xs text-gray-600/80 font-light">
              Up 40%(30 days)
            </p>
          </div>

          <div className="w-14 h-14 bg-cyan-300 rounded-full"></div>
        </div>
        <div className="bg-white h-auto rounded-lg px-3 py-3 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-semibold">10k</h2>
            <p className="text-xs text-gray-600/80 font-light">
              Total registers
            </p>
            <p className="text-xs text-gray-600/80 font-light">
              Up 40%(30 days)
            </p>
          </div>

          <div className="w-14 h-14 bg-cyan-300 rounded-full"></div>
        </div>
      </div>

      {/* 2 columns */}

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full h-auto py-4 px-4 bg-white rounded-lg">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">Rate of Parking Spots</h3>
              <p className="text-xs text-gray-600">
                it illustrates the number of booked spots per day
              </p>
            </div>
            <Button className="bg-transparent shadow-md px-8 py-2 flex items-center gap-2 border-[1px] rounded-lg cursor-pointer border-blue-500 ">
              <MdDownload fill="#155dfc" size={20} />
              <p className="text-blue-600 font-bold text-xs">Save Report</p>
            </Button>
          </div>
        </div>
        <div className="w-full h-auto py-4 px-4 bg-white rounded-lg">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-sm font-semibold">Popular Used Spots</h3>

            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-black/60 rounded-full" />
                <p className="text-xs">User</p>
              </div>

              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full" />
                <p className="text-xs">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Displaying the parking slots available and vehicles registered*/}

      <div className="w-full flex flex-col gap-2 items-start">
        <h3 className="text-3xl font-semibold">Parking Slots For You</h3>

        {/* Table */}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead >Slot Number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Floor</TableHead>
              <TableHead >Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>A001</TableCell>
              <TableCell>AVAILABLE</TableCell>
              <TableCell>2</TableCell>
              <TableCell>CAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A001</TableCell>
              <TableCell>AVAILABLE</TableCell>
              <TableCell>2</TableCell>
              <TableCell>CAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A001</TableCell>
              <TableCell>AVAILABLE</TableCell>
              <TableCell>2</TableCell>
              <TableCell>CAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A001</TableCell>
              <TableCell>AVAILABLE</TableCell>
              <TableCell>2</TableCell>
              <TableCell>CAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A001</TableCell>
              <TableCell>AVAILABLE</TableCell>
              <TableCell>2</TableCell>
              <TableCell>CAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A001</TableCell>
              <TableCell>AVAILABLE</TableCell>
              <TableCell>2</TableCell>
              <TableCell>CAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A001</TableCell>
              <TableCell>AVAILABLE</TableCell>
              <TableCell>2</TableCell>
              <TableCell>CAR</TableCell>
            </TableRow>
          </TableBody>
        </Table>

         <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
            </Pagination>

      </div>
    </div>
  );
};

export default Dashboard;
