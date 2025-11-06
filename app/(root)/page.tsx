'use client';

import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import BankCard from "@/components/BankCard";

const Home = () => {
  const loggedIn = {
    firstName: "Luis",
    lastName: "Moratalla",
    email: "luismiguelmoratalla47@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        <div className="recent-transactions">
          <h2 className="header-2 mb-4">Recent Transactions</h2>
          {/* Add a TransactionList or placeholder later */}
          <p className="text-gray-500">No recent transactions found.</p>
        </div>
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 123.50 },
          { currentBalance: 500.00}
        ]}
      />
    </section>
  );
};

export default Home;
