// 类型定义
type DistributionType =
  | 'random'
  | 'normal'
  | 'extreme'
  | 'uniform'
  | 'linear-decrease'
  | 'exponential'
  | 'multi-peak';
interface Peak {
  mean: number;
  stdDev: number;
  weight: number;
}

// 将元转换为分
function yuanToCent(amount: number): number {
  return Math.round(amount * 100);
}

// 将分转换为元并保留两位小数
function centToYuan(amount: number): number {
  return parseFloat((amount / 100).toFixed(2));
}

// 从 localStorage 中读取初始值的函数
export function distributeRedEnvelope(
  totalAmount: number,
  numPeople: number,
  minAmount: number = 0.01,
  distributionType: DistributionType = 'random'
): number[] {
  if (numPeople <= 0 || totalAmount < numPeople * minAmount) {
    throw new Error('无效参数：人数必须大于0且总金额应该至少等于人数乘以最小金额。');
  }

  // 转换为分进行计算
  const totalCent = yuanToCent(totalAmount);
  const minCent = yuanToCent(minAmount);

  // 初始分配，每人先分得最小金额（分）
  let amounts: number[] = Array(numPeople).fill(minCent);
  let remainingCent: number = totalCent - numPeople * minCent;

  // 根据选择的分配类型进行剩余金额分配
  switch (distributionType.toLowerCase()) {
    case 'random':
      randomDistribution(amounts, remainingCent, minCent);
      break;

    case 'normal':
      normalDistribution(amounts, remainingCent, minCent);
      break;

    case 'extreme':
      extremeDistribution(amounts, remainingCent, minCent);
      break;

    case 'uniform':
      uniformDistribution(amounts, remainingCent, minCent);
      break;

    case 'linear-decrease':
      linearDecreaseDistribution(amounts, remainingCent, minCent);
      break;

    case 'exponential':
      exponentialDistribution(amounts, remainingCent, minCent);
      break;

    case 'multi-peak':
      multiPeakDistribution(amounts, remainingCent, minCent);
      break;

    default:
      throw new Error('未知的分配类型');
  }

  // 确保最后一个人获得剩余的所有金额（分）
  ensureFinalAmount(amounts, totalCent);

  // 打乱数组顺序
  shuffleArray(amounts);

  // 验证总金额是否正确（分）
  const sumCent = amounts.reduce((acc, curr) => acc + curr, 0);

  if (!isCloseEnough(sumCent, totalCent)) {
    throw new Error('金额分配出现错误，总金额不匹配。');
  }

  // 返回结果时再转换回元
  return amounts.map(centToYuan);
}

// 辅助函数定义

function isCloseEnough(a: number, b: number, tolerance: number = 0.01): boolean {
  return Math.abs(a - b) < tolerance;
}

function ensureFinalAmount(amounts: number[], totalAmount: number): void {
  const sumBefore = amounts.reduce((acc, curr) => parseFloat((acc + curr).toFixed(2)), 0);
  const lastAmount = parseFloat((totalAmount - sumBefore).toFixed(2));
  if (lastAmount > 0) {
    // 确保最后一笔金额是正数
    amounts[amounts.length - 1] += lastAmount;
  }
}

// 正态分布随机数生成器，用于正态分布和多峰分布
function normalRandom(mean: number, stdDev: number): number {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // 确保u非零
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num * stdDev + mean;
  return Math.abs(num); // 确保返回正值
}

