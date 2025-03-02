"use client";

import { useEffect, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Stock = {
  id: number;
  type: "wine" | "whisky";
  price: number;
  date: string;
  quantity: number;
  clientId: string;
};

type CreateStockRequest = Omit<Stock, "id">;

export default function Home() {
  const [clientId] = useState("111b");
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4001/stocks?client_id=${clientId}`)
      .then((response) => response.json())
      .then(setStocks);
  }, []);

  const columns: ColumnDef<Stock>[] = [
    {
      header: "Stock Type",
      accessorKey: "type",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
    },
    {
      header: "Sale Date",
      accessorKey: "date",
    },
  ];

  const table = useReactTable({
    columns,
    data: stocks,
    getCoreRowModel: getCoreRowModel(),
  });

  const addStock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    
    const request: CreateStockRequest = {
      type: (form.elements.namedItem("sell-type") as HTMLInputElement).value as Stock["type"],
      price: Number((form.elements.namedItem("sell-price") as HTMLInputElement).value),
      date: new Date().toISOString().split("T")[0],
      quantity: Math.abs(Number((form.elements.namedItem("sell-quantity") as HTMLInputElement).value)),
      clientId: clientId,
    };

    fetch("http://localhost:4001/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => setStocks([...stocks, data]));
  };

  const buyStock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    
    const request: CreateStockRequest = {
      type: (form.elements.namedItem("buy-type") as HTMLInputElement).value as Stock['type'],
      price: Number((form.elements.namedItem("buy-price") as HTMLInputElement).value),
      date: new Date().toISOString().split("T")[0],
      quantity: -Math.abs(Number((form.elements.namedItem("buy-quantity") as HTMLInputElement).value)),
      clientId: clientId,
    };

    fetch("http://localhost:4001/stocks", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => setStocks([...stocks, data]));
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <div className="flex gap-4">
        <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Buy Stock</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={buyStock}>
                <DialogHeader>
                  <DialogTitle>Buy Stock</DialogTitle>
                  <DialogDescription>
                    Buy stock from Ferovinum.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="buy-type" className="text-right">
                      Type
                    </Label>
                    <Input
                      id="buy-type"
                      defaultValue="wine"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="buy-price" className="text-right">
                      Price
                    </Label>
                    <Input
                      type="number"
                      id="buy-price"
                      min={0}
                      defaultValue={0}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="buy-quantity" className="text-right">
                      Quantity
                    </Label>
                    <Input
                      type="number"
                      id="buy-quantity"
                      min={0}
                      defaultValue={0}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit">Buy</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Sell Stock</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={addStock}>
                <DialogHeader>
                  <DialogTitle>Sell Stock</DialogTitle>
                  <DialogDescription>
                    Sell additional stock to Ferovinum.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="sell-type" className="text-right">
                      Type
                    </Label>
                    <Input
                      id="sell-type"
                      defaultValue="wine"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="sell-price" className="text-right">
                      Price
                    </Label>
                    <Input
                      type="number"
                      id="sell-price"
                      min={0}
                      defaultValue={0}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="sell-quantity" className="text-right">
                      Price
                    </Label>
                    <Input
                      type="number"
                      id="sell-quantity"
                      min={0}
                      defaultValue={0}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit">Sell</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
