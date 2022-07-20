import router from "next/router";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    router.push("/dashboard/home");
  }, []);
  return <></>;
}

export default Dashboard;
