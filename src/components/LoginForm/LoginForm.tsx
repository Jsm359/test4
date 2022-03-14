import { Form, Input, Checkbox, Button } from 'antd'
import { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { rules } from '../../utils/rules'

export const LoginForm = () => {
  const {error, isLoading} = useTypedSelector(state => state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useActions()
  const submit = () => {
    login(username, password)
  }

  return (
    <Form onFinish={submit}>
      {error && <div style={{color: "red"}}>
        {error}
      </div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Введите имя пользователя!')]}
      >
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль!')]}
      >
        <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Запомнить</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}
