import { Alert } from 'antd'

export default function Error() {
  return <Alert className="error" message="Error" description="Что-то пошло не так" type="error" showIcon />
}
