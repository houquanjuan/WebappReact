import React from 'react'
import { Line } from '@ant-design/charts'
import { useAccess, Access, useModel } from 'umi';
import styles from './index.less'
import { Image } from 'antd';

// export default () => {
//     return <div>new page</div>
// }

const Page: React.FC = () => {
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];
      const config = {
        data,
        height: 400,
        xField: 'year',
        yField: 'value',
        point: {
          size: 5,
          shape: 'diamond',
        },
      };
      const message = useModel('demo')
    //   const {add, minus} = useModel('counter', (ret) => ({
    //       add: ret.increment,
    //       minus: ret.decrement
    //   }))
      const {counter, increment: add, decrement: minus} = useModel('counter')
      const access = useAccess()
      const {initialState, refresh, loading} = useModel('@@initialState')
      console.log(initialState, refresh, loading)
      return <div className={styles.page}>
          <h1 className={styles.title}>{message}</h1>
          <div>
              <p>{counter}</p>
              <button onClick={add}>add</button>
              <button onClick={minus}>minus</button>
          </div>
          <div>
              <Access accessible={access.canReadFoo} fallback={<div>connt read foo file</div>}>
                    foo content
              </Access>
              <Access accessible={access.canUpdateFoo()} fallback={<div>connt update foo file</div>}>
                    foo content
              </Access>
              <Access accessible={access.canDeleteFoo(counter)} fallback={<div>connt delete foo file</div>}>
                    foo content
              </Access>
          </div>
          <Image src='/logo.svg' />
      </div>
    //   return <Line {...config} />
}

export default Page