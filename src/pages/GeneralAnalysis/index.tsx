import React, { useRef } from 'react'
import styles from './index.less'
import { FormInstance, FormItemProps } from 'antd/es/form'
import { Form } from 'antd'
import ProTable, { ProColumns } from '@ant-design/pro-table'
import { useIntl } from 'umi'
import { PageContainer } from '@ant-design/pro-layout'
import { rule } from '@/services/ant-design-pro/rule'

// const [form] = Form.useForm();

// const ref = useRef<FormInstance>()
// ref.current = form

const TablePage: React.FC = () => {

  const intl = useIntl();

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
      tip: 'The rulename is the unique key',
    },
    {
      title: '描述',
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      renderText: (val: string) => 
      `${val}${intl.formatMessage({
        id: 'pages.searchTable.tenThousand',
        defaultMessage: '万'
      })}
      `
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
  ]

   
  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle="测试表格"
        rowKey="key"
        columns={columns}
        request={rule}
        search={false}
        toolBarRender={false}
        />
    </PageContainer>
  )
}

export default TablePage