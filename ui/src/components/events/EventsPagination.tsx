import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface EventsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const EventsPagination: React.FC<EventsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];

  // Always show first page
  if (totalPages > 0) pageNumbers.push(1);

  // Calculate visible pages
  let startPage = Math.max(2, currentPage - 1);
  let endPage = Math.min(totalPages - 1, currentPage + 1);

  // Add ellipsis after first page if needed
  if (startPage > 2) pageNumbers.push("...");

  // Add middle pages
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Add ellipsis before last page if needed
  if (endPage < totalPages - 1) pageNumbers.push("...");

  // Add last page if there is more than one page
  if (totalPages > 1) pageNumbers.push(totalPages);

  return (
    <div className="flex items-center justify-center space-x-2 my-10">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pageNumbers.map((page, index) =>
        typeof page === "number" ? (
          <Button
            key={index}
            variant={currentPage === page ? "default" : "outline"}
            className={
              currentPage === page ? "bg-purple-500 hover:bg-purple-500/90" : ""
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ) : (
          <span key={index} className="px-2">
            {page}
          </span>
        )
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default EventsPagination;
