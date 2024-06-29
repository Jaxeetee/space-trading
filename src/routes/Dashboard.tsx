import AgentInfo from "@/components/dashboard/AgentInfo";

import Contracts from "@/components/dashboard/Contracts";
import ShipsTabContent from "@/components/dashboard/ShipContent";
import World from "@/components/dashboard/World";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



const Dashboard = () =>  {

  return (
    <>
      <main className="justify-center w-screen h-screen p-1 bg-zinc-900 text-offwhite">
        <div className="2xl:grid 2xl:place-items-center">
          <AgentInfo />
          <Tabs defaultValue="system" className="relative bg-black rounded-[5px] w-screen 2xl:w-4/6">
            <TabsList className="flex flex-row gap-4 ">
              <TabsTrigger value="ships">Ships</TabsTrigger>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              <TabsTrigger value="system">Systems</TabsTrigger>
            </TabsList>
            <TabsContent value="contracts" className="max-h-[28rem]">
              <Contracts />
            </TabsContent>
            <TabsContent value="system" className="max-h-[28rem]">
              <World />
            </TabsContent>
            <TabsContent value="ships" className="max-h-[28rem]">
              <ShipsTabContent />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
