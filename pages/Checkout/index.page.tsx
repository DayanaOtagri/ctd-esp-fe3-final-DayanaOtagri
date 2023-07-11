import { Box, Stack } from '@mui/material'
import CheckoutCard from 'dh-marvel/components/Card/CheckoutCard'
import Stepper from 'dh-marvel/components/Fomrs/Stepper/Stepper'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { getComic } from 'dh-marvel/services/marvel/marvel.service'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Checkout() {
  const router = useRouter();
  const { comic } = router.query;
  const [comicData, setComicData] = useState<any>();

  useEffect(() => {
    if (comic) {
      const id = parseInt(comic as string);
      getComic(id).then((data: any) => {
        console.log(data)
        setComicData(data);
      });
    } else {
      router.push('/');
    }
  }, [comic, router]);

  return (
    <>
      <Head>
        <title>Checkout | DH MARVEL</title>
      </Head>
      <LayoutCheckout>
        <BodySingle title='Compra tu cómic'>
          <Box sx={{ padding: { xs: "20px", sm: "20px" } }} display={'flex'} justifyContent={'center'}>
            <Stack
              direction={{ sm: "column", md: "row-reverse" }}
              spacing={{ xs: 5, sm: 8, md: 8, xl: 20 }}
              alignItems={'center'}
            >
             <CheckoutCard
                title={comicData?.title}
                image={`${comicData?.thumbnail?.path}.${comicData?.thumbnail?.extension}`}
                price={comicData?.price}
                id={comicData?.id}
              />
              <Stepper
                title={comicData?.title}
                image={`${comicData?.images[0]?.path}.${comicData?.images[0]?.extension}`}
                price={comicData?.price}
              />
            </Stack>
          </Box>
        </BodySingle>
      </LayoutCheckout>
    </>
  )
}

export default Checkout
