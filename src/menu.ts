// 书的目录

export interface MenuInter {

  title: string
  src: string
  child?: MenuInter[]
}

export const bookMenu: MenuInter = {
  title: 'root',
  src: '',
  child: [
    { title: '1.准备', src: '1-ready' },
    { title: '2.变量与类型', src: '2_variable_and_type' },
    { title: '3.操作符', src: '3_operator' },
    { title: '4.if语句', src: '4_if_stmt' },
    {
      title: '5.list列表',
      src: '5_list',
      child: [
        { title: '1. list', src: '5_1_practice' },
        { title: '2 list练习1', src: '5_1_practice' },
        { title: '3 list练习2', src: '5_2_practice' },
      ],
    },
    {
      title: '6. range范围',
      src: 'range',
    },
    {
      title: '7. for循环',
      src: 'for',
      child: [
        { title: '1. for', src: 'for' },
        { title: '2. 明明的随机数', src: '明明的随机数' },
        { title: '3. 陶陶摘苹果', src: '陶陶摘苹果' },
        { title: '4. 校门外的树', src: '校门外的树' },
        { title: '5. 有趣的跳跃', src: '有趣的跳跃' },
      ],
    },
  ],
}
