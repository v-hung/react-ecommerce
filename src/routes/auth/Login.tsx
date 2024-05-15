import { FormEvent, useCallback, useState } from 'react'
import PageHeader from '../../components/layouts/partials/PageHeader'
import Container from '../../components/Container'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import useUserStore from '../../stores/user'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const { login } = useUserStore()
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()
  const { redirectUrl } = Object.fromEntries(searchParams.entries())

  const submit = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (loading) return
      setLoading(true)

      const { email, password, remember }: any = Object.fromEntries(new FormData(e.target as HTMLFormElement))

      console.log({email, password, remember, redirectUrl})
      
      await login({
        email, password, remember
      })

      navigate(redirectUrl || "/")

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <>
      <PageHeader title='Đăng nhập' breadcrumbs={[{ title: "Tài khoản của tôi"}]} />
      <section className='bg-white pb-12'>
        <Container className='flex justify-center'>
          <form className="flex w-full max-w-md flex-col gap-4 border p-6 rounded shadow" onSubmit={submit} method='post'>
            <h6 className='font-bold text-xl'>Đăng nhập</h6>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Tên người dùng hoặc địa chỉ email" /> 
                <span className="text-red-500">*</span>
              </div>
              <TextInput id="email" name="email" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Mật khẩu" />
                <span className="text-red-500">*</span>
              </div>
              <TextInput id="password" name="password" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" name="remember" />
              <Label htmlFor="remember">Ghi nhớ</Label>
            </div>
            <Button type="submit" isProcessing={loading}>Tiếp tục</Button>

            <p className='text-center text-sm'>
              Không có tài khoản? 
              <Link to="/account/register" className='pl-2 link font-semibold'>Đăng ký tài khoản mới</Link>
            </p>
          </form>
        </Container>
      </section>
    </>
  )
}

export default Login