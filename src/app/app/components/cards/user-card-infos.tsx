import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClientType } from "@/lib/types/app";
import { Pen, Trash } from "lucide-react";

interface ClientCardInfosProps {
  client: ClientType;
  setSelectedClient: (client: ClientType | null) => void;
  setOpenDrawerClient: (open: boolean) => void;
}
const ClientCardInfos = ({
  client,
  setSelectedClient,
  setOpenDrawerClient,
}: ClientCardInfosProps) => {
  return (
    <Card key={client.id} className="max-w-md w-full  h-28">
      <CardContent className="h-full flex flex-1 justify-between p-0">
        <div className="flex flex-col justify-center h-full text-sm p-4   ">
          <h3 className="font-semibold text-primary">
            {client.name.replace(
              client.name.split("")[0],
              client.name.split("")[0].toUpperCase()
            )}
          </h3>
          <span className="text-muted-foreground">{client.document} </span>
          <span className="text-muted-foreground">{client.phone}</span>
          <span className="text-muted-foreground">{client.email}</span>
        </div>
        <div className="w-10 h-full flex flex-col divide-y-2 gap-1 ">
          <Button
            type="button"
            className="w-full h-full rounded-none"
            variant="secondary"
            onClick={() => setOpenDrawerClient(true)}
          >
            <Pen className="w-5 text-yellow-500" />
          </Button>
          <Button
            type="button"
            className="w-ful h-full rounded-none"
            variant="secondary"
            onClick={() => setSelectedClient(null)}
          >
            <Trash className="w-5 text-destructive" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientCardInfos;
