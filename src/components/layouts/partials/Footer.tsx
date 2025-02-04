import { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { Footer as FooterTheme } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Container from '../../Container';
import useWebStore from '../../../stores/web';
import { Link } from 'react-router-dom';
import { getImage } from '../../../lib/helper';

type State = HTMLAttributes<HTMLDivElement>

const Footer: FC<State> = (props) => {
  const { className, ...rest } = props

  const { store } = useWebStore()

  return (
    <div {...rest} className={twMerge('bg-zinc-800', className)}>
      <Container className='py-6'>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='mb-4'>
            <Link to={"/"} className="flex space-x-3">
              <img src={getImage(store?.image)} alt={store?.title} className='h-8' loading='lazy' />
              {/* <Link to={"/"} className='self-center whitespace-nowrap text-2xl font-semibold text-gray-300'>{store?.title}</Link> */}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTheme.Title title="about" />
              <FooterTheme.LinkGroup col>
                <FooterTheme.Link href="#">Flowbite</FooterTheme.Link>
                <FooterTheme.Link href="#">Tailwind CSS</FooterTheme.Link>
              </FooterTheme.LinkGroup>
            </div>
            <div>
              <FooterTheme.Title title="Follow us" />
              <FooterTheme.LinkGroup col>
                <FooterTheme.Link href="#">Github</FooterTheme.Link>
                <FooterTheme.Link href="#">Discord</FooterTheme.Link>
              </FooterTheme.LinkGroup>
            </div>
            <div>
              <FooterTheme.Title title="Legal" />
              <FooterTheme.LinkGroup col>
                <FooterTheme.Link href="#">Privacy Policy</FooterTheme.Link>
                <FooterTheme.Link href="#">Terms &amp; Conditions</FooterTheme.Link>
              </FooterTheme.LinkGroup>
            </div>
          </div>
        </div>
        <FooterTheme.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterTheme.Copyright href="#" by={store?.title ?? ""} year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterTheme.Icon href="#" icon={BsFacebook} />
            <FooterTheme.Icon href="#" icon={BsInstagram} />
            <FooterTheme.Icon href="#" icon={BsTwitter} />
            <FooterTheme.Icon href="#" icon={BsGithub} />
            <FooterTheme.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer