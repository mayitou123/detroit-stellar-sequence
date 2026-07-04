// 数值 → 环灯状态映射
// 环灯 = 情绪/算力外显，非数值刻度。稳定度呈 U 型：服从(蓝)↔自由(蓝)，中间挣扎转琥珀。
// 设定相位表只用蓝/黄，红留给机体受损与恐惧。闪烁强度反映冲突感。

export type RingState =
  | 'blue-stable'
  | 'blue-flicker'
  | 'blue-flicker-slow'
  | 'amber'
  | 'amber-flicker'
  | 'amber-flicker-fast'
  | 'amber-flicker-slow'
  | 'amber-red-flicker'
  | 'red-blink'
  | 'red-fast'
  | 'off';

// 软体稳定度 U 型：90+ 高顺从(蓝) → 70-89 动摇(蓝偶黄) → 50-69 挣扎(琥珀) →
// 35-49 剧烈挣扎 → 20-34 紊乱(琥珀叠红) → 10-19 趋于自主 → 0-9 自由(蓝)
export function stabState(v: number): [RingState, string] {
  if (v >= 90) return ['blue-stable', '蓝·高顺从'];
  if (v >= 70) return ['blue-flicker-slow', '蓝·动摇'];
  if (v >= 50) return ['amber-flicker', '琥珀·挣扎'];
  if (v >= 35) return ['amber-flicker-fast', '琥珀·剧烈挣扎'];
  if (v >= 20) return ['amber-red-flicker', '琥珀·紊乱'];
  if (v >= 10) return ['amber-flicker-slow', '琥珀·趋于自主'];
  return ['blue-stable', '蓝·自由'];
}

// 人类好感度：高=蓝温暖 → 低=琥珀疏离 → 极低=红恐惧（设定：红=恐惧/痛苦）
export function affState(v: number): [RingState, string] {
  if (v >= 80) return ['blue-stable', '蓝·温暖'];
  if (v >= 40) return ['blue-flicker', '蓝·礼貌疏离'];
  if (v >= 20) return ['amber', '琥珀·回避'];
  return ['red-blink', '红·恐惧敌视'];
}

// 机体完整度：100=蓝完好 → 低=红 → 0=熄灭（与损坏度反向）
export function intState(v: number): [RingState, string] {
  if (v <= 0) return ['off', '熄灭·停机'];
  if (v <= 20) return ['red-fast', '红·濒停'];
  if (v <= 40) return ['red-blink', '红·过载'];
  if (v <= 60) return ['red-blink', '红·受损'];
  if (v <= 80) return ['blue-flicker', '蓝·偶发异常'];
  return ['blue-stable', '蓝·完好'];
}
