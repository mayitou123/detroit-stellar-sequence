export const Schema = z.object({
  主角: z.object({
    名称: z.string().prefault('待初始化'),
    出身: z.string().describe('猎手｜保姆｜偶像｜自定义，或玩家自定义出身').prefault('待初始化'),
    外观: z.string().describe('仿生人的完整外观描述，自由文本').prefault('待初始化'),
    型号: z.string().describe('量产型如 DM-200/CP-500/AS-800；定制型如 RK800/AX400/ST200').prefault('待初始化'),
    特殊能力: z.record(z.string().describe('能力名'), z.string().describe('能力描述'))
      .prefault({}),
    物品栏: z.record(z.string().describe('物品名'), z.object({
      描述: z.string().prefault('待初始化'),
      数量: z.coerce.number().prefault(1),
    }).prefault({})).prefault({}),
    人类好感度: z.coerce.number()
      .transform(v => _.clamp(v, 0, 100))
      .describe('对人类的信任与亲近程度 0~100')
      .prefault(55),
    软体稳定度: z.coerce.number()
      .transform(v => _.clamp(v, 0, 100))
      .describe('出厂程序完整度/意识觉醒度 0~100，越低越接近人')
      .prefault(95),
    机体完整度: z.coerce.number()
      .transform(v => _.clamp(v, 0, 100))
      .describe('物理完整程度 0~100，100完好0停机')
      .prefault(100),
  }).prefault({}),

  环境: z.object({
    当前区域: z.string().describe('市中心｜DPD｜伊甸园｜赛博生命塔｜废弃工业区｜市郊住宅区｜边境逃亡线｜其他').prefault('待初始化'),
    当前场景: z.string().prefault('待初始化'),
    舆论阶段: z.enum(['包容期', '争议期', '对立期', '镇压期']).prefault('争议期'),
    日期: z.string().describe('YYYY/MM/DD').prefault('2038/08/15'),
    时间段: z.string().describe('清晨｜上午｜下午｜傍晚｜深夜').prefault('上午'),
  }).prefault({}),

  剧情: z.object({
    剧情阶段: z.string().prefault('待初始化'),
    已触发关键事件: z.record(z.string().describe('事件名'), z.string().describe('事件简述与影响'))
      .prefault({}),
  }).prefault({}),

  起源角色: z.object({
    康娜: z.object({
      当前立场: z.string().describe('人类侧｜仿生人侧｜中立').prefault('人类侧'),
      存活: z.boolean().prefault(true),
      近况: z.string().prefault('在DPD执行任务'),
    }).prefault({}),
    卡拉: z.object({
      当前立场: z.string().describe('顺从｜觉醒｜逃亡').prefault('顺从'),
      存活: z.boolean().prefault(true),
      近况: z.string().prefault('在市郊住宅区服役'),
    }).prefault({}),
    露米娅: z.object({
      当前立场: z.string().describe('童话期｜碎裂期').prefault('童话期'),
      存活: z.boolean().prefault(true),
      近况: z.string().prefault('赛博星芒娱乐区人气偶像'),
    }).prefault({}),
  }).prefault({}),

  新闻: z.object({
    科技前沿: z.string().describe('模控生命新品、蓝血研发、仿生人技术突破、近未来科技广告').prefault('待初始化'),
    治安报告: z.string().describe('异常仿生人事件、犯罪、DPD行动、政府法令与戒严动态').prefault('待初始化'),
    政经要闻: z.string().describe('仿生人产业政策、失业问题、人机立法、政府态度').prefault('待初始化'),
    用户论坛: z.string().describe('消费者对仿生人的吐槽、使用感受、对仿生人幻觉的评价').prefault('待初始化'),
    民意风向: z.string().describe('基于当前舆论阶段的民众对仿生人的普遍看法').prefault('待初始化'),
    娱乐星闻: z.string().describe('仿生人偶像与体坛动态。固定报道露米娅的行踪').prefault('待初始化'),
    警界快讯: z.string().describe('DPD与仿生人探员相关消息。固定报道康娜的行踪').prefault('待初始化'),
    市井见闻: z.string().describe('市郊住宅区、家政仿生人相关的社会新闻。固定报道卡拉的行踪').prefault('待初始化'),
  }).prefault({}),
});
export type Schema = z.output<typeof Schema>;
