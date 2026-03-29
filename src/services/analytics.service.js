import { TrackingEvent } from "../models/trackingEvent.model.js";
import { Transaction } from "../models/transaction.model.js";

const getAnalyticsSummary = async () => {
  const totalClicks = await TrackingEvent.countDocuments({ type: "CLICK" });

  const totalPurchases = await TrackingEvent.countDocuments({ type: "PURCHASE" });

  const totalRevenueData = await Transaction.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$amount" }
      }
    }
  ]);

  const totalRevenue = totalRevenueData[0]?.totalRevenue || 0;

  const conversionRate =
    totalClicks === 0 ? 0 : (totalPurchases / totalClicks) * 100;

  return {
    totalClicks,
    totalPurchases,
    totalRevenue,
    conversionRate
  };
};

export { getAnalyticsSummary };