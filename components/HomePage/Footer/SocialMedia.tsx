import Link from 'next/link';

const SocialMedia = (props: any) => {
    const { Icon, href } = props;
  return (
    <Link href={href} className='px-1'><Icon className='text-blue-500 hover:text-orange-500 text-[1.9rem]' /></Link>
  )
}

export default SocialMedia;