// 打乱数组顺序
function shuffleArray(array: number[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 获取可以继续分配金额的人的索引
function getAvailableIndices(amounts: number[], remainingCent: number, minCent: number): number[] {
  return amounts
    .map((value, index) => ({ value, index }))
    .filter(({ value }) => value < Number.MAX_SAFE_INTEGER - remainingCent && value >= minCent)
    .map(({ index }) => index);
}

// 平均分配剩余金额，当无法实现线性递减时使用
function averageDistribution(amounts: number[], remainingCent: number): void {
  const numPeople = amounts.length;
  const avg = Math.floor(remainingCent / numPeople);

  for (let i = 0; i < numPeople && remainingCent > 0; i++) {
    const additionalCent = Math.min(avg, remainingCent);
    if (additionalCent > 0) {
      amounts[i] += additionalCent;
      remainingCent -= additionalCent;
    }
  }
}

/**
 * 完全随机分配：每次从剩余金额中随机抽取一个不大于最大允许值的数作为当前人的红包金额。
 */
function randomDistribution(amounts: number[], remainingCent: number, minCent: number): void {
  while (remainingCent > 0) {
    const availableIndices = getAvailableIndices(amounts, remainingCent, minCent);

    if (availableIndices.length === 0 || remainingCent <= 0) break;

    const index = availableIndices[Math.floor(Math.random() * availableIndices.length)];

    // 随机分配一个金额，确保不会超过剩余金额
    let maxPossibleAmount = remainingCent;

    const additionalCent = Math.min(
      maxPossibleAmount,
      Math.floor(Math.random() * (remainingCent + 1))
    );

    if (additionalCent > 0) {
      amounts[index] += additionalCent;
      remainingCent -= additionalCent;
    }
  }
}

/**
 * 正态分布分配：使用正态分布使得大多数人的红包金额集中在某个平均值附近，而少数人会获得较高或较低的金额。
 */
function normalDistribution(amounts: number[], remainingCent: number, minCent: number): void {
  const numPeople = amounts.length;

  // 计算平均值和标准差
  const mean = remainingCent / numPeople;
  const stdDev = mean / 3; // 标准差可以根据需要调整

  while (remainingCent > 0) {
    const availableIndices = getAvailableIndices(amounts, remainingCent, minCent);

    if (availableIndices.length === 0 || remainingCent <= 0) break;

    // 使用正态分布生成随机数
    const additionalCent = Math.floor(normalRandom(mean, stdDev));
    // 随机分配一个金额，确保不会超过剩余金额
    let maxPossibleAmount = remainingCent;

    const actualAdditionalCent = Math.min(additionalCent, maxPossibleAmount);

    if (actualAdditionalCent > 0) {
      const index = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      amounts[index] += actualAdditionalCent;
      remainingCent -= actualAdditionalCent;
    }
  }
}

/**
 * 两端权重大（极端值更常见）：创建一种“大多数人得到小额，少数人得到大额”的效果。
 */
function extremeDistribution(amounts: number[], remainingCent: number, minCent: number): void {
  while (remainingCent > 0) {
    const availableIndices = getAvailableIndices(amounts, remainingCent, minCent);
    if (availableIndices.length === 0 || remainingCent <= 0) break;

    // 决定偏向高值还是低值
    const isHighValuePreference = Math.random() > 0.5;

    let additionalCent;
    if (isHighValuePreference) {
      // 更倾向于高值
      additionalCent = Math.floor(
        Math.min(remainingCent - Math.pow(Math.random(), 2) * remainingCent, remainingCent)
      );
    } else {
      // 更倾向于低值
      additionalCent = Math.floor(
        Math.min(Math.pow(Math.random(), 2) * remainingCent, remainingCent)
      );
    }

    if (additionalCent === 0) break;

    if (additionalCent > 0) {
      const index = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      amounts[index] += additionalCent;
      remainingCent -= additionalCent;
    }
  }
}

/**
 * 均匀分布：每个人的红包金额均匀分布在最小值和最大值之间。
 */
function uniformDistribution(amounts: number[], remainingCent: number, minCent: number): void {
  while (remainingCent > 0) {
    const availableIndices = getAvailableIndices(amounts, remainingCent, minCent);
    if (availableIndices.length === 0 || remainingCent <= 0) break;

    const additionalCent = Math.floor(
      Math.min(
        remainingCent / availableIndices.length, // 平均分配
        remainingCent
      )
    );

    if (additionalCent === 0) break;

    if (additionalCent > 0) {
      const index = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      amounts[index] += additionalCent;
      remainingCent -= additionalCent;
    }
  }
}

/**
 * 线性递减：按照一定的比例逐渐减少红包金额，例如第一个红包较大，然后依次递减。
 */
function linearDecreaseDistribution(
  amounts: number[],
  remainingCent: number,
  minCent: number
): void {
  const numPeople = amounts.length;

  // 如果没有剩余金额，则无需进一步分配
  if (remainingCent <= 0) return;

  // 计算等差数列的末项 an = minCent （因为每个人已经有了 minCent）
  const an = 0; // 在这里设置为 0，因为我们已经在数组中预分配了 minCent

  // 使用二分查找找到合适的 a1，使得数列之和等于 remainingCent
  let low = Math.ceil(remainingCent / numPeople);
  let high = remainingCent;
  let a1 = 0;
  let sum = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    sum = (numPeople / 2) * (mid + an);

    if (sum > remainingCent) {
      high = mid - 1;
    } else if (sum < remainingCent) {
      low = mid + 1;
      a1 = mid;
    } else {
      a1 = mid;
      break;
    }
  }

  // 如果没有找到精确匹配，选择最接近的值并调整
  if (a1 === 0 && low <= high) {
    a1 = low; // 或者 high，取决于哪个更接近
  }

  // 如果 a1 和 an 之间的差距不足以形成有效的递减序列，平均分配
  if (a1 - an < minCent || numPeople === 1) {
    averageDistribution(amounts, remainingCent);
    return;
  }

  // 分配金额
  let d = (a1 - an) / (numPeople - 1); // 公差
  for (let i = 0; i < numPeople && remainingCent > 0; i++) {
    // 计算当前分配的金额，使用线性递减公式
    const additionalCent = Math.max(minCent, a1 - i * d);

    // 确保不会超过剩余金额
    const actualAdditionalCent = Math.min(additionalCent, remainingCent);

    if (actualAdditionalCent > 0) {
      amounts[i] += actualAdditionalCent;
      remainingCent -= actualAdditionalCent;
    }
  }
}

/**
 * TODO: 指数分布：小数值出现的概率较高，而大数值出现的概率较低，模拟“大部分人都得到小额，少数人得到大额”的效果。
 */
function exponentialDistribution(amounts: number[], remainingCent: number, minCent: number): void {
  function exponentialRandom(lambda: number): number {
    return -Math.log(1 - Math.random()) / lambda;
  }

  const lambda = 1 / (remainingCent / amounts.length); // 平均值作为lambda的倒数

  for (let i = 0; i < amounts.length && remainingCent > 0; i++) {
    let additionalAmount = exponentialRandom(lambda);
    additionalAmount = Math.min(additionalAmount, remainingCent, 0.99 - amounts[i]);
    if (additionalAmount > 0) {
      amounts[i] += additionalAmount;
      remainingCent -= additionalAmount;
      amounts[i] = parseFloat(amounts[i].toFixed(2));
    }
  }
}

/**
 * TODO: 多峰分布：存在多个峰值，即某些特定范围内的金额出现频率更高，创建多种不同类型的幸运者。
 */
function multiPeakDistribution(amounts: number[], remainingCent: number, minCent: number): void {
  function multiPeakRandom(peaks: Peak[]): number {
    let totalWeight = peaks.reduce((acc, peak) => acc + peak.weight, 0);
    let r = Math.random() * totalWeight;
    for (let peak of peaks) {
      if (r < peak.weight) {
        return normalRandom(peak.mean, peak.stdDev);
      }
      r -= peak.weight;
    }
    return 0; // 默认返回0，理论上不会达到这里
  }

  const peaks: Peak[] = [
    { mean: 0.1, stdDev: 0.05, weight: 2 }, // 小额多
    { mean: 0.5, stdDev: 0.1, weight: 1 }, // 中等金额少
    { mean: 1.0, stdDev: 0.2, weight: 0.5 } // 大额非常少
  ];

  for (let i = 0; i < amounts.length && remainingCent > 0; i++) {
    let additionalAmount = multiPeakRandom(peaks);
    additionalAmount = Math.min(additionalAmount, remainingCent, 0.99 - amounts[i]);
    if (additionalAmount > 0) {
      amounts[i] += additionalAmount;
      remainingCent -= additionalAmount;
      amounts[i] = parseFloat(amounts[i].toFixed(2));
    }
  }
}
