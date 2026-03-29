const calculateCommission = (amount) => {
  const commissionRate = parseFloat(process.env.DEFAULT_COMMISSION_RATE) || 0.1;

  const commission = amount * commissionRate;

  return commission;
};

export { calculateCommission };