export function calculateMonthlyValues(
  invest: number,
  rate: number,
  period: number,
  initialAmount = 0
) {
  const r = rate / 12 / 100; // 将年化收益率转换为月利率
  let A = initialAmount + invest; // 第一个月初的账户价值
  const monthlyValues = [A.toFixed(2)]; // 存储每个月初的账户价值，精确到小数点后两位

  for (let i = 1; i < period; i++) {
    A = A * (1 + r) + invest;
    monthlyValues.push(A.toFixed(2));
  }

  return monthlyValues;
}

// 从 localStorage 中读取初始值的函数
export function getInitialValue(key: string, defaultValue: number) {
  const savedValue = localStorage.getItem(key);
  return savedValue ? parseFloat(savedValue) : defaultValue;
}
