
import Head from 'next/head'
import { ReactNode } from 'react'
import { getAllProductsPublic } from 'src/services/product'
import { getAllProductTypes } from 'src/services/product-type'
import productType from 'src/stores/product-type'
import { TProduct } from 'src/types/product'

// layouts
import LayoutNotApp from 'src/views/layouts/LayoutNotApp'

// ** Pages
import HomePage from 'src/views/pages/home'

interface TOptions {
  label: string
  value: string
}

interface TProps {
  products: TProduct[],
  totalCount: number,
  productTypes: TOptions[]
  params: {
    limit: number
    page: number
    order: string
    productType: string
  }
}

export default function Home(props: TProps) {
  const { products, totalCount, params, productTypes } = props

  return (
    <>
      <Head>
        <title>NHD Shop - Danh sách sản phẩm</title>
        <meta name='description' content='Bán hàng điện tử, điện thoại, máy tính bảng, Khóa luận tốt nghiệp 2024 by Ngô Hoàng Duy - Xây dựng website bán hàng' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='ReactJS, NextJS 14, Typescript, NHD Shop' />
      </Head>
      <HomePage products={products} totalCount={totalCount} paramsServer={params} productTypesServer={productTypes} />
    </>
  )
}

Home.getLayout = (page: ReactNode) => <LayoutNotApp>{page}</LayoutNotApp>
Home.guestGuard = false
Home.authGuard = false
Home.title = "Danh sách sản phẩm của cửa hàng NHD Shop"

export async function getServerSideProps() {
  const limit = 9
  const page = 1
  const order = "createdAt desc"
  try {
    const productTypes: TOptions[] = [{'label': 'Tất cả sản phẩm', 'value': ''}]
    await getAllProductTypes({ params: { limit: -1, page: -1 } })
      .then(res => {
        const data = res?.data.productTypes
        if (data) {
          data?.map((item: { name: string; _id: string }) => {
            productTypes.push({ label: item.name, value: item._id })
          })
        }
      })
    const res = await getAllProductsPublic(
      { params: { limit: limit, page: page, order, productType: '' } }
    )

    const data = res?.data

    return {
      props: {
        products: data?.products,
        totalCount: data?.totalCount,
        productTypes: productTypes,
        params: {
          limit,
          page,
          order,
          productType: ''
        }
      }
    }
  } catch (error) {
    return {
      props: {
        products: [],
        totalCount: 0,
        params: {
          limit,
          page,
          order
        }
      }
    }
  }
}