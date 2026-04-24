import LeftPanel from "@/components/auth/LeftPanel";
import RightPanel from "@/components/auth/RightPanel";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default AuthPage;
