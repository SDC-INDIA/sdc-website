import EventsForm from '@/src/components/EventsPage/EventsForm'
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/Auth/auth";
import Error from 'next/error'
import Head from 'next/head';


const AddEvent = () => {
  const [user, loading] = useAuthState(auth);
  if(!user){
    return <Error statusCode={404} />
  }
  return (
    <div>
        <Head>
          <title>Add Event</title>
        </Head>
        <EventsForm />
    </div>
  )
}

export default AddEvent