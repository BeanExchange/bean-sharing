// app/page.js
'use server';
import { Metadata } from 'next';
import SPage from '@/app/s/components/SPage';

export async function generateMetadata({searchParams} : {searchParams: {id: string}}) {
  const {id} = searchParams;

  const linkWithId = `https://res.cloudinary.com/gmx-io/image/upload/gmx/${id}.jpg`


  const metaData: Metadata = {
    title: 'Bean Exchange',
    description: 'Experience hyper on-chain trading UX: spot or perpetual contracts on hundreds of asset pairs with leverage up to 50x',
    openGraph: {
      title: 'BeanEx',
      description: 'Experience hyper on-chain trading UX: spot or perpetual contracts on hundreds of asset pairs with leverage up to 50x',
      images: [
        {
          url: linkWithId,
          width: 1024,
          height: 512,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BeanEx',
      description:  'Experience hyper on-chain trading UX: spot or perpetual contracts on hundreds of asset pairs with leverage up to 50x',
      images: [
        linkWithId,
      ],
    },
  };
  return metaData
}


export default async function Page() {
  return <SPage/>
}