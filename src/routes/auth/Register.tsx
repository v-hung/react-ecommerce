import { FormEvent, useCallback, useState } from 'react'
import PageHeader from '../../components/layouts/partials/PageHeader'
import Container from '../../components/Container'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import useUserStore from '../../stores/user'

const Register = () => {
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
      <PageHeader title='Đăng ký' breadcrumbs={[{ title: "Tài khoản của tôi"}]} />
      <section className='bg-white pt-6 pb-12'>
        <Container className='flex justify-center'>
          <form className="flex w-full max-w-md flex-col gap-4" onSubmit={submit} method='post'>
            <h6 className='font-bold text-xl'>Đăng ký</h6>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Tên người dùng hoặc địa chỉ email" /> 
                <span className="text-red-500">*</span>
              </div>
              <TextInput id="email" name="email" type="email" placeholder="name@flowbite.com" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Tên đầy đủ" /> 
                <span className="text-red-500">*</span>
              </div>
              <TextInput id="fullName" name="fullName" type="text" placeholder="name@flowbite.com" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Mật khẩu" />
                <span className="text-red-500">*</span>
              </div>
              <TextInput id="password" name="password" type="password" required 
                helperText={
                  <>
                    Mật khẩu phải bao gồm chữ in (A-Z), chữ thường (a-z), số (0-9) và ký tự đặc biệt
                  </>
                }
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="rePassword" value="Nhập lại Mật khẩu" />
                <span className="text-red-500">*</span>
              </div>
              <TextInput id="rePassword" name="rePassword" type="password" required 
                helperText={
                  <>
                    Nhập lại Mật khẩu phải giống Mật khẩu
                  </>
                }
              />
            </div>

            <Button type="submit" isProcessing={loading}>Tiếp tục</Button>

            <p className='text-center text-sm'>
              Đã có tài khoản? 
              <Link to="/account/login" className='pl-2 link font-semibold'>Đăng nhập</Link>
            </p>
          </form>
        </Container>
      </section>
    </>
  )
}

export default Register