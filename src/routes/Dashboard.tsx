import AgentInfo from "@/components/dashboard/AgentInfo";

import Contracts from "@/components/dashboard/Contracts";
import ShipsTabContent from "@/components/dashboard/ShipContent";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



const Dashboard = () =>  {

  return (
    <>
      <main className="w-screen h-screen p-4 bg-stone-950 text-offwhite">
        <AgentInfo />
        <Tabs defaultValue="ships" className="bg-black rounded-[5px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ships">Ships</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
            <TabsTrigger value="system">Systems</TabsTrigger>
          </TabsList>
          <TabsContent value="contracts">
            <Contracts />
          </TabsContent>
          <TabsContent value="system">
            <Card className="p-4">
              System
            </Card>
          </TabsContent>
          <TabsContent value="ships">
            <ShipsTabContent />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}

export default Dashboard;
