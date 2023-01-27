import { ErrorPage } from '@/components/ErrorPage'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gerenciador de Fichas</title>
        <meta name="description" content="Nada aqui... ainda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ErrorPage />
    </>
  )
}
