import Image from "next/image";
import Bar from "@/components/Bar/Bar";
import Ask from "@/components/Text/Ask";
import ChatRobot from "@/components/RobotModel/ChatRobot";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-between">
      {/* <Bar />

      <ChatRobot /> */}

      <Ask />
    </div>
  );
}
