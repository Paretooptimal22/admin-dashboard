import { motion } from "framer-motion";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";

const USER_STATS = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Users"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={USER_STATS.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={USER_STATS.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={USER_STATS.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={USER_STATS.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UsersTable />
      </main>
    </div>
  );
};

export default UsersPage;
