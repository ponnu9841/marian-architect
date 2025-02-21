import NextImage from "@/components/ui/Image";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useAppSelector } from "@/redux/hooks/use-selector";
import parse from "html-react-parser";

export default function About() {
  const { data, loading } = useAppSelector((state) => state.rootReducer.about);
  return (
    <div>
      {loading &&
        Array(6)
          .fill(null)
          .map((_, index) => <Skeleton key={index} className="h-6 w-full" />)}
      {!loading && data === null && (
        <div className="col-span-4 text-center mt-3 text-red-500">
          No Record Found
        </div>
      )}
      {!loading && data !== null && (
        <div className="relative p-3">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold w-[120px]">Image</TableCell>
                <TableCell className="font-medium whitespace-pre">
                  <NextImage src={data.image} className="max-w-[100px] aspect-square" />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold w-[180px]">
                  Image Alt
                </TableCell>
                <TableCell className="font-medium whitespace-pre">
                  {data.alt}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold w-[120px]">
                  Title
                </TableCell>
                <TableCell className="font-medium whitespace-pre">
                  {data.title}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold w-[120px]">Ttiee Badge</TableCell>
                <TableCell className="font-medium whitespace-pre">
                  {data.title_badge}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold w-[120px]">
                  Short Description
                </TableCell>
                <TableCell className="font-medium whitespace-pre text-wrap line-clamp-3">
                  {parse(data.short_description || "")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold w-[120px]">
                  Long Description
                </TableCell>
                <TableCell className="font-medium whitespace-pre">
                  {parse(data.long_description || "")}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
