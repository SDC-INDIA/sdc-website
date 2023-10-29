import React from 'react'
import LoginCard from '../components/AuthPage/LoginCard'
import Head from 'next/head'


const login = () => {
  return (
    <div>
        <Head>
          <title>Login</title>
        </Head>
        <LoginCard />
    </div>
  )
}

export default login