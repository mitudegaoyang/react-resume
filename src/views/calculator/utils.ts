// 从 localStorage 中读取初始值的函数
export function getInitialValue(key: string, defaultValue: number) {
  const savedValue = localStorage.getItem(key);
  return savedValue ? parseFloat(savedValue) : defaultValue;
}

// 计算固定年化收益下定投每月的账户金额
export function calculateMonthlyValues(
  invest: number,
  rate: number,
  period: number,
  initialAmount = 0,
  sortByYearDesc = true
) {
  const r = rate / 12 / 100; // 将年化收益率转换为月利率
  let A = initialAmount; // 初始账户价值
  const monthlyValues = []; // 存储每个月初的数据

  for (let i = 0; i < period; i++) {
    const monthStartValue = A + invest; // 月初账户价值
    const monthlyProfit = monthStartValue * r; // 本月的盈利金额
    const monthEndValue = monthStartValue + monthlyProfit; // 月末账户价值

    monthlyValues.push({
      monthStartValue: monthStartValue.toFixed(2), // 月初账户价值
      monthEndValue: monthEndValue.toFixed(2) // 月末账户价值
    });

    A = monthEndValue; // 更新下个月初的账户价值
  }

  if (sortByYearDesc) {
    return monthlyValues.reverse(); // 直接翻转数组
  }

  return monthlyValues;
}
