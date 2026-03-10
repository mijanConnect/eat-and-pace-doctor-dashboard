import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: unknown, item: T) => React.ReactNode;
  width?: string;
}

export interface TableAction<T> {
  label: string;
  onClick: (item: T) => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  itemsPerPage?: number;
  actions?: TableAction<T>[];
  rowKey: keyof T;
  onRowClick?: (item: T) => void;
}

export default function DataTable<T>({
  columns,
  data,
  itemsPerPage: initialItemsPerPage = 10,
  actions,
  rowKey,
  onRowClick,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="space-y-4">
      <div className="overflow-scroll lg:overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={String(column.key)}
                  style={{ width: column.width }}
                >
                  {column.label}
                </TableHead>
              ))}
              {actions && actions.length > 0 && (
                <TableHead className="text-center">Actions</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (actions ? 1 : 0)}
                  className="text-center py-8 text-muted-foreground"
                >
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item) => (
                <TableRow
                  key={String(item[rowKey])}
                  onClick={() => onRowClick?.(item)}
                  className={onRowClick ? "cursor-pointer" : ""}
                >
                  {columns.map((column) => (
                    <TableCell key={String(column.key)}>
                      {column.render
                        ? column.render(item[column.key], item)
                        : String(item[column.key])}
                    </TableCell>
                  ))}
                  {actions && actions.length > 0 && (
                    <TableCell className="text-center">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-32 p-2"
                          align="end"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex flex-col gap-1">
                            {actions.map((action, idx) => (
                              <Button
                                key={idx}
                                variant={action.variant || "ghost"}
                                size="sm"
                                className="w-full justify-start cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  action.onClick(item);
                                }}
                              >
                                {action.label}
                              </Button>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left: Rows per page (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Rows per page:
            </span>
            <Select
              value={String(itemsPerPage)}
              onValueChange={(value) => {
                setItemsPerPage(Number(value));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-17 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 15, 20, 25, 50].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Right: Page numbers */}
          <div className="flex items-center gap-2 w-full md:w-auto md:justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="size-4" />
            </Button>

            {/* Desktop: Show all page numbers */}
            <div className="hidden md:flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    className="w-10"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ),
              )}
            </div>

            {/* Mobile: Show current page / total pages */}
            <span className="md:hidden text-sm text-muted-foreground min-w-16 text-center">
              {currentPage} / {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          {/* Mobile: Rows per page selector below navigation */}
          <div className="md:hidden flex items-center gap-2 w-full">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Per page:
            </span>
            <Select
              value={String(itemsPerPage)}
              onValueChange={(value) => {
                setItemsPerPage(Number(value));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 15, 20, 25, 50].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}
