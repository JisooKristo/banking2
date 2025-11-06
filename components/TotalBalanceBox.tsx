"use client";

import { formatAmount } from '@/lib/utils';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

type TotalBalanceBoxProps = {
  accounts?: any[];
  totalBanks: number;
  totalCurrentBalance: number;
};

const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}) => {
  return (
    <section className="total-balance p-6 bg-white shadow rounded-lg">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-xl font-semibold">Bank Accounts: {totalBanks}</h2>

        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-sm">Total Current Balance</p>
                                   <div className="text-2xl font-bold">
                                   <AnimatedCounter amount={totalCurrentBalance} />
                                   </div>

        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
