export function ErrorPage() {
  return (
    <main
      className='
        w-screen h-screen bg-[#09090a] text-[#e1e1e6] font-mono
      '
    >
      <div
        className='
          w-screen h-screen
          flex flex-col
        '
      >
        <header
          className='
            w-screen h-60 md:h-80 bg-red-600 pb-8 pt-8
            flex flex-col justify-end text-center gap-2
            border-b-2 border-zinc-800
          '
        >
          <h1 className='text-7xl md:text-9xl font-bold text-white'>404</h1>
          <h2 className='text-2xl md:text-4xl text-zinc-100'>Nada Aqui... Ainda</h2>
        </header>

        <div
          className='
            w-full h-full bg-[#09090a] px-10
            flex justify-center items-center
          '
        >
          <div
            className='
              h-fit rounded-lg px-10 py-20
              border-2 border-[#e1e1e6] border-dashed
              flex justify-center items-center text-center
              text-bold
              md:mx-20 md:px-20 md:py-20'
            >
            <span className='text-lg'>
              Ansioso para ver esse projeto na pratica? eu também mas vamos ter que esperar um pouco mais.
            </span>
          </div>
        </div>

        <footer
          className='
            w-screen bg-[#121214] p-10 pl-10
            flex flex-col gap-5 justify-start items-start
            md:flex-row md:justify-between md:items-center'>
          <span>
            <p className='text-md font-bold'>Cosmux Comp.</p>
            <p className='text-xs'>copyright © 2023 todos os direitos reservados</p>
          </span>
        </footer>
      </div>
    </main>
  )
}
