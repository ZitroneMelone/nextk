import {useRouter} from 'next/router';

import Head from "next/head";

export default function Car({car}) {
    const router = useRouter()
    const {id} = router.query

    return (<>
        <Head>
            <title>{car.id}</title>
        </Head>
        <h2>Hello {id}</h2>
        <img src={car.image}/>
    </>)
}

export async function getStaticProps({params}) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json()

    return {
        props: {car: data},
    }
}

export async function getStaticPaths({params}) {
    const req = await fetch(`http://localhost:3000/cars.json`)
    const data = await req.json()

    const paths = data.map(car =>{
        return {params: {id: car.id}}
    })

    return {
        paths,
        fallback:false
    }
}

