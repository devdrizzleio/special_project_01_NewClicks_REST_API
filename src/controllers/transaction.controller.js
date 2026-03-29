import { Transaction } from "../models/transaction.model.js";

const createTransaction = async (req, res) => {
  try {
    const { productId, affiliateId, amount, commission } = req.body;

    const transaction = await Transaction.create({
      productId,
      affiliateId,
      amount,
      commission
    });

    res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    res.status(200).json({
      success: true,
      data: transactions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export { createTransaction, getAllTransactions };