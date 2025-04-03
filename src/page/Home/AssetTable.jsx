import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const AssetTable = ({coinList, category}) => {

  const navigate = useNavigate();
  

  return (
    <Table>
      <ScrollArea className={`${ category=="all"?"h-[74vh]":"h-[82vh]"}`}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]  font-extrabold">Coin</TableHead>
            <TableHead className="font-extrabold">Symbol</TableHead>
            <TableHead className="font-extrabold">Volume</TableHead>
            <TableHead className="font-extrabold">Market Cap</TableHead>
            <TableHead className="font-extrabold">24h</TableHead>
            <TableHead className="text-right font-extrabold">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coinList?.map((coin) => (
            <TableRow
              key={coin.id}
              onClick={() => navigate(`/market/${coin.id}`)}
              className="cursor-pointer"
            >
              <TableCell className="font-medium flex coins-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={coin.image} />
                </Avatar>
                <span>{coin.name}</span>
              </TableCell>
              <TableCell>{coin.symbol}</TableCell>
              <TableCell>{coin.total_volume}</TableCell>
              <TableCell>{coin.market_cap}</TableCell>
              <TableCell>{coin.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">
                ${coin.current_price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ScrollArea>
    </Table>
  );
};


export default AssetTable;
