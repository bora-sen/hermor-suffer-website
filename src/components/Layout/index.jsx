import React from 'react'

function Layout({children}) {
  return (
    <main className='bg-main-image top-0 bg-fixed bg-center'>
        <section className='xl:w-[85rem] xl:mx-auto'>
          {children}
        </section>
    </main>
  )
}

export default Layout